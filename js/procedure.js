const btns = document.querySelectorAll('.question-btn');
const header = document.querySelectorAll('h2');

// showing text

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    })
})

header.forEach(function(h2){
    h2.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    })
})



// button rotating

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.firstElementChild.firstElementChild;
        question.classList.toggle('rotate');
    })
})

header.forEach(function(h2){
    h2.addEventListener('click', function(e){
        const question = e.currentTarget.nextElementSibling.firstElementChild.firstElementChild;
        question.classList.toggle('rotate');
    })
})