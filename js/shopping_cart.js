// removing item

// var removeCartItemButtons = document.getElementsByClassName("btn-remove");

// for (var i = 0; i < removeCartItemButtons.length; i++) {
//   var button = removeCartItemButtons[i];
//   button.addEventListener("click", function (event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.nextElementSibling.remove();
//     updateCartTotal();
//   });
// }

// for (var i = 0; i < removeCartItemButtons.length; i++) {
//   var button = removeCartItemButtons[i];
//   button.addEventListener("click", function (event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
//     updateCartTotal();
//   });
// }

// updating price

// function updateCartTotal() {
//   let cartItemContainer = document.querySelectorAll(".cart-items")[0];
//   let cartRows = cartItemContainer.getElementsByClassName("cart-row");
//   console.log(cartItemContainer);
//   let total = 0;
//   for (let i = 0; i < cartRows.length; i++) {
//     let cartRow = cartRows[i];
//     let priceElement = cartRow.getElementsByClassName("cart-price");
//     let price = parseFloat(priceElement.innerText.replace("zł", ""));
//     total = total + price;
//   }
//   document.getElementsByClassName("cart-total-price").innerText = total + "zł";
// }

// function updateCartTotal() {
//     //   let counterDisplayElem = document.querySelector(".counter-display");

//     let cartItemContainer = document.querySelector(".cart-items");

//     console.log(cartItemContainer, counterDisplayElem.value);

//     TOTAL_PRICE.textContent = counterDisplayElem.value;

//     console.log("first");
//     let total = 0;

//     //   document.getElementsByClassName("cart-total-price").innerText =
//     //     counterDisplayElem + "zł";
//   }
// function updateCartTotal() {
//     totalPrice = 0

//     var price = document.getElementsByClassName('cart-price').innerText.replace('zł', '')
//     var DeliveryPrice = document.getElementsByClassName('delivery-price').innerText.replace('zł', '')

//     totalPrice = price + DeliveryPrice

//     document.getElementsByClassName('cart-total-price').innerText =  totalPrice + 'zł'
// }

const getSelectedVoucher = () => {
  const radioInputs = document.querySelector(".voucher-selected");
  const radioButtons = [
    ...radioInputs.querySelectorAll('input[name="delivery"]'),
  ];

  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
    }
  }

  return selectedSize;
};

getSelectedVoucher();
