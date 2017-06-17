import Snake from './snake';

class Game {

    private static instance : Game;
    private snake: Snake;

    constructor() {
        this.snake = new Snake();
        console.log(this.snake);
        requestAnimationFrame(() => this.gameLoop());
    }

    // loop
    private gameLoop() {
        this.snake.move();
        requestAnimationFrame(() => this.gameLoop());
    }

    public static getInstance(){
        if(! Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance
    }

}

// load
window.addEventListener("load", function() {
    let g : Game = Game.getInstance();
});

export default Game;
