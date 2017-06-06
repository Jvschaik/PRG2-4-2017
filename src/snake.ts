import SnakePart from './snakePart';
class Snake {

    public snakePartArray: SnakePart[] = [];

    constructor() {
        // make an array with 3 snakeParts
        for (let i = 0; i < 3; i++) {
            this.snakePartArray.push(new SnakePart(i === 0, i * -32, 250));
        }
        console.log(this.snakePartArray);
    }

    public move(): void {
        // TODO VERANDEREN IN FOR OF LOOP
        for (let i = 0; i < this.snakePartArray.length; i += 1) {
            this.snakePartArray[i].move();
        }
    }
}

export default Snake;
