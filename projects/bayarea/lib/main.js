import $ from 'jquery';
import ko from 'knockout';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

$(function(){
	var createHandler = function(){
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
		        map = new google.maps.Map(element, mapOptions);
		    },

		    update: function(element, valueAccessor) {
		    	markers.map((marker) => marker.setMap(null));

		    	var value = ko.unwrap(valueAccessor()),
		        	locations = ko.unwrap(value.locations);

		        ko.utils.arrayForEach(locations, 
		        	location => markers.push(new google.maps.Marker({
		            	position: new google.maps.LatLng(ko.unwrap(location.latitude), 
		            									ko.unwrap(location.longitude)),
		            	map: map
		          	}))
		        )
	    	}
    	}
	};

    var model = {
    	locations: [
    		{name: "Home", latitude:  37.3986234 , longitude: -121.94488590000003},
        	{name: "Safeway", latitude: 37.394634, longitude: -121.94767999999999},
        	{name: "Walmart", latitude: 37.39000850000001, longitude: -121.98550219999998},
        	{name: "Philz Coffee", latitude: 37.39000850000001, longitude: -122.03171250000003},
        	{name: "Sunnyvale Library", latitude: 37.37189800000001, longitude: -122.03891699999997},
        	{name: "Sprouts Farmers Market", latitude: 37.3667316, longitude: -122.0308412}
    	],
    	zoom: 12,
    	center: {latitude: 37.3986234 , longitude: -121.94488590000003}
    }

    var vm = {
		locations: ko.observableArray(ko.utils.arrayMap(model.locations, function(item) {
        	return { name: ko.observable(item.name), 
        			latitude: ko.observable(item.latitude),
        			longitude: ko.observable(item.longitude)};
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