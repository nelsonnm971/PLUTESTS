/*  Smoth scroll - anteriormente estava direto e esteticamente não me agradava*/
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 700, 'linear');
});

function openModal(nome) {
	$('#'+nome).show();
}

$('.close').click(function(){
	$('.modal').hide();
});

function myMap() {

    const myLocation = new google.maps.LatLng(41.158241, -8.628995)

    const mapProp = {
        center: myLocation,
        zoom: 18,
		mapTypeId: google.maps.MapTypeId.HYBRID
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