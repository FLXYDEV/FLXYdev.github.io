
let mapSize = 16;
let mapTiles

let button = document.querySelector("button");

button.onclick = () => {
    if(mapTiles == null) {
        mapTiles = [];
        for(let x = 0; x < mapSize; x++) {
            mapTiles[x] = [];
            for(let y = 0; y < mapSize; y++) {
                mapTiles[x][y] = x+y;
            }
        }
    }
    alert(mapTiles);
}
