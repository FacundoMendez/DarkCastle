(() =>{
/* -------COFRE GRIS--------- */

let cofreGris = document.querySelector(".container3__button-cofre-gris");

cofreGris.addEventListener("click", function(){

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
        x:1300,
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
    .to(".cofreGris",{
        delay:-1.5,
        opacity:1,
        duration:1.2,
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

    .to(".container3__tesoro",{
        scale:1,
        x:0,
        y:0,
    })
})

})();

(() =>{
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

    gsap.to("body",{
        overflow:"visible",
    })

    
    gsap.set(".header",{
        display:"inline-block"
    })
})    
    
})();


(() =>{
    /* CHARACTER COFRE gris */
    
    
    let character1 = document.querySelector(".character1-gris");
    let character2 = document.querySelector(".character2-gris");
    let character3 = document.querySelector(".character3-gris");
    
    character1.addEventListener("click", function(){
        gsap.set(".character1-grande-gris-3stars",{
            duration:2,
            opacity:1,
        })
    
        gsap.set(".character1-grande-gris-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-gris-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
    
        gsap.set(".character2-grande-gris-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-gris-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-gris-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-gris-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-gris-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-gris-3stars",{
            duration:2,
            opacity:0,
        })
    
        let stars1 = document.querySelector(".star1-gris");
        let stars2 = document.querySelector(".star2-gris");
        let stars3 = document.querySelector(".star3-gris");
        
        stars1.addEventListener("click", function(){
            gsap.set(".character1-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-1stars",{
                duration:2,
                opacity:1,
            })
    
        
        
            gsap.set(".character2-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
        
            gsap.set(".character2-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character2-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character3-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
            
            gsap.set(".character3-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character3-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
        });
        
        
       
        stars2.addEventListener("click", function(){
            gsap.set(".character1-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-2stars",{
                duration:2,
                opacity:1,
            })
        
            gsap.set(".character1-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
        
            gsap.set(".character2-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
        
            gsap.set(".character2-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character2-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character3-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
            
            gsap.set(".character3-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character3-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
        });
    
    
        stars3.addEventListener("click", function(){
            gsap.set(".character1-grande-gris-3stars",{
                duration:2,
                opacity:1,
            })
        
            gsap.set(".character1-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character2-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
        
            gsap.set(".character2-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character2-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character3-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
            
            gsap.set(".character3-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character3-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
        });
    });
    
    
    /* character 2 */
    
    character2.addEventListener("click", function(){
        gsap.set(".character1-grande-gris-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-gris-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-gris-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
    
        gsap.set(".character2-grande-gris-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-gris-3stars",{
            duration:2,
            opacity:1,
        })
    
        gsap.set(".character2-grande-gris-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-gris-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-gris-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-gris-3stars",{
            duration:2,
            opacity:0,
        })
    
    
        let stars1 = document.querySelector(".star1-gris");
        let stars2 = document.querySelector(".star2-gris");
        let stars3 = document.querySelector(".star3-gris");
        
        stars1.addEventListener("click", function(){
            gsap.set(".character1-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
    
        
        
            gsap.set(".character2-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
        
            gsap.set(".character2-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character2-grande-gris-1stars",{
                duration:2,
                opacity:1,
            })
        
        
        
            gsap.set(".character3-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
            
            gsap.set(".character3-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character3-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
        });
        
        
       
        stars2.addEventListener("click", function(){
            gsap.set(".character1-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
        
            gsap.set(".character2-grande-gris-2stars",{
                duration:2,
                opacity:1,
            })
        
        
            gsap.set(".character2-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character2-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character3-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
            
            gsap.set(".character3-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character3-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
        });
    
    
        stars3.addEventListener("click", function(){
            gsap.set(".character1-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character2-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
        
            gsap.set(".character2-grande-gris-3stars",{
                duration:2,
                opacity:1,
            })
        
            gsap.set(".character2-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character3-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
            
            gsap.set(".character3-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character3-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
        });
    
        
        
    
    });
    
    
    /* character 3 */
    
    
    character3.addEventListener("click", function(){
    
        gsap.set(".character1-grande-gris-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-gris-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character1-grande-gris-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
    
        gsap.set(".character2-grande-gris-2stars",{
            duration:2,
            opacity:0,
        })
    
    
        gsap.set(".character2-grande-gris-3stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character2-grande-gris-1stars",{
            duration:2,
            opacity:0,
        })
    
    
    
        gsap.set(".character3-grande-gris-1stars",{
            duration:2,
            opacity:0,
        })
    
        
        gsap.set(".character3-grande-gris-2stars",{
            duration:2,
            opacity:0,
        })
    
        gsap.set(".character3-grande-gris-3stars",{
            duration:2,
            opacity:1,
        })
        
    
        let stars1 = document.querySelector(".star1-gris");
        let stars2 = document.querySelector(".star2-gris");
        let stars3 = document.querySelector(".star3-gris");
        
        stars1.addEventListener("click", function(){
            gsap.set(".character1-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
        
            gsap.set(".character2-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
        
            gsap.set(".character2-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character2-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character3-grande-gris-1stars",{
                duration:2,
                opacity:1,
            })
        
            
            gsap.set(".character3-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character3-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
        });
        
        
        stars2.addEventListener("click", function(){
            gsap.set(".character1-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
        
            gsap.set(".character2-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
        
            gsap.set(".character2-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character2-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character3-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
            
            gsap.set(".character3-grande-gris-2stars",{
                duration:2,
                opacity:1,
            })
        
            gsap.set(".character3-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
        });
        
        
        stars3.addEventListener("click", function(){
            gsap.set(".character1-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character1-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
        
            gsap.set(".character2-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
        
            gsap.set(".character2-grande-gris-3stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character2-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
        
        
            gsap.set(".character3-grande-gris-1stars",{
                duration:2,
                opacity:0,
            })
        
            
            gsap.set(".character3-grande-gris-2stars",{
                duration:2,
                opacity:0,
            })
        
            gsap.set(".character3-grande-gris-3stars",{
                duration:2,
                opacity:1,
            })
        
        });
    
    
    });
    
})();
    