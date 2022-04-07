
function iniMap() {
  // Using google api to retrieve lat long from address
  // fetch('https://maps.googleapis.com/maps/api/geocode/json?address="564 Hyde Park Ave. Roslindale, MA"&key=my_key')
  //   .then(res=>{
  //     if(res.ok) return res.json();
  //     else console.log('something went wrong');
  //   }
  //   )
  // .then(data=>{
  //   const myLatLng = (data.results[0].geometry.location);
  //   console.log(myLatLng);

 
  //   const mapEl = document.getElementById('map');
  //   // const myLatLng = { lat: 42.28123722743706, lng: -71.118680753433};
  //   console.log(myLatLng);
  //   const map = new google.maps.Map(mapEl, {
  //     zoom: 12,
  //     center: myLatLng,
  //     scrollwheel: false,
  //   });
  
  //   new google.maps.Marker({
  //     position: myLatLng,
  //     map,
  //     title: "Connections, Inc./Home Care Specialists",
  //   });
  // })
  const mapEl = document.getElementById('map');
  const myLatLng = { lat: 42.28123722743706, lng: -71.118680753433};
  const map = new google.maps.Map(mapEl, {
    zoom: 12,
    center: myLatLng,
    scrollwheel: false,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Connections, Inc./Home Care Specialists",
  });
}
google.maps.event.addDomListener(window, 'load', iniMap);
