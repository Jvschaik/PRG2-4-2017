import SnakePart from './snakePart';
class Snake {

    public snakePartArray: SnakePart[] = [];

    constructor() {
        // make an array with 3 snakeParts
        for (let i = 0; i < 3; i++) {
            this.snakePartArray.push(new SnakePart(i === 0, i * -10, 0));
        }
        console.log(this.snakePartArray);

        // window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    }

    public move(): void {
        for (let i = 0; i < this.snakePartArray.length; i += 1) {
            this.snakePartArray[i].move();
        }
    }
}

export default Snake;
