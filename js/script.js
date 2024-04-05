// nav slide menu
$(function(){
    $('.black-box, .sub-menu, .sub-menu2').hide(); //숨기기

    $('.main-menu > li > a, .sub-menu, .sub-menu2').mouseover(function(){
        $('.sub-menu').stop().slideDown(300);
        $('.sub-menu2').stop().slideDown(300);
        $('.black-box').stop().show();
        $('.search-bar').stop().hide();
    });
    $('.main-menu > li > a, .sub-menu, .sub-menu2').mouseout(function(){
        $('.sub-menu').stop().slideUp(300);
        $('.sub-menu2').stop().slideUp(300);
        $('.black-box').stop().hide();
    });

// search
    $('.search-button').click(function() {
        $('.search-bar').stop().slideToggle();
        $('.black-box').stop().toggle();
    });
    $('.close-button').click(function() {
        $('.search-bar').stop().slideUp();
        $('.black-box').stop().hide();
    });
})



// on time
let time = new Date();
let currentDate = time.getDate();
let currentMonth = time.getMonth() + 1;
document.querySelector('.current-time').innerText = `${currentMonth}월 ${currentDate}일`;


const topB = document.querySelector('.top-move');

topB.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: "smooth" });
})


let fixMenu = document.querySelector('.fix-right-menu');
let observer2 = new IntersectionObserver((c) => {
    c.forEach((j)=>{
        if (j.isIntersecting) {
            fixMenu.style.bottom = '170px';
            fixMenu.style.right = '10px';
        }
        else {
            fixMenu.style.bottom = '10px';
            fixMenu.style.right = '10px';
        }
    });
})

let ftr = document.querySelector('footer');
observer2.observe(ftr);

