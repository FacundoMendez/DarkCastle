 (() =>{

    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },20000)


    let tl = gsap.timeline({
        delay:18,
    });

    tl.to(".preload__video",{  
        duration:1, 
        opacity:0,
    })
 
    tl.to(".ball",{
        duration:1, 
        opacity:3,
        'webkitFilter': 'blur(2rem)',
        scale:10,       
    })

    tl.to(".container",{ 
        duration:3,       
        opacity:1,
    })


    gsap.to(".skip p",{        
        /* delay:11, */
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


(() =>{
  let preload = document.querySelector(".preload__movile");  
  setTimeout(function(){
      preload.classList.add("cerrar__movile");
      preload.style.zIndex=0;
  },10000)


  let tl = gsap.timeline({
      delay:9,
  });

  tl.to(".preload__video-movile",{   
      opacity:0,
  })

  tl.to(".ball__movile",{ 
      opacity:3,
      'webkitFilter': 'blur(2rem)',
      scale: 30,       
  })

  tl.to(".container",{ 
      duration:1,       
      opacity:1,
  })

})();

(() =>{


    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        duration:10,
    });

    tl.to(".container3__pasillo", {
        scale:"-=.93",
        scrollTrigger:{
            trigger: ".container3",
            pin: true,
            scrub: 2.5,
            end: "+=300%"
        }
    })

 
    
})();