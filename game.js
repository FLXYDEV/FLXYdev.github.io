let mapSize = 16;
let mapTiles

let button = document.getElementById("startButton");
let text = document.getElementById("testingText");

button.onclick = () => {
    //if(mapTiles == null) {
        mapTiles = [];
        for(let x = 0; x < mapSize; x++) {
            mapTiles[x] = [];
            for(let y = 0; y < mapSize; y++) {
                mapTiles[x][y] = x+y;
            }
        }
    //}
    let randomX = Math.ceil(Math.random()*mapSize-1);
    let randomY = Math.ceil(Math.random()*mapSize-1);
    text.innerHTML = mapTiles[randomX][randomY];
}
