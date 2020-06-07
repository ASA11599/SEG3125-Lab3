function getProductComponent(product) {
    const divElement = document.createElement("div");
    divElement.id = product["id"];
    divElement.className = "product";
    const h2Element = document.createElement("h3");
    h2Element.innerText = product["name"];
    const imgElement = document.createElement("img");
    imgElement.src = product["img"];
    imgElement.width = imgElement.height = 200;
    const pElement = document.createElement('p');
    pElement.innerText = "$" + product["price"];
    const iElement = document.createElement('i');
    appState.cart.forEach((p) => {
        if (product["id"] === p["id"]) {
            iElement.style.color = "green";
        }
    });
    iElement.onclick = () => {
        iElement.style.color = undefined;
        const alreadyAdded = addToCart(product);
        if (!alreadyAdded) {
            iElement.style.color = "green";
        }
    };
    iElement.classList = "fas fa-cart-plus cart-icon";
    divElement.appendChild(document.createElement("br"));
    divElement.appendChild(h2Element);
    divElement.appendChild(imgElement);
    divElement.appendChild(pElement);
    divElement.appendChild(iElement);
    divElement.appendChild(document.createElement("br"));
    return divElement;
}

function getCartComponent(product) {
    const divElement = document.createElement("div");
    divElement.id = product["id"];
    divElement.className = "product";
    const h2Element = document.createElement("h3");
    h2Element.innerText = product["name"];
    const imgElement = document.createElement("img");
    imgElement.src = product["img"];
    imgElement.width = imgElement.height = 200;
    const pElement = document.createElement('p');
    pElement.innerText = "$" + product["price"];
    const iElement = document.createElement('i');
    iElement.onclick = () => {
        removeFromCart(product["id"]);
        console.log(appState.cart);
        updateCart();
    };
    iElement.classList = "fas fa-trash trash-icon";
    divElement.appendChild(document.createElement("br"));
    divElement.appendChild(h2Element);
    divElement.appendChild(imgElement);
    divElement.appendChild(pElement);
    divElement.appendChild(iElement);
    divElement.appendChild(document.createElement("br"));
    return divElement;
}
