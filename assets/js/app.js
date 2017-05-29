var map, infoWindow;

function initMap() {
        var laboratoria = {lat: -12.119255, lng: -77.0349046};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: laboratoria
        });
        var marker = new google.maps.Marker({
          position: laboratoria,
          map: map
        });

    infoWindow = new google.maps.InfoWindow;



    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }


}
   

