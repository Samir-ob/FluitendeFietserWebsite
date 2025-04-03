function Loaded(){
      //source: chatgpt.com
      fetch('../texten/over-ons_bericht.txt')
        .then(response => response.text())
        .then(data => {
          document.getElementById("mainText").textContent = data;
        })
        .catch(error => console.error('Error loading the file:', error));
    };