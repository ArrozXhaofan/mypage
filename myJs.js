addEventListener('DOMContentLoaded',() =>{
    const botonIrAbajo = document.querySelector('#botonIos')
    const botonIrArriba = document.querySelector('#botonArriba')
    const obtenerPixelesInicio = () => document.documentElement.scrollTop || document.body.scrollTop

    const irAbajo = () => {
        if(obtenerPixelesInicio){
            //requestAnimationFrame(irAbajo)
            scrollTo(0,774)
        }
    }
    const subir = () => {
        if(obtenerPixelesInicio){
            //requestAnimationFrame(irAbajo)
            scrollTo(0,0)
        }
    }
    
    function IrArriba(){
        window.addEventListener('scroll', () => {
            var scroll = document.documentElement.scrollTop;
            console.log(scroll);
            var botonIrArriba = document.getElementById('botonArriba');

            if(scroll > 1000){
                botonIrArriba.style.animationName="animationName";
                
            }else if(scroll < 767){
                botonIrArriba.style.animationDirection="reverse";
                
            }
        })
    }
    IrArriba();

    botonIrArriba.addEventListener('click',subir)
    botonIrAbajo.addEventListener('click',irAbajo)
  
})


