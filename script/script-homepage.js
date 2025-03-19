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