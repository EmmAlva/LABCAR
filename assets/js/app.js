
	// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -11.9754, lng: -77.6657}, 
          zoom: 8
        });
        infoWindow = new google.maps.InfoWindow;
      


        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

           /*AÑADIR MARCADOR*/
	        var markador = new google.maps.Marker({
	          position: pos,
	          map: map,

	        });



	        // set(name): llamar a propiedades del objeto map 
	        map.setZoom(14);
	 
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
          //infoWindow.open(markador);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }


        //AUTOCOMPLETADO
        var inputPartida = document.getElementById("input-partida");
		var inputDestino = document.getElementById("input-destino");

		new google.maps.places.Autocomplete(inputPartida);
		new google.maps.places.Autocomplete(inputDestino);

		var directionsService = new google.maps.DirectionsService;
		var directionsDisplay = new google.maps.DirectionsRenderer;

		//Ruta y DISTANCIAS
		var calculateAndDisplayRoute = function(directionsService, directionsDisplay){
			directionsService.route({
		    origin: inputPartida.value,
		    destination: inputDestino.value,
		    travelMode: 'DRIVING'
		  	},function(response, status){
		   		if(status === 'OK'){

			      var distancia = Number((response.routes[0].legs[0].distance.text.replace(" km","")).replace(",","."));

			      cost.classList.remove("none");

			      var costo = distancia*1.75;
			      if(costo<4){
			         cost.innerHTML = "S/. 4";
			       }    
			          cost.innerHTML = "S/. " + parseInt(costo);       

			      directionsDisplay.setDirections(response);
			  
			    /*if(miUbicacion!== undefined){
			        miUbicacion.setMap(null);
			      }*/
			     // markador.setMap(null);

			   }/*else{
			      window.alert("No encontramos una ruta");
			      }*/
    });
}

			  directionsDisplay.setMap(map);

			  var trazarRuta = function(){
			    calculateAndDisplayRoute(directionsService,directionsDisplay);
			  };
			  document.getElementById("trazar-ruta").addEventListener("click",trazarRuta);

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
