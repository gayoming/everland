$(function(){
    // slick slider
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pause : 3000,
        speed : 500,
        pager: true,
        slideWidth: 1100
    });
})

// attraction card slide
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});


// sale fade In Out
let observer = new IntersectionObserver((e) => {
    e.forEach((box)=>{
        if (box.isIntersecting) {
            box.target.style.opacity = 1;
        }
        else {
            box.target.style.opacity = 0;
        }
    });
})

let sale = document.querySelector('#sale');
observer.observe(sale);



// banner image slide
// let slides = document.querySelector('.img-slider'),
//     slide = document.querySelectorAll('.img-slider li'),
//     currentIndex = 0,
//     slideCount = slide.length,
//     slideWidth = 100,
//     prevBtn = document.querySelector('.prev'),
//     nextBtn = document.querySelector('.next');

// makeClone();

// function makeClone() {
//     for(let i=0; i<slideCount; i++) {
//         let cloneSlide = slide[i].cloneNode(true);
//         cloneSlide.classList.add('clone');
//         slides.appendChild(cloneSlide);
//     }
//     for(let i=slideCount - 1; i>=0; i--) {
//         let cloneSlide = slide[i].cloneNode(true);
//         cloneSlide.classList.add('clone');
//         slides.prepend(cloneSlide);
//     }
//     updateWidth();

//     setTimeout(function(){
//         slides.classList.add('animated');
//     },100);
// }

// function updateWidth() {
//     let currentSlides = document.querySelectorAll('.img-slider li');
//     let newSlideCount = currentSlides.length;

//     let newWidth = slideWidth*newSlideCount + 'vw';
//     slides.style.width = newWidth;
// }

// nextBtn.addEventListener('click', function() {
//     moveSlide(currentIndex + 1);
// });

// prevBtn.addEventListener('click', function() {
//     moveSlide(currentIndex - 1);
// });

// function moveSlide(num) {
//     slides.style.left = -num * slideWidth + 'vw';
//     currentIndex = num;
//     console.log(currentIndex, slideCount);

//     if (currentIndex == slideCount || currentIndex == -slideCount) {
//         setTimeout(function(){
//             slides.classList.remove('animated');
//             slides.style.left = '0px';
//             currentIndex = 0;
//         },500);
//         setTimeout(function(){
//             slides.classList.add('animated');
//         },600);
//     }
// }