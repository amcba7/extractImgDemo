const navBar = document.querySelector('.header-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
});

const hmburgur = document.querySelector('.hamburgur');
const mobileNav = document.querySelector('.mobile-nav');
hmburgur.addEventListener('click',()=> {
   mobileNav.classList.toggle("active");
})