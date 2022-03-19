(() =>{
/* ------- COFRE ROJO -------- */

let cofreRojo = document.querySelector(".container3__button-cofre-rojo");

cofreRojo.addEventListener("click", function(){

    gsap.set(".header",{
        display:"none"
    })

    gsap.timeline()
    .to("body",{
        duration:.5,
        overflow:"hidden",
    })
    

    .to(".container3__tesoro",{
        duration:3.5,
        scale:3,
        x:-600,
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
    .to(".cofreRojo",{
        delay:-1.5,
        opacity:1,
        duration:1.2,
        display:"inline-block"
    })


    .to(".cofreVerde",{
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

/* CHARACTER COFRE ROJO */

let character1 = document.querySelector(".character1-rojo");
let character2 = document.querySelector(".character2-rojo");
let character3 = document.querySelector(".character3-rojo");

character1.addEventListener("click", function(){
    gsap.set(".character1-grande-rojo-3stars",{
        duration:2,
        opacity:1,
    })

    gsap.set(".character1-grande-rojo-2stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character1-grande-rojo-1stars",{
        duration:2,
        opacity:0,
    })




    gsap.set(".character2-grande-rojo-2stars",{
        duration:2,
        opacity:0,
    })


    gsap.set(".character2-grande-rojo-3stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character2-grande-rojo-1stars",{
        duration:2,
        opacity:0,
    })



    gsap.set(".character3-grande-rojo-1stars",{
        duration:2,
        opacity:0,
    })

    
    gsap.set(".character3-grande-rojo-2stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character3-grande-rojo-3stars",{
        duration:2,
        opacity:0,
    })

    let stars1 = document.querySelector(".star1-rojo");
    let stars2 = document.querySelector(".star2-rojo");
    let stars3 = document.querySelector(".star3-rojo");
    
    stars1.addEventListener("click", function(){
        gsap.set(".character1-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-1stars",{
            duration:2,
            opacity:1,
        })

    
    
        gsap.set(".character2-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
    });
    
    
   
    stars2.addEventListener("click", function(){
        gsap.set(".character1-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-2stars",{
            duration:2,
            opacity:1,
        })
    
        gsap.set(".character1-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
    
        gsap.set(".character2-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
    });


    stars3.addEventListener("click", function(){
        gsap.set(".character1-grande-rojo-3stars",{
            duration:2,
            opacity:1,
        })
    
        gsap.set(".character1-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character2-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
    });
});


/* character 2 */

character2.addEventListener("click", function(){
    gsap.set(".character1-grande-rojo-3stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character1-grande-rojo-2stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character1-grande-rojo-1stars",{
        duration:2,
        opacity:0,
    })




    gsap.set(".character2-grande-rojo-2stars",{
        duration:2,
        opacity:0,
    })


    gsap.set(".character2-grande-rojo-3stars",{
        duration:2,
        opacity:1,
    })

    gsap.set(".character2-grande-rojo-1stars",{
        duration:2,
        opacity:0,
    })



    gsap.set(".character3-grande-rojo-1stars",{
        duration:2,
        opacity:0,
    })

    
    gsap.set(".character3-grande-rojo-2stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character3-grande-rojo-3stars",{
        duration:2,
        opacity:0,
    })


    let stars1 = document.querySelector(".star1-rojo");
    let stars2 = document.querySelector(".star2-rojo");
    let stars3 = document.querySelector(".star3-rojo");
    
    stars1.addEventListener("click", function(){
        gsap.set(".character1-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })

    
    
        gsap.set(".character2-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-rojo-1stars",{
            duration:2,
            opacity:1,
        })
    
    
    
        gsap.set(".character3-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
    });
    
    
   
    stars2.addEventListener("click", function(){
        gsap.set(".character1-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
    
        gsap.set(".character2-grande-rojo-2stars",{
            duration:2,
            opacity:1,
        })
    
    
        gsap.set(".character2-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
    });


    stars3.addEventListener("click", function(){
        gsap.set(".character1-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character2-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-rojo-3stars",{
            duration:2,
            opacity:1,
        })
    
        gsap.set(".character2-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
    });

    
    

});


/* character 3 */


character3.addEventListener("click", function(){

    gsap.set(".character1-grande-rojo-3stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character1-grande-rojo-2stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character1-grande-rojo-1stars",{
        duration:2,
        opacity:0,
    })




    gsap.set(".character2-grande-rojo-2stars",{
        duration:2,
        opacity:0,
    })


    gsap.set(".character2-grande-rojo-3stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character2-grande-rojo-1stars",{
        duration:2,
        opacity:0,
    })



    gsap.set(".character3-grande-rojo-1stars",{
        duration:2,
        opacity:0,
    })

    
    gsap.set(".character3-grande-rojo-2stars",{
        duration:2,
        opacity:0,
    })

    gsap.set(".character3-grande-rojo-3stars",{
        duration:2,
        opacity:1,
    })
    

    let stars1 = document.querySelector(".star1-rojo");
    let stars2 = document.querySelector(".star2-rojo");
    let stars3 = document.querySelector(".star3-rojo");
    
    stars1.addEventListener("click", function(){
        gsap.set(".character1-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
    
        gsap.set(".character2-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-rojo-1stars",{
            duration:2,
            opacity:1,
        })
    
        
        gsap.set(".character3-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
    });
    
    
    stars2.addEventListener("click", function(){
        gsap.set(".character1-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
    
        gsap.set(".character2-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-rojo-2stars",{
            duration:2,
            opacity:1,
        })
    
        gsap.set(".character3-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
    });
    
    
    stars3.addEventListener("click", function(){
        gsap.set(".character1-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
    
        gsap.set(".character2-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-rojo-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-rojo-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-rojo-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-rojo-3stars",{
            duration:2,
            opacity:1,
        })
    
    });


});

})();



(() =>{


/* FLECHA COFRE ROJO */
let flecha__back = document.querySelector(".flecha__back-rojo");


flecha__back.addEventListener("click", function(){
    
    gsap.to(".cofreRojo",{
        duration:1,
        opacity:-1,
        display:"none"
    })

    gsap.to(".container3",{
        delay:.2,
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

    gsap.to(".cofreVerde",{
        display:"none"
    })

    gsap.to(".cofreDiamante",{
        display:"none"
    })

    gsap.to("body",{
        overflow:"visible",
    })
    gsap.set(".header",{
        display:"inline-block"
    })


})    

})();
