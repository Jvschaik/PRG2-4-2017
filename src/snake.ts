import SnakePart from './snakePart';

class Snake {

    private snakePart: SnakePart[] = [];
    private speed: number;
    public behaviour: IBehaviour; // interface

    constructor() {
        // make an array with 3 snakeParts
        for (let i = 0 ; i < 3 ; i ++) {
            this.snakePart.push(new SnakePart(i === 0 , i * -10, 0));
        }
        console.log(this.snakePart);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        this.speed = 0;
    }

    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.key);
        this.behaviour.onKeyDown();
    }
}

export default Snake;
