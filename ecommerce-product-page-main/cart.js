class Product {
  constructor(id, name, price, discount) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.element = document.querySelector(`#${id}`);
  }

  updateUi() {
    this.amount = cart.getProduct(this.id)[0]?.amount;
    if (this.amount)
      this.element.querySelector("#amount").textContent = this.amount;
    else this.element.querySelector("#amount").textContent = 0;
  }
}

const sneakers = new Product(
  "prod-1",
  "Fall Limited Edition Sneakers",
  250,
  50
);

const cart = {
  products: [],

  addProduct(newProd) {
    const addedProd = this.products.filter((p) => p.id === newProd.id);
    // debugger;
    if (addedProd.length) addedProd[0].amount++;
    else this.products = [...this.products, { ...newProd, amount: 1 }];
    newProd.updateUi();
  },

  removeProduct(prod) {
    this.products.forEach((p, i) => {
      if (p.id === prod.id && p.amount === 1) {
        this.products.splice(i, 1);
        console.log(this, this.products);
      } else if (p.id === prod.id) p.amount--;
    });
    prod.updateUi();
  },

  getProduct(id) {
    return this.products.filter((p) => p.id === id);
  },

  updateUi() {},
};

const addBtns = document.querySelectorAll("[data-add]");
addBtns.forEach((btn) =>
  btn.addEventListener("click", () => cart.addProduct(sneakers))
);

const removeBtn = document.querySelector("[data-remove]");
removeBtn.addEventListener("click", () => cart.removeProduct(sneakers));
