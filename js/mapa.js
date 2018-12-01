function myMap() {

    const myLocation = new google.maps.LatLng(41.2761237,-8.3227974)

    const mapProp = {
        center: myLocation,
        zoom: 14,
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