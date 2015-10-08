$(document).ready(function() {
    $('#page').fullpage({
        responsiveHeight: 720,
        responsiveWidth: 768,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage'],
        menu: '.navbar-nav',
        scrollingSpeed: 1000
    });
});


$(document).ready(function() {

    $('.btn-submit').click(function() {

        $('body').find('form:not(this)').children('label').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =     $('input[name="name"]', $form).val(),
                tel   =     $('input[name="phone"]', $form).val(),
                product    =     $('input[name="product"]', $form).val();
                select    =     $('select[name="select"]', $form).val();
            console.log(name, tel, product, select);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, tel: tel, product: product, select: select}
            }).done(function(msg) {
                console.log(name, tel, product, select);
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                $('.bs-example-modal-sm').modal('hide');
                $('.modal-done').modal('show');
            });
        }
    });
});