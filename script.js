

var tl = gsap.timeline()



// tl.from("#nav #nav-left",{
//     y:-50,
//     opacity:0,
//     delay:0.4,
//     duration:1,
//     stagger:0.2
// })

// tl.from("#nav-left p",{
//     y:-50,
//     opacity:0,
//     delay:0.4,
//     duration:1,
//     stagger:0.2
// })

// tl.from("#nav-right a",{
//     y:-50,
//     opacity:0,
//     delay:0.1,
//     duration:1,
//     stagger:0.2
// })

tl.from("#middle p",{
    y:200,
    opacity:0,
    delay:4,
    duration:0.5,
    stagger:0.2
})

gsap.registerPlugin(ScrollTrigger);

  // Animate the text horizontally
  gsap.to("#txt1 h1", {
    xPercent: -100, // Move the text left
    ease: "power1.out", // Smooth ease
    scrollTrigger: {
      trigger: "#page8",
      start: "top top",
      end: "bottom top",
      scrub: 1, // Smooth scroll effect
    //   pin:true,
      stagger:0.1
    }
  });

  // Animate the images to move slower than the text
  gsap.to("#sticker img", {
    xPercent: -200, // Move images slower than text
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#page8",
      start: "top top",
      end: "bottom top",
      scrub: 1,   // Smooth scroll effect
    }
  });

gsap.to("#page2 video",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2", // parent ko trigger
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top -40%",
        scrub:2,
        // pin:true
    }
})


gsap.from("#page3 #txt-big h1",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page3 #txt-big",
        scoller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        // scrub:2,
    }
})


var left_video = document.querySelector("#page4 #left-video");
var arrow = document.querySelector("#page4 #arrow");

left_video.addEventListener("mouseenter",function(){
    arrow.style.display = "flex";
    left_video.classList.add("scaled");
})

left_video.addEventListener("mouseleave",function(){
    arrow.style.display="none";
    left_video.classList.remove("scaled");
})

left_video.addEventListener("mousemove", function(event) {
    var rect = left_video.getBoundingClientRect();
    
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    
    arrow.style.left = `${x}px`;
    arrow.style.top = `${y}px`;
});

var right_video = document.querySelector("#right-video #image");
var arrow1 = document.querySelector("#right-video #image #arrow");

right_video.addEventListener("mouseenter",function(){
    arrow1.style.display = "flex";
    right_video.classList.add("scaled");
})

right_video.addEventListener("mouseleave",function(){
    arrow1.style.display="none";
    right_video.classList.remove("scaled");
})

right_video.addEventListener("mousemove", function(event) {
    var rect = right_video.getBoundingClientRect();
    
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    
    arrow1.style.left = `${x}px`;
    arrow1.style.top = `${y}px`;
});

var left_image = document.querySelector("#page5 #left-image");
var arrow2 = document.querySelector("#page5 #arrow");

left_image.addEventListener("mouseenter",function(){
    arrow2.style.display = "flex";
    left_image.classList.add("scaled");
})

left_image.addEventListener("mouseleave",function(){
    arrow2.style.display="none";
    left_image.classList.remove("scaled");
})

left_image.addEventListener("mousemove", function(event) {
    var rect = left_image.getBoundingClientRect();
    
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    
    arrow2.style.left = `${x}px`;
    arrow2.style.top = `${y}px`;
});

var right_image = document.querySelector("#page5 #right-image");
var arrow3 = document.querySelector("#page5 #right-image #arrow");

right_image.addEventListener("mouseenter",function(){
    arrow3.style.display = "flex";
    right_image.classList.add("scaled");
})

right_image.addEventListener("mouseleave",function(){
    arrow3.style.display="none";
    right_image.classList.remove("scaled");
})

right_image.addEventListener("mousemove", function(event) {
    var rect = right_image.getBoundingClientRect();
    
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    
    arrow3.style.left = `${x}px`;
    arrow3.style.top = `${y}px`;
});

var center_image = document.querySelector("#page6 #center-img");
var arrow4 = document.querySelector("#page6 #center-img #arrow");

center_image.addEventListener("mouseenter",function(){
    arrow4.style.display = "flex";
    center_image.classList.add("scaled");
})

center_image.addEventListener("mouseleave",function(){
    arrow4.style.display="none";
    center_image.classList.remove("scaled");
})

center_image.addEventListener("mousemove", function(event) {
    var rect = center_image.getBoundingClientRect();
    
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    
    arrow4.style.left = `${x}px`;
    arrow4.style.top = `${y}px`;
});

gsap.from("#page9 #txt9 h1 span",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page9 #txt9 h1",
        scoller:"body",
        // markers:true,
        start:"top 40%",
        end:"top -100%",
        // scrub:2,
    }
})
var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top="-100%"
},4000)

