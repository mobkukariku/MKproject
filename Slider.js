function updateSwiperParams(){
    var screenWidth = window.innerWidth;
    var  slidesPerViewl = 3;
    var spaceBetween = 30;

if(screenWidth<=768){
    slidesPerView =2
    spaceBetween = 20;
}if (screenWidth<=480){
    slidesPerView =1;
    spaceBetween = 10;
}

swiper.params.slidesPerView = slidesPerView;
swiper.params.spaceBetween=spaceBetween;
swiper.update();

}




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

updateSwiperParams();

window.addEventListener("resize", function(){
    updateSwiperParams();
})

