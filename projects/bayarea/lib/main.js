import $ from 'jquery';
import ko from 'knockout';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'map-icons/dist/css/map-icons.css!'
import model from './model'


$(function(){
	var createHandler = function(){
	    var getIconLabel = function(type) {
	    	let icons = model.icons;
	    	let icon = type in icons ?  icons[type].label : icons['defalt'].label;
	    	return `<span class="map-icon ${icon}"></span>`;
	    }

	    var getIcon = function(type) {
	    	let icons = model.icons;
	    	return (type in icons) ?  icons[type].icon : icons['defalt'].icon;
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
		        	center:  new google.maps.LatLng(
		        		ko.unwrap(center.latitude), ko.unwrap(center.longitude)),
		        	mapTypeId: google.maps.MapTypeId.ROADMAP
		        };
		        //create map
		        map = new google.maps.Map(element, mapOptions);
		    },

		    update: function(element, valueAccessor) {
		    	// clear marker
		    	markers.map((marker) => marker.setMap(null));

		    	var value = ko.unwrap(valueAccessor()),
		        	locations = ko.unwrap(value.locations),
		        	center = ko.unwrap(value.center);

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

		        // update center
		         var newCenter = new google.maps.LatLng(
		        		ko.unwrap(center.latitude), ko.unwrap(center.longitude))
				 map.panTo(newCenter);
	    	}
    	}
	};

    var vm = function() {
    	let self = this;
		self.locations =  ko.observableArray(ko.utils.arrayMap(model.locations, function(item) {
        	return { name: ko.observable(item.name), 
        			latitude: ko.observable(item.latitude),
        			longitude: ko.observable(item.longitude),
        			type: ko.observable(item.type),
        			visit: ko.observable(item.visit)};
    	}));

		self.zoom = ko.observable(model.zoom);
		self.center = ko.computed(function() {
			return {
				latitude: ko.observable(model.center.latitude),
				longitude: ko.observable(model.center.longitude)
			}
		});
		self.showVisited = ko.observable(true);
		self.showToVisit = ko.observable(true);
		self.query = ko.observable("");
    	self.filteredPos = ko.computed(function() {
    		let res = self.locations();

    		if(self.query().length > 0) {
    			res = ko.utils.arrayFilter(res, function(loc) {
    				return ko.utils.stringStartsWith(loc.name().toLowerCase(), 
    					self.query().toLowerCase());
    			});
    		}

    		if(!self.showVisited()) {
    			res = ko.utils.arrayFilter(res, function(loc) {
    				return !loc.visit();
    			});
    		}

    		if(!self.showToVisit()) {
    			res = ko.utils.arrayFilter(res, function(loc) {
    				return loc.visit();
    			});
    		}
    		
    		return res;
    	});

    	self.centralize = function(value) {
    		self.center().latitude(value.latitude());
    		self.center().longitude(value.longitude());
    	}

	};

	createHandler();
	ko.applyBindings(new vm());
});