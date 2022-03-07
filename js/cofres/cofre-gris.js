/* -------COFRE GRIS--------- */

let cofreGris = document.querySelector(".container3__button-cofre-gris");

cofreGris.addEventListener("click", function(){

    gsap.timeline()

    .to(".container3__tesoro",{
        duration:3.8,
        scale:3,
        x:900,
        y:-260,
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
    .to(".cofreGris",{
        delay:-1.5,
        opacity:1,
        duration:1.4,
        display:"inline-block"
    })

    .to(".cofreRojo",{
        display:"none"
    })

    .to(".cofreVerde",{
        display:"none"
    })

    .to(".cofreDiamante",{
        display:"none"
    })
})

let flecha__backGris = document.querySelector(".flecha__back-gris");

flecha__backGris.addEventListener("click", function(){
  
  
    gsap.to(".cofreGris",{
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

    gsap.to(".cofreVerde",{
        display:"none"
    })

    gsap.to(".cofreRojo",{
        display:"none"
    })

    gsap.to(".cofreDiamante",{
        display:"none"
    })

})    
    