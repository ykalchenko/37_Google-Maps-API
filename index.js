

// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 50.450272, lng: 30.523636 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 50.45036870094669, lng: 30.52334014121562 }, "Майдан Незалежності"],
    [{ lat: 50.45313301054986, lng: 30.514254146761964 }, "Софійський собор"],
    [{ lat: 50.44871003767074, lng: 30.537945954761813 }, "Маріїнський палац"],
    [{ lat: 50.45908631828174, lng: 30.51808821982076 }, "Андріївська церква"],
    [{ lat: 50.44941351757753, lng: 30.513407974523986 }, "Золоті ворота"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}



