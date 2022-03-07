 /* PRELOAD -- DESKTOP */
 
 (() =>{

    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },21000)

    

    let tl = gsap.timeline({
        delay:19,
    });

    tl.to(".preload__video",{  
        duration:1, 
        opacity:0,
    })
 
    tl.to(".ball",{
        duration:2, 
        opacity:3,
        'webkitFilter': 'blur(2rem)',
        scale:10,       
    })

    tl.to(".skip p",{        
        delay:-3,
        opacity: 0,
    })

    tl.to(".container",{ 
        duration:3,       
        opacity:1,
    })

    tl.to(".preload",{  
        display:"none"
    })
 

    gsap.to(".skip p",{        
        /* delay:11, */
        display: "inline-block",
        opacity: 1,
    })



    /* preload skip */
    let skip = document.querySelector(".skip");
    let container = document.querySelector(".container")

    function videoSkip(){
        skip.addEventListener("click", function(){

            container.style.opacity="0";
            gsap.set("body",{
                backgroundColor:"white"
            })

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

            gsap.to("body",{
                delay:5,
                backgroundColor:"black"
            })

       
        });
    }

    videoSkip()
})();



/* PRELOAD MOVILE */

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


/* CONTAINER 3 -- PASILLO / COFRES */
(() =>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".container3__pasillo",{
        opacity:1,
        scale:8.2
    }),

    gsap.set(".container3__tesoro",{
        opacity:0,
        scale:30
    }),

    gsap.set(".container3__ojos",{
        opacity:0,
        webkitFilter:"blur(3px)",
        scale:1
    })

    gsap.set(".container3__buttons",{
        opacity:0,
        scale:1
    })

    gsap.timeline({
        scrollTrigger:{
            trigger:".container3",
            pin:".container3",
            scrub:2,
            end:"+380%"
        }
    })

    .to(".container3__pasillo",{
        duration:15,
        scale:"-=6.8",
    })

    .to(".container3__ojos",{
        opacity:1,
        duration:5,
    })
    .to(".container3__ojos",{
        opacity:0,
        duration:7,
    })
    .to(".container3__ojos",{
        duration:1,
        opacity:3,
        scale:1.1
    })

    .to(".container3__pasillo",{
        webkitFilter:"blur(5px)"
    })

    .to(".container3__tesoro",{
        duration:20,
        scale:1,
        opacity:1
    })
    .to(".container3__buttons",{
        duration:.1,
        scale:1,
        opacity:1,
    })

    .to(".container3__buttons",{
        duration:.1,
        scale:1,
        opacity:1,
    })

    .to(".buttonCofre",{
        delay:-1,
        display:"inline-block",
    })


    .to(".container4",{
        delay:10
    })
    .to(".container3",{
        opacity:0,
        duration:10,
    })
 /*    .to(".container3__tesoro",{
        webkitFilter:"blur(5px)"
    })
 */


})();


