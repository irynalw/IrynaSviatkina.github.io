$(document).ready(function(){

var images=[ "img/auto1.jpg", "img/auto2.jpg", "img/auto3.jpg" ];
var num=0;

$('.slider-nav_next').click(next);
    
    function next() {
    var slider=$('#slider-cars');
    num++;
    if (num >= images.length) {
        num=0;
    }
    slider.attr("src", images[num]);
};

$('.slider-nav_prev').click(prev);
    
    function prev() {
    var slider=$("#slider-cars");
    num--;
    if (num < 0) {
        num=images.length-1;
    }
    slider.attr("src", images[num]);
};

});