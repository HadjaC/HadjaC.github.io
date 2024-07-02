$(document).ready(function(){
    $('#btnSignin').click(function(){
        $('#signin').css('left', '25px');
        $('#signup').css('left', '450px');
        $('.btnColor').css('left', '0px');
    });

    $('#btnSignup').click(function(){
        $('#signin').css('left', '-450px');
        $('#signup').css('left', '25px');
        $('.btnColor').css('left', '110px');
    });

    $('#signin').submit(function(event){
        event.preventDefault();

        var email = $('#email').val();
        var password = $('#password').val();
        var remember = $('#remember').is(':checked');

        // Aqui você pode fazer a chamada AJAX para enviar os dados para o servidor
        // Exemplo de AJAX:
        // $.ajax({
        //     url: 'seu_endpoint_aqui',
        //     method: 'POST',
        //     data: { email: email, password: password, remember: remember },
        //     success: function(response) {
        //         console.log('Dados enviados com sucesso.');
        //     },
        //     error: function(xhr, status, error) {
        //         console.error('Erro ao enviar dados: ' + error);
        //     }
        // });

        // Exemplo básico de alerta para demonstração
        alert('Login submetido com sucesso.\nEmail: ' + email + '\nPassword: ' + password);
    });

    $('#signup').submit(function(event){
        event.preventDefault();

        var email = $('#emailSignup').val();
        var password = $('#passwordSignup').val();
        var password2 = $('#password2Signup').val();
        var terms = $('#terms').is(':checked');

        // Validação básica dos campos (pode ser mais robusta dependendo dos requisitos)
        if (email === '' || password === '' || password2 === '' || !terms) {
            alert('Por favor preencha todos os campos.');
            return;
        }

        // Aqui você pode fazer a chamada AJAX para enviar os dados para o servidor
        // Exemplo de AJAX:
        // $.ajax({
        //     url: 'seu_endpoint_aqui',
        //     method: 'POST',
        //     data: { email: email, password: password },
        //     success: function(response) {
        //         console.log('Dados enviados com sucesso.');
        //     },
        //     error: function(xhr, status, error) {
        //         console.error('Erro ao enviar dados: ' + error);
        //     }
        // });

        // Exemplo básico de alerta para demonstração
        alert('Cadastro submetido com sucesso.\nEmail: ' + email + '\nPassword: ' + password);
    });
});
