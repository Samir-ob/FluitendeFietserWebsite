function Onloaded(){
    const Items = {
        item_1: [""]

    };

    var selectedData = JSON.parse(localStorage.getItem("selectedCheckboxes"));
    console.log(selectedData);
}
function Submit(){
    alert("De gegevens zijn verstuurd!");
    console.log(5);
}