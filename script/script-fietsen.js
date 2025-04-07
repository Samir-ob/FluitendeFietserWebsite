let shopContents = document.getElementById("Main").innerHTML;

function add(name, asset, text, color, price){
    let cart = JSON.parse(sessionStorage.getItem("cart")) || []; //checks if the cart exists, if not it creates it

    // Create a new product object with the current item
    const product = {
        name: name,
        imageUrl: asset,
        description: text,
        color: color,
        price: price,
    };

    cart.push(product);

    sessionStorage.setItem("cart", JSON.stringify(cart));

    alert("Product toegevoegd aan winkelwagen.");
}

function showProductDetails(name, asset, text, color, price){
    document.getElementById("Main").innerHTML = " ";

    var image = document.createElement("img");
    image.src = asset;
    image.id = "selected_image";
    image.style.marginTop = "20px";

    var div = document.createElement("div");
    div.id = "description_text";
    div.style.marginTop = "20px";


    var description = document.createElement("p");
    description.textContent = text;
    description.style.maxWidth = "300px";

    var close_btn = document.createElement("a");
    close_btn.textContent = "×";
    close_btn.id = "return";
    close_btn.href = "Fietsen.html";

    // the add button
    var br = document.createElement("br");
    var add_btn = document.createElement("button");
    add_btn.textContent = "Add to cart";
    add_btn.id = "add_btn";
    add_btn.addEventListener("click", function(){
        add(name, asset, text, color, price);
    });

    // Create the shopping cart link container
    var cartLink = document.createElement("a");
    cartLink.href = "winkelwagen.html"; // Link to the shopping cart page (update the URL accordingly)
    
    // This is the shopping cart
    var cartContainer = document.createElement("div");
    cartContainer.id = "shopping_cart_container_item";

    var cartIcon = document.createElement("img");
    cartIcon.src = "assets/shopping_cart.png";
    cartIcon.alt = "Shopping Cart";
    cartIcon.id = "shopping_cart_item";

    cartContainer.appendChild(cartIcon);
    cartLink.appendChild(cartContainer); // Add cartContainer inside the <a> tag

    description.appendChild(br); //adds the space
    description.appendChild(add_btn); //adds the button to the text
    document.getElementById("Main").appendChild(cartLink); // Append the <a> link with cart

    document.getElementById("Main").appendChild(close_btn);
    document.getElementById("Main").appendChild(image);
    div.appendChild(description)
    document.getElementById("Main").appendChild(div);
}
