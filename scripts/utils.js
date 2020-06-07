function filterProducts() {
    // Filter the products based on preferences
    return allProducts.filter((product) => {
        let valid = true;
        let prefs = Object.keys(appState.productPreferences);
        for (let i = 0; i < prefs.length; i++) {
            if (appState.productPreferences[prefs[i]]) {
                if (!product[prefs[i]]) {
                    valid = false;
                    break;
                }
            }
        }
        return valid;
    });
}