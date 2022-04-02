setInterval(setClock, 1000)


const hourhand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
    const currentdate = new Date();
    const secondsRatio = currentdate.getSeconds() / 60;
    const minutesRatio = (currentdate.getMinutes()+secondsRatio) / 60;
    const hoursRatio = (currentdate.getHours()+minutesRatio) / 12;
    setRotation(secondHand,secondsRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourhand,hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()