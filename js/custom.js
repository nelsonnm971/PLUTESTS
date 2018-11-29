<<<<<<< HEAD
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
=======
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
>>>>>>> db0df7b886c5ee4de6736fbefae114b052d4c1d4
});