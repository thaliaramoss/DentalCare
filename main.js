const slides = document.getElementById("gancho")
var contador = 0;
function desliza(){
    contador++;

    if(contador == 1){
        slides.style="margin-left:-25%;"

    } else if(contador == 2){
        slides.style="margin-left:-50%;"

    } else if(contador == 3){
        slides.style="margin-left:-75%;"

    } else {
        contador = 0;
        slides.style="margin-left:0;"

    }
}
setInterval(desliza, 7000);

document.getElementById("direita").addEventListener("click",desliza)
document.getElementById("esquerda").addEventListener("click",
function teste(){
    contador = contador-2;
    desliza()
}
)