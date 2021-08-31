window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    // console.log(scrollDistance);

    document.querySelectorAll('.container-js').forEach((el, i) => {

        if (el.offsetTop - document.querySelector('.nav-items').clientHeight <= scrollDistance) {
            document.querySelectorAll('.nav-items a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
            document.querySelectorAll('.nav-items li')[i].querySelector('a').classList.add('active');
        }
    });
});


// scroll menu

$(document).ready(function() {
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
        scrollTop: $($link).offset().top - 20
    }, 900);
});