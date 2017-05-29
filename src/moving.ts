import Snake from './snake';

class Moving implements IBehaviour {

    public snake: Snake;

    constructor(s: Snake) {
        this.snake = s;

    }
    public move() {
       this.snake.x += this.snake.speed;
    }

    public onKeyDown() {

        this.snake.behaviour = new Moving(this.snake);
    }
}

export default Moving;
