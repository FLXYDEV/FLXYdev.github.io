
let mapSize = 32;
let mapTiles = [];

/** @type {HTMLCanvasElement} */ 
let mainCanvas = document.getElementById("mainCanvas");
/** @type {CanvasRenderingContext2D} */
let ctx = mainCanvas.getContext("2d");

let imgData = ctx.createImageData(64,64);

for(let i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i+0] = 255;
    imgData.data[i+1] = 255;
    imgData.data[i+2] = 127;
    imgData.data[i+3] = 255;
}
ctx.putImageData(imgData, 64, 64); 

ctx.putImageData


//for(let x = 0; x < mapSize; x++) {
//    mapTiles[x] = [];
//    for(let y = 0; y < mapSize; y++) {
//        mapTiles[x][y] = x+y;
//        ctx.fillStyle = (x+y)%2==1 ? "gray": "black";
//        var col = ctx.fillRect(x*8, y*8, 8, 8);
//    }
//}
