function Onloaded(){
    const Items = {
        item_1: ["Aanhangfiets", "€20,00"],
        item_2: ["Bakfiets", "€35,00"],
        item_3: ["Driewielfiets", "€30,00"],
        item_4: ["Elektrische fiets", "€30,00"],
        item_5: ["Kinderfiets", "€15,00"],
        item_6: ["Ligfiets", "€45,00"],
        item_7: ["Oma fiets", "€12,50"],
        item_8: ["Racefiets", "€16,00"]

    };

    var selectedData = JSON.parse(localStorage.getItem("selectedCheckboxes"));
    console.log(selectedData);

    document.getElementById("fietsnaam").textContent = Items["item_" + selectedData[0]][0]
    document.getElementById("prijs").textContent = Items["item_" + selectedData[0]][1]
}
function Submit(){
    alert("De gegevens zijn verstuurd!");
    console.log(5);
}