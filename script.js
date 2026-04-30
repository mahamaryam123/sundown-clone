













let locoScroll;

function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Sirf Desktop (1024px+) ke liye Locomotive initialize karein
    if (window.innerWidth > 1024) {
        locoScroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smartphone: { smooth: false },
            tablet: { smooth: false }
        });

        // Locomotive aur ScrollTrigger ka link (Sirf Desktop par)
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(".main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    }

    // Videos update logic (Check ke locoScroll exist karta hai ya nahi)
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(video => {
        video.onloadeddata = () => {
            if (locoScroll) locoScroll.update();
            ScrollTrigger.refresh();
        };
    });

    ScrollTrigger.refresh();
}

locoscroll();

//hover per image show ho gi
function page4animation() {
  const elemcon = document.querySelector(".elem-container");
  let fixedimg = document.querySelector(".fixed-image");
  elemcon.addEventListener("mouseenter", () => {
    fixedimg.style.display = "block";
  });
  elemcon.addEventListener("mouseleave", () => {
    fixedimg.style.display = "none";
  });
  // var elem1=document.querySelector('#elem1')
  // elem1.addEventListener('mouseenter',()=>{
  //     var image =elem1.getAttribute('data-image')

  //     fixedimg.style.backgroundImage=`url(${image})`
  // })

  let elems = document.querySelectorAll(".elem");
   if (window.innerWidth < 1024) {
  elems.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixedimg.style.backgroundImage = `url(${image})`;
    });
  });
}else{
    elems.forEach((e) => {
    e.addEventListener("click", function () {
      var image = e.getAttribute("data-image");
      fixedimg.style.backgroundImage = `url(${image})`;
    });
  });
}
}
page4animation();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
swiperAnimation();

function menuanimation(){
let img = document.querySelector("nav img");
let fullsrc = document.querySelector(".fullscreen");
const menu = document.querySelector("nav h3");
var flag = 0;
menu.addEventListener("click", () => {

    fullsrc.style.top = "0";
    img.style.opacity = "0";
    flag = 1;



});
fullsrc.addEventListener('click',()=>{
 fullsrc.style.top = "-100%";
    img.style.opacity = "1";
    flag = 0;
})

}
menuanimation()



function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation()
//page2 animation of text color changin with scroll

// var clutter = "";

// document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
//     console.log(dets);

//     clutter += `<span>${dets}</span>`

//     document.querySelector("#page2>h1").innerHTML = clutter;
// })


// gsap.to("#page2>h1>span",{
//     scrollTrigger:{
//         trigger:`#page2>h1>span`,
//         start:`top bottom`,
//         end:`bottom top`,
//         scroller:`.main`,
//         scrub:.5,
//     },
//     stagger:0.2,
//     color:`#fff`
// })