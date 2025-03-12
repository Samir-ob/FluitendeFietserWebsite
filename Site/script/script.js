windowTime = -1;

var interval = setInterval(function() {
    windowTime--;
    if(windowTime == 0){
        window.close();
    }
  }, 1000);