import $ from 'jquery';
import ko from 'knockout';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'map-icons/dist/css/map-icons.css!'

$(function(){
	var createHandler = function(){
	    const ICONS = {
	   	  defalt: {
	   	  	label: 'map-icon-map-pin',
	        icon: {
	   	  		path: MAP_PIN,
				fillColor: '#1998F7',
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0
	   	  	}
	   	  },
	      home: {
	        label: 'map-icon-map-pin',
	        icon: {
	   	  		path: MAP_PIN,
				fillColor: '#1998F7',
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0
	   	  	}
	      },
	      glocery: {
	        label: 'map-icon-grocery-or-supermarket',
	        icon: {
	   	  		path: SQUARE,
				fillColor: '#00CCBB',
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0
	   	  	}
	      },
	      cafe: {
	        label: 'map-icon-cafe',
	        icon: {
	   	  		path: ROUTE,
				fillColor: '#B3897B',
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0
	   	  	}
	      }
	    };

	    var getIconLabel = function(type) {
	    	let icon = type in ICONS ?  ICONS[type].label : ICONS['defalt'].label;
	    	return `<span class="map-icon ${icon}"></span>`;
	    }

	    var getIcon = function(type) {
	    	return (type in ICONS) ?  ICONS[type].icon : ICONS['defalt'].icon;
	    }

		var map;
		var markers = [];

		ko.bindingHandlers.googlemap = {
		    init: function (element, valueAccessor) {
		    	var value = ko.unwrap(valueAccessor()),
		        	zoom = ko.unwrap(value.zoom),
		        	center = ko.unwrap(value.center);
      
		        var mapOptions = {
		        	zoom: zoom,
		        	center:  new google.maps.LatLng(center.latitude, center.longitude),
		        	mapTypeId: google.maps.MapTypeId.ROADMAP
		        };
		        //create map
		        map = new google.maps.Map(element, mapOptions);
		    },

		    update: function(element, valueAccessor) {
		    	// clear marker
		    	markers.map((marker) => marker.setMap(null));

		    	var value = ko.unwrap(valueAccessor()),
		        	locations = ko.unwrap(value.locations);

		        // create marker
		        ko.utils.arrayForEach(locations, 
		        	location => markers.push(new Marker({
		            	position: new google.maps.LatLng(
		            		ko.unwrap(location.latitude), 
		            		ko.unwrap(location.longitude)),
		            	map_icon_label: getIconLabel(ko.unwrap(location.type)),
						icon: getIcon(ko.unwrap(location.type)),
		            	map: map
		          	}))
		        )
	    	}
    	}
	};

    var model = {
    	locations: [
    		{name: 'Home', latitude:  37.3986234 , longitude: -121.94488590000003 , 
    			type: "home"},
        	{name: 'Safeway', latitude: 37.394634, longitude: -121.94767999999999, 
        		type: 'glocery'},
        	{name: 'Walmart', latitude: 37.39000850000001, longitude: -121.98550219999998,
        		type:'glocery'},
        	{name: 'Sprouts Farmers Market', latitude: 37.3667316, longitude: -122.0308412,
        		type: 'glocery'},
        	{name: 'Philz Coffee', latitude: 37.39000850000001, longitude: -122.03171250000003,
        		type:'cafe'},
        	{name: 'Sunnyvale Library', latitude: 37.37189800000001, longitude: -122.03891699999997,
        		type: 'lib'}
    	],
    	zoom: 12,
    	center: {latitude: 37.3986234 , longitude: -121.94488590000003}
    }

    var vm = {
		locations: ko.observableArray(ko.utils.arrayMap(model.locations, function(item) {
        	return { name: ko.observable(item.name), 
        			latitude: ko.observable(item.latitude),
        			longitude: ko.observable(item.longitude),
        			type: ko.observable(item.type)};
    	})),
		zoom: ko.observable(model.zoom),
		center: ko.observable(model.center),
		query: ko.observable(""),
		search: function(value) {
		    vm.locations.removeAll();
		    for(var loc of model.locations) {
		    	if(loc.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
		        	vm.locations.push(loc);
		      	}
		  	}
    	}
	}

	createHandler();
	vm.query.subscribe(vm.search);
	ko.applyBindings(vm);
});