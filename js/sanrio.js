$(function() {
    $('.garden-content').hide();

    $('.g-menu-title').click(function(){
        $(this).siblings('.garden-content').stop().slideToggle(400);
        $(this).find('svg').toggleClass('active');
        $(this).parent().toggleClass('g-white-bg');
        $(this).parent().siblings().find('.garden-content').slideUp(400);
        $(this).parent().siblings('.garden-menu').removeClass('g-white-bg');
        $(this).parent().siblings('.garden-menu').children().find('svg').addClass('active');
    });

    $('.sanrio-bg-img3').click(function(){
        $('.sanrio-popup').stop().fadeIn(1000);
    });
    $('.close-pop').click(function(){
        $('.sanrio-popup').stop().fadeOut(1000);
    })
})