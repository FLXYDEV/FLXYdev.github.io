let mapSize = 32;
let mapTiles = [];

let mainCanvas = document.getElementById("mainCanvas");
let ctx = mainCanvas.getContext("2d");

for(let x = 0; x < mapSize; x++) {
    mapTiles[x] = [];
    for(let y = 0; y < mapSize; y++) {
        mapTiles[x][y] = x+y;
    }
}


