(() =>{
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },10000)
    
})();


 (() =>{
 

    gsap.to(".ball",{        
        duration: 4,            
        delay:9,
        opacity:3,
        'webkitFilter': 'blur(2rem)',
        scale:0.1,       
    })

    gsap.to(".container__text",{        
        duration: 1,            
        delay:3,
        opacity:3,
    })

    gsap.to(".preload__img",{        
        duration: 2,            
        delay:9,
        opacity:0,
    })




})();
