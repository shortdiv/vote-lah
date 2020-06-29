import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhY2hvcGF6b3MiLCJhIjoiY2pkMDN3eW4wNHkwZDJ5bGc0cnpueGNxbCJ9.WWWg_OnK5e7L1RknMliY4A';

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [103.851959, 1.290270],
  zoom: 10.5
})


map.on('load', () => {
  map.addSource('ge-boundaries', {
    type: 'vector',
    url: 'mapbox://chachopazos.ge-boundaries-new'
  });
  map.addLayer({
    'id': 'ge-boundaries',
    "source": "ge-boundaries",
    "source-layer": "ge-boundaries-2020",
    type: "line",
    "paint": {
      "line-color": "#fff",
      "line-width": 1
    }
  });
  map.addLayer({
    "id": 'ge-boundaries-fill',
    "source": "ge-boundaries",
    "source-layer": "ge-boundaries-2020",
    "type": "fill",
    "paint": {
      "fill-color": "#ba5364",
      "fill-opacity": 0
    }
  })
  map.addLayer({
    "id": 'ge-boundaries-hover',
    "source": "ge-boundaries",
    "source-layer": "ge-boundaries-2020",
    "type": "fill",
    "paint": {
      "fill-color": "#fff",
      "fill-opacity": 0.4
    },
    "filter": ["==", "constituency", ""]
  })
  
  map.on('mouseenter', 'ge-boundaries-fill', (e) => {
    map.getCanvas().style.cursor = 'pointer';
  })
  map.on('mousemove', 'ge-boundaries-fill', (e) => {
    map.setFilter("ge-boundaries-hover", ["==", "constituency", e.features[0].properties.constituency]);
  })
  map.on('mouseleave', 'us-states-fill', (e) => {
    map.getCanvas().style.cursor = '';
    map.setFilter("ge-boundaries-hover", ["==", "constituency", ""]);
  })
})
