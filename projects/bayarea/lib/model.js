var model = {
    icons : {
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
      },
      stadium: {
        label: 'map-icon-stadium',
        icon: {
            path: SQUARE_ROUNDED,
            fillColor: '#65A844',
            fillOpacity: 1,
            strokeColor: '',
            strokeWeight: 0
        }
      },
      market: {
        label: 'map-icon-florist',
        icon: {
            path: SQUARE_ROUNDED,
            fillColor: '#DB4437',
            fillOpacity: 1,
            strokeColor: '',
            strokeWeight: 0
        }
      },
      food: {
        label: 'map-icon-restaurant',
        icon: {
            path: SHIELD,
            fillColor: '#D01F4D',
            fillOpacity: 1,
            strokeColor: '',
            strokeWeight: 0
        }
      }
    },
	locations: [
		{name: 'Home', latitude:  37.3986234 , longitude: -121.94488590000003 , 
			type: "home", visit: true},
    	{name: 'Safeway', latitude: 37.394634, longitude: -121.94767999999999, 
    		type: 'glocery', visit: true},
    	{name: 'Walmart', latitude: 37.39000850000001, longitude: -121.98550219999998,
    		type:'glocery', visit: true},
    	{name: 'Sprouts Farmers Market', latitude: 37.3667316, longitude: -122.0308412,
    		type: 'glocery', visit: true},
    	{name: 'Philz Coffee', latitude: 37.39000850000001, longitude: -122.03171250000003,
    		type:'cafe', visit: true},
    	{name: 'Sunnyvale Library', latitude: 37.37189800000001, longitude: -122.03891699999997,
    		type: 'lib', visit: true},
        {name: 'Levi\'s Stadium', latitude: 37.402317, longitude: -121.96899539999998,
            type: 'stadium', visit: true},
        {name: 'San Jose Flea Market', latitude: 37.368936, longitude: -121.8789875,
            type: 'market', visit: false},
        {name: 'Bar Crudo', latitude: 37.77568309999999, longitude: -122.4382114,
            type: 'food', visit: false}
            
	],
	zoom: 10,
	center: {latitude: 37.3986234 , longitude: -121.94488590000003}
}