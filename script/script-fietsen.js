let shopContents = document.getElementById("Main").innerHTML;

function showProductDetails(name, asset, text){
    document.getElementById("Main").innerHTML = " ";

    var image = document.createElement("img");
    image.src = asset;
    image.id = "selected_image";
    image.style.marginTop = "200px";

    var div = document.createElement("div");
    div.id = "description_text";
    div.style.marginTop = "200px";


    var description = document.createElement("p");
    description.textContent = text;
    description.style.maxWidth = "300px";



    document.getElementById("Main").appendChild(image);
    div.appendChild(description)
    document.getElementById("Main").appendChild(div);
}