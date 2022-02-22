


(() =>{
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },20000)
    
})();


 (() =>{
 
    gsap.to(".ball",{        
        duration: 4,            
        delay:19.7,
        opacity:1,
        'webkitFilter': 'blur(2rem)',
        scale:.1,       
    })

    gsap.to(".preload__video",{        
        duration: 4,            
        delay:20,
        opacity:0,
    })

    gsap.to(".container",{        
        duration: 3,            
        delay:20.05,
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
