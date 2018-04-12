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
        $("#snackbar").fadeIn(500).delay(2000).fadeOut(700);
    })

    $(".empty-cart").click(function(){
        $("#snackbar-cart").fadeIn(500).delay(2000).fadeOut(700);
    })

});
