function openModal(id){
  var modalID = $('.modal_'+id);
  modalID.fadeIn( 800, function() {
  // Animation complete
});

$(".modal_close").click(function(e){
  modalID.hide();
});
}