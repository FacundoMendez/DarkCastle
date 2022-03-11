(() =>{

/* cofre rojo info */
let infoRojo = document.querySelector(".saberMas-rojo");
let cofreRojoPantalla = document.querySelector(".cofreRojo");
let containerInfoRojo = document.querySelector(".info-rojo")
let exitRojo = document.querySelector(".exit-rojo")

infoRojo.addEventListener("click",function(){
    gsap.to(containerInfoRojo,{
        opacity: 10,
        duration:.1,
        display:"inline-block"
    })

    cofreRojoPantalla.style.filter="blur(2rem)"
})

exitRojo.addEventListener("click",function(){
    gsap.to(containerInfoRojo,{
        opacity: -5,
        duration:.5,
    })
    containerInfoRojo.style.display="none"
    cofreRojoPantalla.style.filter="blur(0rem)"
})

})();

(() =>{

/* cofre verde info */
let infoVerde = document.querySelector(".saberMas-verde");
let cofreVerdePantalla = document.querySelector(".cofreVerde");
let containerInfoVerde = document.querySelector(".info-verde")
let exitVerde = document.querySelector(".exit-verde")

infoVerde.addEventListener("click",function(){
    gsap.to(containerInfoVerde,{
        opacity: 10,
        duration:.1,
        display:"inline-block"
    })
    cofreVerdePantalla.style.filter="blur(2rem)"
})

exitVerde.addEventListener("click",function(){
    gsap.to(containerInfoVerde,{
        opacity: -5,
        duration:.5,
    })
    containerInfoVerde.style.display="none"
    cofreVerdePantalla.style.filter="blur(0rem)"
})

})();

(() =>{


/* cofre gris info */
let infoGris = document.querySelector(".saberMas-gris");
let cofreGrisPantalla = document.querySelector(".cofreGris");
let containerInfoGris = document.querySelector(".info-gris")
let exitGris = document.querySelector(".exit-gris")

infoGris.addEventListener("click",function(){
    gsap.to(containerInfoGris,{
        opacity: 10,
        duration:.1,
        display:"inline-block"
    })
    cofreGrisPantalla.style.filter="blur(2rem)"
})

exitGris.addEventListener("click",function(){
    gsap.to(containerInfoGris,{
        opacity: -5,
        duration:.5,
    })
    containerInfoGris.style.display="none"
    cofreGrisPantalla.style.filter="blur(0rem)"
})

})();

(() =>{


/* cofre diamond info */
let infoDiamante = document.querySelector(".saberMas-diamante");
let cofreDiamantePantalla = document.querySelector(".cofreDiamante");
let containerInfoDiamante = document.querySelector(".info-diamante")
let exitDiamante = document.querySelector(".exit-diamante")

infoDiamante.addEventListener("click",function(){
    gsap.to(containerInfoDiamante,{
        opacity: 10,
        duration:.1,
        display:"inline-block"
    })
    cofreDiamantePantalla.style.filter="blur(2rem)"
})

exitDiamante.addEventListener("click",function(){
    gsap.to(containerInfoDiamante,{
        opacity: -5,
        duration:.5,
    })
    containerInfoDiamante.style.display="none"
    cofreDiamantePantalla.style.filter="blur(0rem)"
})

})();