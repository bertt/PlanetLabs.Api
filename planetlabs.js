function getStartDate(period){
	var d = new Date();
	if(period=='month'){
		d.setMonth(d.getMonth()-1);
	}
	else if(period=='week'){
		d.setDate(d.getDate() - 7);
	}
	else if(period=='day'){
		d.setDate(d.getDate() - 1);
	}
	var start = d.toISOString();
	return start; 
}


function getScenes(url, authkey,bounds,callback){
	var intersects = bounds2geojson(bounds);

	var params = {
		intersects: intersects,
		order_by: 'acquired desc',
		'acquired.gte': getStartDate('month')
	};
	
	var auth = "Basic " + btoa(api_key + ":");
	
	$.ajax({
		url: api_root_url,
		data: params,
		headers: {
			"Authorization": auth
		},
		success: function(data) {
			callback(data);
		}
	});
}

function drawFeature(map,feature,api_key){
	var coords = feature.geometry.coordinates[0].map(function(coord) {
		return [coord[1], coord[0]];
	});

	var bounds = L.latLngBounds(coords);
	var center = bounds.getCenter();
	var tl = L.tileLayer('https://tiles.planet.com/v0/scenes/ortho/' + feature.id +  '/{z}/{x}/{y}.png?api_key=' +
			api_key, { bounds: bounds});
	tl.id="planetlabs";
	tl.addTo(map);
	return center;
}
