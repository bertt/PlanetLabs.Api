function addTiles(map,api_root_url,api_key){
    var bounds = map.getBounds();
    var sf_nw = [bounds._southWest.lng, bounds._northEast.lat];
    var sf_se = [bounds._northEast.lng, bounds._southWest.lat];
    var sf_ne = [sf_se[0], sf_nw[1]];
    var sf_sw = [sf_nw[0], sf_se[1]];
    var bounds = [sf_nw, sf_ne, sf_se, sf_sw, sf_nw];
    
    getScenes(api_root_url,api_key,bounds,function(data){
        // take the scenes and add it to the map
        for(var i=0;i<data.features.length;i++){
            var feature=data.features[i];
            var acquired=new Date(feature.properties.acquired);
            var label = new L.Label();
            label.setContent(acquired.toDateString());
            var coords = feature.geometry.coordinates[0].map(function(coord) {
		      return [coord[1], coord[0]];
	        });

	       var bounds = L.latLngBounds(coords);
            label.setLatLng(bounds.getCenter())
            map.showLabel(label);
            // L.geoJson(feature).addTo(map);
            drawFeature(map,feature,api_key);
        }
    });    
}


var api_root_url='https://api.planet.com/v0/scenes/ortho/';
var map = initMap();

map.on('moveend', function() { 
    var level= map.getZoom();
    if(level>8){
        addTiles(map,api_root_url,api_key);
    }
    else{
        // remove the tilelayers
    }
});

