const btns = document.querySelectorAll('.question-btn');
// const aroow = document.querySelectorAll('.arrow');


// show text

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement;
        question.classList.toggle('show-text');
    })
})

// button rotating

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.lastElementChild;
        question.classList.toggle('rotate');
    })
})

// paragraph switch

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){

        const paragraph = e.currentTarget.firstElementChild;
        paragraph.classList.toggle('hidden-p');

        const paragraphTwo = e.currentTarget.firstElementChild.nextElementSibling;
        paragraphTwo.classList.toggle('hidden-p');

    })
})


