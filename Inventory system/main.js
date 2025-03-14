// Elements

const productType = document.getElementById("type-select");
const productName = document.getElementById("product-name");
const productCount = document.getElementById("product-count");
const addProductBtn = document.querySelector(".add-product");
const clearProductBtn = document.querySelector(".clear-list");
const container = document.querySelector(".container");
const productsWrapper = document.createElement("div");
const productList = []
container.appendChild(productsWrapper);
productsWrapper.classList.add("products-wrapper");

// Слушатель событий
addProductBtn.addEventListener("click", addProduct);
function addProduct() {
    const productTypeValue = productType.value.trim();
    const productNameValue = productName.value.trim();
    const productCountValue = productCount.value.trim();

    if (!productTypeValue || !productNameValue || !productCountValue) {
        alert("Заполните поля");
    }
    const productCard = productList.some(
        (elem)=>elem.productType === productTypeValue
    );
    if (!productCard) {
        const product = {
            productType: productTypeValue,
            productName: [productNameValue],
            productCount: [productCountValue],
        };
        productList.push(product);
        
    } else {
        let product = productList.find(
            (elem) => elem.productType === productTypeValue
        );
        product.productName = [...product.productName, productNameValue];
        product.productCount = [...product.productCount, productCountValue];
        console.log(productList);
    }
    renderProducts()
}

function renderProducts() {
    productsWrapper.innerHTML = ""
    productList.forEach((elem) => {
        let productCard = document.createElement("div");
        let cardTitle = document.createElement("h3");
        let productDetails = document.createElement("ul");
        productCard.classList.add("products-list");
        cardTitle.textContent = elem.productType;

        elem.productName.forEach((value, index) => {
            const productItem = document.createElement("li");
            productItem.classList.add("product-item")
            productItem.textContent = `${value} ${elem.productCount[index]}`;
            productDetails.appendChild(productItem)
        });
        productCard.appendChild(cardTitle)
        productCard.appendChild(productDetails)
        productsWrapper.appendChild(productCard)
    });
}

clearProductBtn.addEventListener("click", clearProducts);

function clearProducts() {
    productList.length = 0;
    productsWrapper.innerHTML = "";
}