import SnakePart from './snakePart';
import {Keys, Direction} from './defines';

class Moving implements IBehaviour {

    public snakePart: SnakePart;
    private direction: Direction;

    constructor(s: SnakePart) {
        this.snakePart = s;
        window.addEventListener('keydown', (e: KeyboardEvent) => this.onKeyDown(e));
    }

    public move(): void {
        // this.snakePart.x = Math.floor(this.snakePart.x + this.snakePart.speed) + 1;
        // console.log('part x is ' + this.snakePart.x);

        switch (this.direction) {
            case Direction.Left:
                this.snakePart.x -= this.snakePart.speed;
                break;
            case Direction.Right:
                this.snakePart.x += this.snakePart.speed;
                break;
            case Direction.Up:
                this.snakePart.y -= this.snakePart.speed;
                break;
            case Direction.Down:
                this.snakePart.y += this.snakePart.speed;
                break;
            default:
                break;
        }
    }

    public moveLeft() {
        if (this.direction !== Direction.Right) {
            this.direction = Direction.Left;
        }
    }

    public moveRight() {
        if (this.direction !== Direction.Left) {
            this.direction = Direction.Right;
        }
    }

    public moveUp() {
        if (this.direction !== Direction.Down) {
            this.direction = Direction.Up;
        }
    }

    public moveDown() {
        if (this.direction !== Direction.Up) {
            this.direction = Direction.Down;
        }
    }

    public onKeyDown(e): void {

        switch (e.keyCode) {
            case Keys.UP:
                this.moveUp();
                break;

            case Keys.RIGHT:
                this.moveRight();
                break;

            case Keys.LEFT:
                this.moveLeft();
                break;

            case Keys.DOWN:
                this.moveDown();
                break;

            default:
                this.snakePart.speed = 1;
        }
    }
}
export default Moving;
