function bounds2geojson(bounds){
    var bounds_joined = [];
    for (var i=0; i<bounds.length; i++) {
        bounds_joined.push(bounds[i].join(' '));
    }
    var geojson = JSON.stringify({
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [bounds]
        },
        "properties": {}
    });
    return geojson;
}

