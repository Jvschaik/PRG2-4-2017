import SnakePart from './snakePart';
import Keys from './defines';

class Moving implements IBehaviour {

    public snakePart: SnakePart;

    constructor(s: SnakePart) {
        this.snakePart = s;
        window.addEventListener('keydown', (e: KeyboardEvent) => this.onKeyDown(e));
    }

    public move(): void {
        // this.snakePart.x = Math.floor(this.snakePart.x + this.snakePart.speed) + 1;
        // console.log('part x is ' + this.snakePart.x);
        this.snakePart.x += this.snakePart.speed;
    }

    public onKeyDown(e): void {

        switch (e.keyCode) {
            case Keys.LEFT:
               this.snakePart.speed = -1;
               break;

            case Keys.RIGHT:
                this.snakePart.speed = 1;
                break;

            default:
                this.snakePart.speed = 1;
        }
    }
}
export default Moving;
