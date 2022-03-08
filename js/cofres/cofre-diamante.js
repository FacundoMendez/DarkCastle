/* cofre GRIS */

let cofreDiamante = document.querySelector(".container3__button-cofre-diamante");

cofreDiamante.addEventListener("click", function(){

    gsap.timeline()
    .to("body",{
        duration:.5,
        overflow:"hidden",
    })
    .to(".container3__tesoro",{
        duration:3.8,
        scale:3,
        x:-1300,
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
    .to(".cofreDiamante",{
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

    .to(".cofreVerde",{
        display:"none"
    })

})     


let flecha__backDiamante = document.querySelector(".flecha__back-diamante");

flecha__backDiamante.addEventListener("click", function(){
  
  
    gsap.to(".cofreDiamante",{
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

    gsap.to(".cofreVerde",{
        display:"none"
    })

    gsap.to("body",{
        overflow:"visible",
    })
})    
    