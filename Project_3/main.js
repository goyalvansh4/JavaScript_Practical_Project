const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
function firstPageAnim(){

    var tl=gsap.timeline();

    tl.from("#nav",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
    })

    tl.to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2,
    })
    tl.from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })
}

firstPageAnim();

function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
  
  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  
  circleChaptaKaro();
  circleMouseFollower();
 
  
   document.querySelectorAll(".elem").forEach(function(elem){
     var rotate=0;
     var diffrot=0;

     elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });

    elem.addEventListener("mousemove",function(dets){
        var diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrot = dets.clientX -rotate;
        rotate=dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),//give the value in between range
        })
    })
   });

   GetTime();

function GetTime(){
  var CurrentTime = new Date()
  var hour = CurrentTime.getHours()
  var minute = CurrentTime.getMinutes()
  var second = CurrentTime.getSeconds()

  if(minute < 10){
    minute = "0" + minute
  }

  if(second < 10){
    second = "0" + second
  }

  var GetCurrentTime = hour + ":" + minute + ":" + second + " ";

  if(hour > 11){
    GetCurrentTime += "P.M"
  }else{
    GetCurrentTime += "A.M"
  }

  document.getElementById("CurrentTime").innerHTML = GetCurrentTime;
  setTimeout(GetTime,1000)
}