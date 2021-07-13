const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click', () => {
        //Tooglr Links
        nav.classList.toggle('nav-active');


    });
}
navSlide();