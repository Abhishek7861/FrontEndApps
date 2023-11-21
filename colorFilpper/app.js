const digits = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];


const color = document.querySelector(".color");
const btn = document.getElementById('btn');

  // Add a click event listener to the button
  btn.addEventListener('click', function() {
    let hex = "#";
    for(let i=0;i<6;i++){
        const randomNumber = getRandomInt(0,15);
        hex += digits[randomNumber];
    }

    document.body.style.backgroundColor = hex;
    color.textContent = hex;
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
