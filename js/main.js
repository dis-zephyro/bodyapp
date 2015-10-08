$(document).ready(function() {
    $('#page').fullpage({
        responsiveHeight: 720,
        responsiveWidth: 768,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        menu: '.navbar-nav',
        scrollingSpeed: 1000
    });
});