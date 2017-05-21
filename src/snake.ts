import SnakePart from './snakePart';

class Snake {

    private snakePart: SnakePart[] = [];
    private speed: number;

    constructor() {
        // make an array with 3 snakeParts
        for (let i = 0 ; i < 3 ;i++) {
            this.snakePart.push(new SnakePart(true, 0, 0));
        }
        console.log(this.snakePart);

        window.addEventListener('keydown', (e: KeyboardEvent) => this.checkKey(e));
        this.speed = 0;
    }

    public checkKey(e): void {
        const key = e.keyCode ? e.keyCode : e.which;

        if (key === 39) {
            this.speed = 10;
        } else if (key === 32) {
            this.speed = 0;
        } else if (key === 37) {
            this.speed = -10;
        }
    }
}

export default Snake;
