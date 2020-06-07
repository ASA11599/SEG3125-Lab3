function onChooseCategory(inputElement) {
    const preference = inputElement["value"];
    const checked = inputElement["checked"];
    appState.productPreferences[preference] = checked;
}

function addToCart(product) {
    let alreadyInCart = false;
    appState.cart.forEach((p) => {
        if (p["id"] === product["id"]) {
            alreadyInCart = true;
        }
    });
    if (!alreadyInCart) appState.cart.push(product);
    return alreadyInCart;
}

function removeFromCart(id) {
    appState.cart.forEach((product, index) => {
        if (product["id"] === id) {
            appState.cart.splice(index, 1);
        }
    });
}

function onSelectType(type) {
    const filtered = filterProducts();
    let currentProducts;
    if (type === "all") {
        currentProducts = filtered;
    } else {
        currentProducts = [];
        filtered.forEach((product) => {
            if (product["type"] === type) {
                currentProducts.push(product);
            }
        });
    }
    const productListElement = document.getElementById("productList");
    productListElement.innerHTML = '';
    currentProducts.forEach((value) => {
        productListElement.appendChild(getProductComponent(value));
    });
}
