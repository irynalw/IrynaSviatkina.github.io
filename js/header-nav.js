$(document).ready(function(){
    $(".menu-button").click(function(){
        $(".menu-button").toggleClass("menu-button_rotate");
        $(".header__nav").toggleClass("header__menu_vert");
    });

    $(".header-nav__item").click(function(){
        $(".header__nav").removeClass("header__menu_vert");
        $(".menu-button").removeClass("menu-button_rotate");
    });

    $('.header-nav__search').click(displaySearch);
    function displaySearch(){
        $('.search-input').toggleClass("hidden");
    }

    // $('.header-nav__cart').click( function(){
    //     $('.cart-window').toggleClass('hidden');
    //     }
    // );



    $(".not-ready").click(function(){
        $("#snackbar").fadeIn(400).delay(1500).fadeOut(600);
    })

    $(".empty-cart").click(function(){
        $("#snackbar-cart").fadeIn(400).delay(1500).fadeOut(600);
    })

});
