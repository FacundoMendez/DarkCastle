(() =>{
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },10000)
    
})();


 (() =>{
 

    gsap.to(".ball",{        
        duration: 5,            
        delay:8.7,
        opacity:3,
        'webkitFilter': 'blur(2rem)',
        scale:0.1,       
    })


    gsap.to(".preload__img",{        
        duration: 5,            
        delay:9.5,
        opacity:0,
    })


    gsap.to(".container__text",{        
        duration: 5,            
        delay:9.9,
        opacity:3,
    })

})();
