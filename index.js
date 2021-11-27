const body = document.body;
const screensaver = document.getElementById("screensaver");

function clearBody() {
    screensaver.style.display = 'none';
}

function countdown() {
    screensaver.style.display = 'flex';
}

body.addEventListener('mousemove', clearBody);
screensaver.addEventListener('click', clearBody);

setInterval(countdown, 1500);