const bp = document.getElementById('bp')
//const bn = document.getElementById('botonArriba')

bp.addEventListener('click', e => {
    scrollAbajo(e)
})
//bn.addEventListener('click', e => {
//    scrollArriba(e)
//})


const scrollAbajo = e => {
    if(e.target.classList.contains('botonCircular')){
        console.log(e.target.classList.contains('botonCircular'))
        scrollTo(0,774)
    }
}
//const scrollArriba = e => {
  //  if(e.target.classList.contains('botonCircularAbajo')){
    //    scrollTo(0,0)
    //}
//}




