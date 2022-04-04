
function iniMap() {
    const mapEl = document.getElementById('map');
    const myLatLng = { lat: 42.28123722743706, lng: -71.118680753433};
    const map = new google.maps.Map(mapEl, {
      zoom: 13,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Connections, Inc./Home Care Specialists",
    });
}
google.maps.event.addDomListener(window, 'load', iniMap);