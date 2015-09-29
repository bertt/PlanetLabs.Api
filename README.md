# Viewer for PlanetLabs.Api

Javascript viewer for recent images (last month) from PlanetLabs (https://www.planet.com/)

![alt tag](https://raw.githubusercontent.com/bertt/PlanetLabs.Api/f591ae5b623ec84915da3eec2b288eb0df0e3e20/doc/planet.png)

# Techniques used

Leaflet 0.7.5, JQuery 2.1.4

Contains sample code for:

- Query PlanetLabs API scenes based on area (GeoJSON) and time (scene acquired)

- PlanetLabs API Authentication

- Add Leaflet tilelayers for a PlanetLabs scene 

# Installation

git clone https://github.com/bertt/PlanetLabs.Api.git

cd PlanetLabs.Api 

bower install

copy config-sample.js config.js

// and insert your PlanetLabs api key in config.js

// and run on your favorite webserver

# Usage

Zoom in to tiling level 8 to retrieve the scenes

