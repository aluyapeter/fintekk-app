// window.onload = function() {
//     var preloader = document.getElementById('preloader');
//     preloader.style.display = 'none';
//   };


// carousel indicator

const carouselInner = document.querySelector('.carousel-inner');
const indicators = document.querySelectorAll('.indicator');
let activeIndex = 0;
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    indicators[activeIndex].classList.remove('active');
    indicator.classList.add('active');
    activeIndex = index;
  });
});


let menuButton = document.getElementById("menu-button");
let navSec = document.getElementById("nav-sec");

// console.log(navSec);
// console.log(menuButton);

menuButton.addEventListener("click", () => {
  console.log("nav clicked");
  navSec.classList.toggle("open");
  menuBtn.classList.add("open_menu");
})

const menuBtn = document.querySelector(".menu-cont");

let showMenu = false;

// console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    menuBtn.classList.add("open-transition");

    showMenu = true;
  } else {
    menuBtn.classList.remove("open-transition");

    showMenu = false;
  }
})

//faqs
// const faqsBtn = document.querySelectorAll("#faqs-question-btn");
// console.log(faqsBtn)


// faqsBtn.addEventListener("click", function () {
//   let faqsAns = document.getElementById("faqs-answer");

  // if (faqsAns.style.display = "none") {
  //   faqsAns.style.display = "block"
  // } else if (faqsAns.style.display = "block") {
  //   faqsAns.style.display = "none"
  // }
// })

let faqsBtnOne = document.getElementById("box-one");
let faqsBtnTwo = document.getElementById("box-two");
let faqsBtnThree = document.getElementById("box-three");



let faqsAns = document.getElementById("faqs-answer-one");
let faqsAnsTwo = document.getElementById("faqs-answer-two");
let faqsAnsThree = document.getElementById("faqs-answer-three");
console.log(faqsAns)

faqsBtnOne.addEventListener("click", () => {
  console.log("btn clicked");
  
  faqsAns.style.display = "block"
})
faqsBtnTwo.addEventListener("click", () => {
  console.log("btn clicked");
  faqsAnsTwo.style.display = "block"
})
faqsBtnThree.addEventListener("click", () => {
  console.log("btn clicked");
  faqsAnsThree.style.display = "block"
})