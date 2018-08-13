import Game from './Game.js';
console.log("Iniciando juego...");
setInterval(main, 150);

const game = new Game('myCanvas');

function main(){
    game.update();
    game.draw();
}