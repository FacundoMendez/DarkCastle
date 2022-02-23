


(() =>{
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },20000)
    
})();


/* (() =>{

    
})(); */


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
