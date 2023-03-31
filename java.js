const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

ScrollReveal().reveal('.main-home');
ScrollReveal().reveal('.trending-product',{delay:100});
ScrollReveal().reveal('.row',{delay:100});
ScrollReveal().reveal('.client-reviews',{delay:200});
ScrollReveal().reveal('.Update-news',{delay:200});
ScrollReveal().reveal('.contact',{delay:500});

