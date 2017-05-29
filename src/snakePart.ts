import GameObject from './gameObject';
import Moving from './moving';

export default class SnakePart extends GameObject {

    private isHead: boolean;
    public speed: number;
    public behaviour: IBehaviour; // interface

    constructor(isHead: boolean, x: number, y: number) {
        super(x, y); // give constructor an x and y
        this.isHead = isHead; // check if it is an Head or not

        this.speed = 0.1;
        this.x = 0;
        this.y = 120;

        this.behaviour = new Moving(this);
    }

    public move(): void {
        this.behaviour.move();
        console.log('dit werkt wel/niet');
    }

    public onKeyDown() {
        this.behaviour.onKeyDown();
    }
}
