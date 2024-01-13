//Movement Animation to happen
const card = document.querySelectorAll(".card");
const container = document.querySelector(".ch1-container");
const container2 = document.querySelector(".ch2-container");
const container3 = document.querySelector(".ch3-container");
const container4 = document.querySelector(".ch4-container");
const container5 = document.querySelector(".ch5-container");
const container6 = document.querySelector(".ch6-container");
//Items

const sneaker1 = document.querySelector(".sneaker .img1");
const sneaker2 = document.querySelector(".sneaker .img2");
const sneaker3 = document.querySelector(".sneaker .img3");
const sneaker4 = document.querySelector(".sneaker .img4");
const sneaker5 = document.querySelector(".sneaker .img5");
const sneaker6 = document.querySelector(".sneaker .img6");





//Animate In
container.addEventListener("mouseenter", (e) => {
  //Popout
  sneaker1.style.transform = "translateZ(70px) rotateZ(-35deg)";
});

container2.addEventListener("mouseenter", (e) => {
  sneaker2.style.transform = "translateZ(60px) rotateZ(-25deg)";
});

container3.addEventListener("mouseenter", (e) => {
  sneaker3.style.transform = "translateZ(50px) rotateZ(-25deg)";
});

container4.addEventListener("mouseenter", (e) => {
  sneaker4.style.transform = "translateZ(100px) ";
});

container5.addEventListener("mouseenter", (e) => {
  sneaker5.style.transform = "translateZ(100px)";
});

container6.addEventListener("mouseenter", (e) => {
  sneaker6.style.transform = "translateZ(100px)";
});



  //Animate Out
  container.addEventListener("mouseleave", (e) => {
    //Popback
    sneaker1.style.transform = "translateZ(0px) rotateZ(0deg)";
  });

  container2.addEventListener("mouseleave", (e) => {
    sneaker2.style.transform = "translateZ(0px) rotateZ(0deg)";
  });

  container3.addEventListener("mouseleave", (e) => {
    sneaker3.style.transform = "translateZ(0px) rotateZ(0deg)";
  });

  container4.addEventListener("mouseleave", (e) => {
    sneaker4.style.transform = "translateZ(0px) rotateZ(0deg)";
  });

  container5.addEventListener("mouseleave", (e) => {
    sneaker5.style.transform = "translateZ(0px) rotateZ(0deg)";
  });

  container6.addEventListener("mouseleave", (e) => {
    sneaker6.style.transform = "translateZ(0px) rotateZ(0deg)";
  });



