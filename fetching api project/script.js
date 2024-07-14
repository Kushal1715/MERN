let hamburger = document.querySelector(".hamburger");
let exit = document.querySelector(".exit");
let menu = document.querySelector(".menu");
let section1 = document.querySelector(".section1");

hamburger.addEventListener("click", () => {
  exit.style.display = "block";
  hamburger.style.display = "none";
  menu.style.display = "block";
  section1.style.marginTop = "400px";

})

exit.addEventListener("click", () => {
  hamburger.style.display = "block";
  exit.style.display = "none";
  menu.style.display = "none";
  section1.style.marginTop = "50px";

})

async function showProducts() {
  try {
    const productName = document.querySelector('#input').value;
    const url = await fetch(`https://dummyjson.com/products/category/smartphones`);
    const data = await url.json();
    let products = data.products;

    let result = "";
    products.forEach((product) => {
      let desc = product.description.slice(0, 88);
      result += `<div class="products">
        <img src="${product.thumbnail}" id="image"/>
        <h3 id="title">${product.title}</h3>
        <p id="desc">${desc}...</p>
      </div>`;
      // console.log(result);
      document.querySelector(".section2").innerHTML = result;
    });
    console.log(products);
  } catch (e) {
    console.log(e);
  }
}

showProducts();


async function getProducts() {
  try {
    const productName = document.querySelector('#input').value;
    const url = await fetch(`https://dummyjson.com/products/search?q=${productName}`);
    const data = await url.json();
    let products = data.products;

    let result = "";
    products.forEach((product) => {
      let desc = product.description.slice(0, 88);
      result += `<div class="products">
        <img src="${product.thumbnail}" id="image"/>
        <h3 id="title">${product.title}</h3>
        <p id="desc">${desc}...</p>
      </div>`;
      // console.log(result);
      document.querySelector(".section2").innerHTML = result;
    });
    console.log(products);
  } catch (e) {
    console.log(e);
  }
}

