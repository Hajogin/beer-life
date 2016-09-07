var map,
    icon;

var markers = [
  { center: [56.897648, 60.59409]},
  { center: [56.769235, 60.599406]},
  { center: [56.762179, 60.611803]},
  { center: [56.797775, 60.634041]},
  { center: [56.8488, 60.597695]}
];

function show_marker(index) {
  map.setView(markers[index].center, 16);
}

DG.then(function(){

  icon = DG.icon({
    iconUrl: 'images/icons/logo.png',
    iconSize: [49, 49],

  });

  map = DG.map('map-container', {
    center: [56.815914217130164, 60.594406127929695],
    zoom: 16
  });

  for (var i = 0; i < markers.length; i++) {
    DG.marker(markers[i].center, { icon: icon }).addTo(map);
  }

});
