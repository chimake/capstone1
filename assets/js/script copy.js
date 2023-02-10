const navbarToggler = document.querySelector('.navbar-toggler');
const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
const xMarkItem = document.querySelector('.x-mark-item');
const bannerArea = document.querySelector(".banner-area");
const main = document.querySelector("#main-content");
const footer = document.querySelector("#footer");

navbarToggler.addEventListener('click', ()=> {    
    xMarkItem.classList.add('d-none');
    navbarTogglerIcon.classList.remove('d-none');
    bannerArea.classList.remove('d-none');
    main.classList.remove('d-none');
    footer.classList.remove('d-none');
    if (navbarToggler !== null){
        if(!navbarToggler.classList.contains('collapsed')) {
            navbarTogglerIcon.classList.add('d-none');
            xMarkItem.classList.remove('d-none');
            bannerArea.classList.add('d-none');
            main.classList.add('d-none');
            footer.classList.add('d-none');
        }
    }
    
});