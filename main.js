// ====================NAV SCROLL=====================================================================
window.addEventListener('scroll', NavOnScroll)
function NavOnScroll() {
  if (scrollY > 0) {
    navbar.classList.add('scroll')
  } else {
    navbar.classList.remove('scroll')
  }
}
// ========================MENU MOBILE=========================================================
class MobileNavbar {
  constructor(mobileMenu, navMenu, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navMenu);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".menu",
  ".menu li",
);
mobileNavbar.init();


//=================CAROUSEL DEP================================================================

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

/*======alteração nav========*/
var menucounter = 0;

function funcao1(){
 
  console.log(menucounter)
  if (menucounter == 0){
    menucounter=1;
    console.log(menucounter)
    document.getElementById('navbar').style="background-color:#7D82B8; color: #fff;"
    document.getElementById('line1').style="background-color: #fff;"
    document.getElementById('line3').style="background-color: #fff;"
  } else {
    menucounter=0;
    console.log(menucounter)
    document.getElementById('navbar').style="background-color:#D8E4FF; color: #fff;"
    document.getElementById('line1').style="background-color: #7D82B8;"
    document.getElementById('line3').style="background-color: #7D82B8;"
  }
}
document.getElementById('mobmenu').addEventListener('click', funcao1)