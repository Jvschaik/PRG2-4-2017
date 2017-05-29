import Snake from './snake';

class Game {
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
}

export default Game;
