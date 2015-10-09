$(document).ready(function() {

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

        $('head').append('<link rel="stylesheet" type="text/css" href="css/mobile.css" />'); //подключение файла mobile.css если мобильник

        $('.topnav li a').click(function(){
            var str=$(this).attr('href');
            $.scrollTo(str, 500, {offset:-105});
            return false;
        });


    } else {

        $('head').append('<link rel="stylesheet" type="text/css" href="js/vendor/jquery.fullPage/jquery.fullPage.css" />'); //подключение файла jquery.fullPage.css если не мобильник

        $('#page').fullpage({
            responsiveHeight: 710,
            responsiveWidth: 768,
            navigation: true,
            navigationPosition: 'right',
            anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage'],
            menu: '.navbar-nav',
            scrollingSpeed: 1000
        });
    }
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
                //$('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                $('.bs-example-modal-sm').modal('hide');
                $('.modal-done').modal('show');
            });
        }
    });
});


function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: 'XuQ7nfglhKE',
        playerVars: {
            color: 'white',
            playlist: 'taJ60kskkns,FG0fTKAqZ5g'
        },
        events: {
            onReady: initialize
        }
    });
}


function initialize(){

    // Обновляем элементы управления и загружаем
    updateTimerDisplay();
    updateProgressBar();

    // Сброс старого интервала
    clearInterval(time_update_interval);

    // Запускаем обновление таймера и дорожки проигрывания
    // каждую секунду.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000)

}

$('.modal-lg').on('hidden.bs.modal', function (e) {
    player.pauseVideo();
});

$('#pause').on('click', function () {
    player.pauseVideo();
});

$('.modal-video').on('click', function () {
    player.pauseVideo();
});


// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
        center: [55.7647,37.7198],
        zoom: 16,
        controls: []
    });

    myGeoObject = new ymaps.GeoObject({

        geometry: {
            type: "Point",
            coordinates: [55.7647,37.7198]
        },

        properties: {
            iconContent: '',
            hintContent: ''
        }
    }, {
        preset: 'islands#icon',
        iconColor: '#3a1aff',
        draggable: true
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myGeoObject)
}



$('.topnav li a').click(function(){
    $('.navbar-collapse').removeClass('in');
});