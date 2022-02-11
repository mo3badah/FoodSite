// import {Swiper,Navigation, Pagination} from "swiper";

let menu =document.getElementById('menu-bars');
let navbar =document.querySelector('.navbar');
menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let searchicon = document.getElementById('search-icon');
let searchform = document.getElementById('search-form');
let searchclose = document.getElementById('close');
searchicon.onclick = ()=>{
    searchform.classList.toggle('active')
}
searchclose.onclick = ()=>{
    searchform.classList.remove('active')
}
let cartItems = document.querySelector('.cart-items-container');
let cartItemButton = document.querySelector('.fa-shopping-cart');
cartItemButton.onclick = ()=>{
    cartItems.classList.toggle('active')
}


// // core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';
// // // // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

let swiper = new Swiper(".home-slider",{
    spaceBetween: 200,
    centeredSlides: true,
    // loop:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
    loop: true,
    slidesPerView: 'auto', /* Set me! */
});
let swiper2 = new Swiper(".review-slide",{
    spaceBetween: 20,
    centeredSlides: true,
    // loop:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
    loop: true,
    slidesPerView: 'auto', /* Set me! */
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});
