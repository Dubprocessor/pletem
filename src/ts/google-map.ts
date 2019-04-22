function initMap() {
  const moscowRef = sessionStorage.getItem("moscowRef");
  const pos = { lat: 59.939421, lng: 30.266996}; // default position - SPB
  let infoWindowContent = `<p style="color: black;">Центр Афроплетения<br/>
  <b>САНКТ - ПЕТЕРБУРГ</b><br/>
  16 - я линия В.О., д. 39 <br/>
  +7 (981) 248 - 55 - 05</p>`;
  
  if(moscowRef && JSON.parse(moscowRef)) {
    pos.lat = 55.787257;
    pos.lng = 37.632220;
    infoWindowContent = `<p style="color: black">Центр Афроплетения<br/>
    <b>МОСКВА</b><br/>
    ул. Гиляровского, д. 57, стр. 1 <br/>
    +7 (905) 288 - 47 - 47</p>`
  }  

  // Styles a map in night mode.
  
  console.log("initMap was called!");
  
  const map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: 18,
    mapTypeControl: false,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#150509" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
  const marker = new google.maps.Marker({position: pos, map: map,icon: "../../assets/img/marker.png", title: "Центр Афроплетения"});
  
  const infowindow = new google.maps.InfoWindow({
    content: infoWindowContent
  });
  infowindow.open(map,marker);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
});
}
