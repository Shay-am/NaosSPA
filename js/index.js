const increasePrice = (element) => {
  const currentValue = Number(element.value);
  element.value = currentValue + 10;
};

const decreasePrice = (element) => {
  const currentValue = Number(element.value);
  element.value = currentValue - 10;
};

const counterDisplayElem = document.querySelector(".counter-display");
const counterMinusElem = document.querySelector(".counter-minus");
const counterPlusElem = document.querySelector(".counter-plus");

counterPlusElem.addEventListener("click", () => {
  increasePrice(counterDisplayElem);
});

counterMinusElem.addEventListener("click", () => {
  if (counterDisplayElem.value <= 50) return;
  decreasePrice(counterDisplayElem);
});

const counterDisplayElem2 = document.querySelector(".counter-display2");
const counterMinusElem2 = document.querySelector(".counter-minus2");
const counterPlusElem2 = document.querySelector(".counter-plus2");

counterPlusElem2.addEventListener("click", () => {
  increasePrice(counterDisplayElem2);
});

counterMinusElem2.addEventListener("click", () => {
  if (counterDisplayElem.value <= 250) return;
  decreasePrice(counterDisplayElem2);
});






const parent = document.querySelector("#cart-container");
const btnAddToCart = document.querySelector("#btn-add-to-cart");
const btnAddTocartV2 = document.querySelector("#btn-add-to-cart-v2");

const deliveryPriceContainer = document.querySelector("#cart-delivery-price");
const deliveryPrice = deliveryPriceContainer.querySelector(".delivery-price");
const totalPrice = document.querySelector("#total-price");
const sendNormalText = `Voucher z wysyłką na wskazany
przez Ciebie adres`;
const sendNormalTextWithBox = `Voucher z wysyłką na wskazany
                        przez Ciebie adres 
                        +BOX PREZENTOWY`;

const sendElectricText = `Voucher elektroniczny`;

const getText = (checkedDelivery) =>
  checkedDelivery === "electronic" ? sendElectricText : sendNormalText;

let CART_STATE = [];

const calculatePrice2 = () => {
  return CART_STATE.reduce((acc, next) => acc + next.price, 0);
};

const createRemovedButton = () => {
  const i = document.createElement("i");
  i.classList.add("fa-regular", "fa-trash-can", "btn-remove");

  return i;
};

const createNameParagraph = (content) => {
  const p = document.createElement("p");
  p.classList.add("cart-container__orders__name");
  p.textContent = content;

  return p;
};

const createPrice = (cost) => {
  const price = document.createElement("p");
  price.classList.add("mar-left", "cart-price");
  price.textContent = `${cost} zł`;

  return price;
};

const setDeliveryPrice = (price) => {
  checkedDelivery = getSelectedVoucher();
  if (price >= 400 || checkedDelivery === "electronic") {
    deliveryPrice.textContent = `${0} zł`;
  }
};

const calculatePrice = () => {
  const cost = calculatePrice2();
  if (cost >= 400) {
    return `${cost} zł`;
  } else {
    if (typeof checkedDelivery !== "undefined") {
      return checkedDelivery === "electronic"
        ? `${cost} zł`
        : `${cost + 18} zł`;
    } else {
      return `${cost} zł`;
    }
  }
};

const addToCart = () => {
  const checkedDelivery = getSelectedVoucher();
  const text = getText(checkedDelivery);
  setDeliveryPrice(counterDisplayElem.value);
  const voucher = createProduct(text, counterDisplayElem.value);

  CART_STATE.push(voucher);

  totalPrice.textContent = calculatePrice();

  render();
};

const addToCart2 = () => {
  const text = sendNormalTextWithBox;
  const voucher = createProduct(text, counterDisplayElem2.value);

  CART_STATE.push(voucher);

  totalPrice.textContent = calculatePrice();

  render();
};

const createProduct = (text, price) => {
  return {
    name: text,
    price: Number(price),
    id: Date.now(),
  };
};

const createOrders = (name, price, id) => {
  const childParentContainer = document.createElement("div");
  childParentContainer.classList.add("cart-container__item");
  const childParentName = createNameParagraph(name);
  const childParentPrice = createPrice(price);
  const trash = createRemovedButton();
  trash.id = id;

  trash.addEventListener("click", removedOrders);

  parent.append(childParentContainer);

  childParentContainer.append(childParentName, trash, childParentPrice);
};

const removedOrders = (e) => {
  CART_STATE = CART_STATE.filter((item) => item.id != e.target.id);
  totalPrice.textContent = calculatePrice();
  render();
};

const render = () => {
  parent.textContent = " ";
  CART_STATE.map((item) => {
    createOrders(item.name, item.price, item.id);
  });
};

btnAddToCart.addEventListener("click", () => {
  addToCart();
});

btnAddTocartV2.addEventListener("click", () => {
  addToCart2();
});


