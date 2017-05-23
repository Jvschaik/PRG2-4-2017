import Snake from './snake';

class Moving implements IBehaviour {

    private snake: Snake;

    constructor(s: Snake) {
        this.snake = s;

    }
    public move() {
    }

    public onKeyDown() {

        this.snake.behaviour = new Moving(this.snake);
    }
}
