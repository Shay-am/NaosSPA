let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 50;

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

counterPlusElem.addEventListener("click",()=>{
    count = parseInt(count) + 10;
    updateDisplay();
});

counterMinusElem.addEventListener("click",()=>{
    count = parseInt(count) - 10;
    updateDisplay();
});

// 250

let counterDisplayElem2 = document.querySelector('.counter-display2');
let counterMinusElem2 = document.querySelector('.counter-minus2');
let counterPlusElem2 = document.querySelector('.counter-plus2');

let count2 = 250;

function updateDisplay2(){
    counterDisplayElem2.innerHTML = count2;
};

counterPlusElem2.addEventListener("click",()=>{
    count2 = parseInt(count2) + 10;
    updateDisplay2();
});

counterMinusElem2.addEventListener("click",()=>{
    count2 = parseInt(count2) - 10;
    updateDisplay2();
});


