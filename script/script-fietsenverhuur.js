function SubmitItems(){
    
    var checkboxes = document.querySelectorAll(".Checkbox"); // Get all checkboxes with the class
    var isChecked = false;
    var selectedData = [];

      checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          isChecked = true;
          selectedData.push(checkbox.value);
        }
      });
      localStorage.setItem("selectedCheckboxes", JSON.stringify(selectedData)); //adds selected checkboxes to local storage

      if (isChecked) {
        window.location.href = "Huurpagina.html"; // Replace with your target page
      } 
}
function handleCheckboxSelection(event) {
    var checkboxes = document.querySelectorAll(".Checkbox");
    
    checkboxes.forEach(function(checkbox) {
      if (checkbox !== event.target) {
        checkbox.checked = false; // Uncheck all other checkboxes
      }
    });
  }
