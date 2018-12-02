$('#doacoesform').submit(function(e){
    e.preventDefault();
    var template_params = {
        "reply_to": {{email}}
        "from_name": {{nome}},
        "to_name": "Associação Lousada Animal",
        "message_html": {{mensagem}}
    }
    
    var service_id = "default_service";
    var template_id = "template_1xnx2ebx";
    emailjs.send(service_id,template_id,template_params)
    .then(function(response){
        swal(
            'Obrigado!',
            'A sua mensagem foi enviada.',
            'success'
        );

    },  function(error){
        swal(
            'Obrigado!',
            'A sua mensagem foi enviada.',
            'error'
        );
    });
});