


(() =>{
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },20000)
    
})();

/* 
(() =>{


})();
 */

(() =>{

    var html = document.documentElement;
    var body = document.body;
    
    var scroller = {
      target: document.querySelector("#scroll-container"),
      ease: 0.05, // <= scroll speed
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    };
    
    var requestId = null;
    
    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true
    });
    
    window.addEventListener("load", onLoad);
    
    function onLoad() {    
      updateScroller();  
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("scroll", onScroll); 
    }
    
    function updateScroller() {
      
      var resized = scroller.resizeRequest > 0;
        
      if (resized) {    
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
      }
          
      var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
    
      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;
    
      if (Math.abs(scrollY - scroller.y) < 0.9 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }
      
      TweenLite.set(scroller.target, { 
        y: -scroller.y 
      });
      
      requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }
    
    function onScroll() {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }
    
    function onResize() {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }
    
})();


 (() =>{

    let tl = gsap.timeline({
        delay:19,
    });

    tl.to(".preload__video",{   
        opacity:0,
    })
 
    tl.to(".ball",{ 
        opacity:3,
        backgrondColor:"black",
        'webkitFilter': 'blur(2rem)',
        scale:.1,       
    })

    tl.to(".container",{ 
        duration:3,       
        opacity:1,
    })


    gsap.to(".skip p",{        
        delay:11,
        display: "inline-block",
        opacity: 1,
    })
     


    let skip = document.querySelector(".skip");
    let container = document.querySelector(".container")

    function videoSkip(){
        skip.addEventListener("click", function(){

            container.style.opacity="0";

            gsap.to(container,{        
                duration: 3,       
                delay:2.2,
                opacity:1,
            })
        
            gsap.to(".video__skip-rayo",{        
                duration: 1,            
                delay:1,
                opacity:-.5,
                display:"none"
            })
        });
    }

    videoSkip()
})();
