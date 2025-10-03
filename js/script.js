const navBar = document.querySelector('.header-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
});

const hmburgur = document.querySelector('.hamburgur');
const mobileNav = document.querySelector('.mobile-nav');
hmburgur.addEventListener('click',()=> {
    // mobileNav.style.display = 'none';
//    if (mobileNav.style.display == 'none' || mobileNav.style.display == '') {
//         mobileNav.style.display = 'flex';
//    } else {
//     mobileNav.style.display = 'none';
//    }
   mobileNav.classList.toggle("active");
})