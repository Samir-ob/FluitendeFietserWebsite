function Loaded(){

  //code for open/dicht tijden. inspired by code from chatgpt
  
  const hours = {
    "Maandag": [10, 19],
    "Dinsdag": [10, 19],
    "Woensdag": [10, 19],
    "Donderdag": [10, 19],
    "Vrijdag": null,
    "Zaterdag": [10, 19],
    "Zondag": [10, 19]
  };

  const today = new Date(); // represents the current date and time
  const dayNames = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
  const currentDay = dayNames[today.getDay()]; //gets the current day

  const storeHours = hours[currentDay];
  const currentHour = today.getHours();

  const isOpen = storeHours && currentHour >= storeHours[0] && currentHour < storeHours[1];

  document.getElementById("Open_gesloten").textContent = isOpen ? "Open" : "Gesloten";

    //source: chatgpt.com
    fetch('texten/welkomsbericht.txt')
      .then(response => response.text())
      .then(data => {
        document.getElementById("mainText").textContent = data;
      })
      .catch(error => console.error('Error loading the file:', error));
  };


function mouseEnter(){
    console.log("Hello World!")
}

function mouseLeave(){
  
    var element =  event.target
    element.classList.add("hoverEnd");
    var hoverEnded = false;

    var interval = setInterval(function() {
        if(hoverEnded == true){
            element.classList.remove("hoverEnd");
            clearInterval(interval);
            
        }
        else{
            hoverEnded = true;
        }
    
      }, 1000);
}

var image = 0;
var slideIndex = 0;
var slideTimer;
showSlides();

// Function to move to the next or previous slide
function plusSlides(n) {
  slideIndex += n;
  showSlides();
  resetTimer();
}

// Function to move to a specific slide
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  resetTimer();
} 

// Function to display slides
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }    
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// Function to reset the timer
function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(function() {
    slideIndex++;
    showSlides();
  }, intervalTime * 1000);
}

// Set the interval time in seconds
let intervalTime = 3; // Change this value to set the desired interval time
resetTimer();
