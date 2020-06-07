const appState = {
    productPreferences: {},
    cart: []
};

window.onload = () => {
    document.querySelectorAll("input").forEach((inputElem) => {
        onChooseCategory(inputElem);
    });
};
