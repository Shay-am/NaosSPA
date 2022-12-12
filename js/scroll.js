const scrollHeight = window.scrollY;

const boxHeightFromTop = document.querySelector('#scroll-wrapper').offsetTop;
const btn = document.querySelector('#btn-scroll');

btn.addEventListener('click', function(){
    window.scrollTo(0,boxHeightFromTop);
})


// voucher

const boxHeightFromTopVoucher = document.querySelector('#shooping-cart-height').offsetTop;

const voucherBtn = document.querySelector('#btn-add-to-cart');

const voucherBtn2 = document.querySelector('#btn-add-to-cart-v2');

voucherBtn.addEventListener('click', function(){
    window.scrollTo(0,boxHeightFromTopVoucher);
})

voucherBtn2.addEventListener('click', function(){
    window.scrollTo(0,boxHeightFromTopVoucher);
})

