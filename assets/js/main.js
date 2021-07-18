
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav: true,
        dots:false,
        navText: ["<",">"],
        navElement: 'div',
        navContainer: false,
        navContainerClass:"depoimento-nav",
        navClass: ["owl-prev","owl-next"],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:true
            }
        }
    });
});