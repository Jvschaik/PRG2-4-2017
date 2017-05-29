import Moving from './moving';
import SnakePart from './snakePart';

class Snake implements IBehaviour {

    private snakePart: SnakePart[] = [];
    public speed: number;
    public behaviour: IBehaviour; // interface
    public x: number;
    public y: number;

    constructor() {
        // make an array with 3 snakeParts
        for (let i = 0; i < 3; i++) {
            this.snakePart.push(new SnakePart(i === 0, i * -10, 0));
        }
        console.log(this.snakePart);
        this.speed = 10;
        this.x = 0;
        this.y = 120;

        this.behaviour = new Moving(this);
        // window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    }

    public move(): void {
        this.behaviour.move();
    }

    public onKeyDown() {
        this.behaviour.onKeyDown();
    }
}

export default Snake;
