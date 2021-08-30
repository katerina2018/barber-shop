window.addEventListener


// scroll menu

$(document).ready(function() {
    var $body = $('body');
    var $navbar = $('.navbar-default');
    var $offsetY = $navbar.offset().top + 10;


    var $scrollButton = $('.scroll');

    // Fixed Nav after scroll
    function scroll() {
        if ($(window).scrollTop() >= $offsetY) {
            $('.navbar').addClass('menu-fixed');
            $('#logoimg').addClass('menu-fixed-logo');
        } else {
            $('.navbar').removeClass('menu-fixed');
            $('#logoimg').removeClass('menu-fixed-logo');
        }
    }
    document.onscroll = scroll;
});
// Smooth scroll to content

var $scrollButton = $('.scroll');
$scrollButton.on('click', function(e) {
    e.preventDefault();
    var $link = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($link).offset().top - 60
    }, 900);
});