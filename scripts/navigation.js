function refresh() {
    if (appState) {
        // update pages based on appState
        updateProducts();
        updateCart();
    } else {
        console.error("navigation.js : appState is undefined");
    }
}

function updateProducts() {
    const currentProducts = filterProducts(allProducts, appState.productPreferences);
    const productListElement = document.getElementById("productList");
    productListElement.innerHTML = '';
    currentProducts.forEach((value) => {
        productListElement.appendChild(getProductComponent(value));
    });
}

function updateCart() {
    const currentCart = appState.cart;
    const cartListElement = document.getElementById("cartList");
    cartListElement.innerHTML = '';
    currentCart.forEach((value) => {
        cartListElement.appendChild(getCartComponent(value));
    });
}

function navigate(pageId) {
    const pageDiv = document.getElementById(pageId);
    // Hide all the pages
    document.querySelectorAll(".page").forEach((e) => {
        e["style"]["display"] = "none";
    });
    // Refresh pages
    refresh();
    // Display the chosen page
    pageDiv.style.display = "block";
}