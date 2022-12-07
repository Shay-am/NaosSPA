const scrollHeight = window.scrollY;

const boxHeightFromTop = document.querySelector('#scroll-wrapper').offsetTop;
const btn = document.querySelector('#btn-scroll');

btn.addEventListener('click', function(){
    window.scrollTo(0,boxHeightFromTop);
})