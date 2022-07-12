// ====================NAV SCROLL=====================================================================
window.addEventListener('scroll', NavOnScroll)
function NavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}
// ========================MENU MOBILE=========================================================
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


//=================CAROUSEL DEP================================================================
var depoimentos = document.getElementsByClassName('comentario')
var index = 0;

    function deslizaComentario(){
      index+=1;
      if(index > (depoimentos.length-1)){
        index=0;
      }
      comentSlide(index)
    }

    setInterval(deslizaComentario,9000)

    function comentSlide(i){
        var control = document.getElementsByClassName('undcontrole')
        
        index = i;
        
        if(i == 0){

            control[0].style.backgroundColor = '#7D82B8'
            control[1].style.backgroundColor = '#EDF2FB'
            control[2].style.backgroundColor = '#EDF2FB'
            control[3].style.backgroundColor = '#EDF2FB'
            control[4].style.backgroundColor = '#EDF2FB'
            control[5].style.backgroundColor = '#EDF2FB'

            depoimentos[0].style.display = 'block'
            depoimentos[1].style.display = 'none'   
            depoimentos[2].style.display = 'none'
            depoimentos[3].style.display = 'none'
            depoimentos[4].style.display = 'none'
            depoimentos[5].style.display = 'none'
        }
        if(i == 1){
            control[0].style.backgroundColor = '#EDF2FB'
            control[1].style.backgroundColor = '#7D82B8'
            control[2].style.backgroundColor = '#EDF2FB'
            control[3].style.backgroundColor = '#EDF2FB'
            control[4].style.backgroundColor = '#EDF2FB'
            control[5].style.backgroundColor = '#EDF2FB'


            depoimentos[0].style.display = 'none'
            depoimentos[1].style.display = 'block'   
            depoimentos[2].style.display = 'none'
            depoimentos[3].style.display = 'none'
            depoimentos[4].style.display = 'none'
            depoimentos[5].style.display = 'none'

          }if(i == 2){
            control[0].style.backgroundColor = '#EDF2FB'
            control[1].style.backgroundColor = '#EDF2FB'
            control[2].style.backgroundColor = '#7D82B8'
            control[3].style.backgroundColor = '#EDF2FB'
            control[4].style.backgroundColor = '#EDF2FB'
            control[5].style.backgroundColor = '#EDF2FB'

            depoimentos[0].style.display = 'none'
            depoimentos[1].style.display = 'none'
            depoimentos[2].style.display = 'block'
            depoimentos[3].style.display = 'none'
            depoimentos[4].style.display = 'none'
            depoimentos[5].style.display = 'none'

        }if(i == 3){
            control[0].style.backgroundColor = '#EDF2FB'
            control[1].style.backgroundColor = '#EDF2FB'
            control[2].style.backgroundColor = '#EDF2FB'
            control[3].style.backgroundColor = '#7D82B8'
            control[4].style.backgroundColor = '#EDF2FB'
            control[5].style.backgroundColor = '#EDF2FB'


            depoimentos[0].style.display = 'none'
            depoimentos[1].style.display = 'none'
            depoimentos[2].style.display = 'none'
            depoimentos[3].style.display = 'block'
            depoimentos[4].style.display = 'none'
            depoimentos[5].style.display = 'none'

        }if(i == 4){
          control[0].style.backgroundColor = '#EDF2FB'
          control[1].style.backgroundColor = '#EDF2FB'
          control[2].style.backgroundColor = '#EDF2FB'
          control[3].style.backgroundColor = '#EDF2FB'
          control[4].style.backgroundColor = '#7D82B8'
          control[5].style.backgroundColor = '#EDF2FB'


          depoimentos[0].style.display = 'none'
          depoimentos[1].style.display = 'none'
          depoimentos[2].style.display = 'none'
          depoimentos[3].style.display = 'none'
          depoimentos[4].style.display = 'block'
          depoimentos[5].style.display = 'none'

      }if(i == 5){
        control[0].style.backgroundColor = '#EDF2FB'
        control[1].style.backgroundColor = '#EDF2FB'
        control[2].style.backgroundColor = '#EDF2FB'
        control[3].style.backgroundColor = '#EDF2FB'
        control[4].style.backgroundColor = '#EDF2FB'
        control[5].style.backgroundColor = '#7D82B8'


        depoimentos[0].style.display = 'none'
        depoimentos[1].style.display = 'none'
        depoimentos[2].style.display = 'none'
        depoimentos[3].style.display = 'none'
        depoimentos[4].style.display = 'none'
        depoimentos[5].style.display = 'block'

    }

        index = i
        console.log(i)
    }

// ==================CAROUSEL EST===============================================================
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
setInterval(desliza, 9000);

document.getElementById("direita").addEventListener("click",desliza)
document.getElementById("esquerda").addEventListener("click",
function teste(){
    contador = contador-2;
    if(contador >= -1){
        desliza()
    }else{
        contador = 2;
        desliza()
    }

}
)


// ====================SCROLL SUAVE=============================================================
const menuLinks = document.querySelectorAll('#menu a');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 63;
  smoothScrollTo(0, distanceFromTheTop, 800);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

