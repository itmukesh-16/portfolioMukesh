/* ************************************
multiple button toggle starts here 
************************************ */
const p_btns = document.querySelector(".portfolio-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_overlay = document.querySelectorAll(".img-overlays");

p_btns.addEventListener("click", (e) => {
  const btn_clicked = e.target;

  p_btn.forEach((curElem)=> curElem.classList.remove("p-btn-active"));
  btn_clicked.classList.add("p-btn-active");

//   to get the btn no of clicked btn
// to access the btn num ,use "dataset" attribute and add the name after 
// data in camelCase i.e data-btn-num here "btnNum" is used
  const btn_num=btn_clicked.dataset.btnNum;

//   collecting all the overlays project ids to show and hide 
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

//   hiding all the projects 
  p_img_overlay.forEach((curElem)=> curElem.classList.add("img-overlays-not-active"));

//   showing only the necessary project id  when button is clicked 
  img_active.forEach((curElem)=> curElem.classList.remove("img-overlays-not-active"));

});

/* ************************************
swiper starts here 
************************************ */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay:{
    delay:2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/* ************************************
 scroll to top button starts here 
************************************ */
const footerElem=document.querySelector(".section-footer");

const scrollElement=document.createElement("div");

scrollElement.classList.add("scroll-top");

scrollElement.innerHTML=`<a href="#" ><ion-icon name="arrow-up-outline" class="service-icon"></ion-icon></a>`;

footerElem.after(scrollElement);

// animate number counter 

