// menu active

const menuBar = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-mobile');

menuBar.addEventListener('click', function(){
    navMobile.classList.add('position');
});

navMobile.addEventListener('click', function(){
    navMobile.classList.remove('position');
})