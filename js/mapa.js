function myMap() {

    const myLocation = new google.maps.LatLng(41.158241, -8.628995)

    const mapProp = {
        center: myLocation,
        zoom: 18,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		styles: []
    }
    const map = new google.maps.Map(
        document.getElementById("googleMap"), 
        mapProp)

        var marker = new google.maps.Marker({
            position:myLocation,
            animation:google.maps.Animation.BOUNCE
            });
          
          marker.setMap(map);
}

// myMap();