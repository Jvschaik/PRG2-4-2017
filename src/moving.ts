import SnakePart from './snakePart';
class Moving implements IBehaviour {

    public snakePart: SnakePart;

    constructor(s: SnakePart) {
        this.snakePart = s;
    }
    public move(): void {
       this.snakePart.x = Math.floor(this.snakePart.x + this.snakePart.speed) + 1;
       // console.log('part x is ' + this.snakePart.x);
    }

    public onKeyDown(): void {

        this.snakePart.move();

    }
}

export default Moving;
