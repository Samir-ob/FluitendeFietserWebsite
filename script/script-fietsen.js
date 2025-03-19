let shopContents = document.getElementById("Main").innerHTML;

function showProductDetails(name, asset){
    document.getElementById("Main").innerHTML = " ";

    var hi = document.createElement("img")
    hi.src = asset;
    hi.style.height = "100px";
    hi.style.width = "100px";
    document.getElementById("Main").appendChild(hi);
}