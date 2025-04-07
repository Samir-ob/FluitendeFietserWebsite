var existing_products = false;

function addCheckoutButton() {
    // Create Check-Out Button
    const checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Check Out";
    checkoutButton.id = "checkout_btn";
    checkoutButton.style.marginTop = "20px";
    checkoutButton.addEventListener("click", function() {
        window.location.href = "checkoutPage.html";
    });
    document.getElementById("Main").appendChild(checkoutButton);
}

function createProductItem(name, imageUrl, description, color, price, index) {
    var itemContainer = document.createElement("div");
    itemContainer.style.display = "flex";
    itemContainer.style.flexDirection = "row";
    itemContainer.style.maxHeight = "25vh";

    var productDiv = document.createElement("div");
    productDiv.classList.add("container");

    var productImage = document.createElement("img");
    productImage.classList.add("store-image");
    productImage.src = imageUrl;
    productImage.alt = "Afbeelding product";

    var productInfoDiv = document.createElement("div");
    productInfoDiv.classList.add("product-info");

    var productName = document.createElement("p");
    productName.innerHTML = "<strong>Fiets:</strong> " + name;
    var productColor = document.createElement("p");
    productColor.innerHTML = "<strong>Kleur:</strong> " + color;

    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productColor);

    var priceDiv = document.createElement("div");
    priceDiv.classList.add("Price");

    var priceText = document.createElement("p");
    priceText.innerHTML = "€" + price;

    priceDiv.appendChild(priceText);

    // Create the delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function() {
        deleteProduct(index);
    };

    productDiv.appendChild(productImage);
    productDiv.appendChild(productInfoDiv);
    productDiv.appendChild(priceDiv);
    productDiv.appendChild(deleteBtn); // Add delete button to the product container

    itemContainer.appendChild(productDiv);

    // Append the item to the store_content div
    document.getElementById("store_content").appendChild(itemContainer);

}


function loadProductsFromSession() {
    let products = JSON.parse(sessionStorage.getItem("cart")) || [];
    let checkout_btn = document.getElementById("checkout_btn");

    if (checkout_btn) {
        checkout_btn.remove();
    }

    document.getElementById("store_content").innerHTML = "";

    if (products.length > 0) {
        products.forEach((product, index) => {
            createProductItem(product.name, product.imageUrl, product.description, product.color, product.price, index);
        });

        if (document.getElementById("store_content").children.length > 0) {
            addCheckoutButton();
        }
    }
}
function deleteProduct(index) {
    let products = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Remove the product from the sessionStorage array
    products.splice(index, 1);

    // Update sessionStorage with the new array (after removal)
    sessionStorage.setItem("cart", JSON.stringify(products));

    // Reload the page to reflect the updated products list
    document.getElementById("store_content").innerHTML = "";
    loadProductsFromSession();
}

