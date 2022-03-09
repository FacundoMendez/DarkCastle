(() =>{

/* -------COFRE VERDE--------- */

let cofreVerde = document.querySelector(".container3__button-cofre-verde");

cofreVerde.addEventListener("click", function(){

    gsap.timeline()
    .to("body",{
        duration:.5,
        overflow:"hidden",
    })
    .to(".container3__tesoro",{
        duration:3.5,
        scale:3,
        x:600,
        y:-460,
    })

    .to(".container3",{
        delay:-3.5,
        duration:3,
        opacity:-.5
    }) 

    .to(".buttonCofre",{
        duration:0,
        opacity:0
    })
    .to(".cofreVerde",{
        delay:-1.5,
        opacity:1,
        duration:1.2,
        display:"inline-block"
    })

    .to(".cofreRojo",{
        display:"none"
    })

    .to(".cofreGris",{
        display:"none"
    })

    .to(".cofreDiamante",{
        display:"none"
    })

    .to(".container3__tesoro",{
        scale:1,
        x:0,
        y:0,
    })
})

})();

(() =>{

let flecha__backVerde = document.querySelector(".flecha__back-verde");

flecha__backVerde.addEventListener("click", function(){
  
  
    gsap.to(".cofreVerde",{
        duration:.5,
        opacity:-1,
        display:"none"
    })

    gsap.to(".container3",{
        duration:2,
        opacity:1.1
    }) 

    gsap.to(".container3__tesoro",{
        duration:2,
        scale:1,
        x:0,
        y:0,
    })

    gsap.to(".cofreGris",{
        display:"none"
    })

    gsap.to(".cofreRojo",{
        display:"none"
    })

    gsap.to(".cofreDiamante",{
        display:"none"
    })
    gsap.to("body",{
        overflow:"visible",
    })

})    

})();

    
(() =>{

/* CHARACTER COFRE VERDE */

let character1 = document.querySelector(".character1-verde");
let character2 = document.querySelector(".character2-verde");
let character3 = document.querySelector(".character3-verde");

character1.addEventListener("click", function(){
    gsap.set(".character1-grande-verde",{
        duration:2,
        opacity:1,
    })

    gsap.set(".character2-grande-verde",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character3-grande-verde",{
        duration:2,
        opacity:0,
    })

});


character2.addEventListener("click", function(){
    gsap.set(".character1-grande-verde",{
        duration:2,
        opacity:0,

    })

    gsap.set(".character2-grande-verde",{
        duration:2,
        opacity:1,
    })

    gsap.set(".character3-grande-verde",{
        duration:2,
        opacity:0,
    })

});


character3.addEventListener("click", function(){
    gsap.set(".character1-grande-verde",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character2-grande-verde",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character3-grande-verde",{
        duration:2,
        opacity:1,
    })

});

})();
