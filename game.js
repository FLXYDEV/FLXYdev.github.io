
let button = document.getElementById("startButton");
let text = document.getElementById("testingText");

button.onclick = () => {
    text.innerHTML = Math.floor(Math.random()*101);
}
