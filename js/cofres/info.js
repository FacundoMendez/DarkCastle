let infoGris = document.querySelector(".saberMas-gris");
let infoVerde = document.querySelector(".saberMas-verde");
let infoDiamante = document.querySelector(".saberMas-diamante");


/* cofre rojo info */
let infoRojo = document.querySelector(".saberMas-rojo");
let cofreRojoPantalla = document.querySelector(".cofreRojo");
let containerInfoRojo = document.querySelector(".info-rojo")
let exitRojo = document.querySelector(".exit-rojo")

infoRojo.addEventListener("click",function(){
    containerInfoRojo.style.display="inline-block"
    cofreRojoPantalla.style.filter="blur(2rem)"
})

exitRojo.addEventListener("click",function(){
    containerInfoRojo.style.display="none"
    cofreRojoPantalla.style.filter="blur(0rem)"
})
/* 


infoGris.addEventListener("click",function(){
    
})

infoVerde.addEventListener("click",function(){
    
})

infoDiamante.addEventListener("click",function(){
    
})

 */