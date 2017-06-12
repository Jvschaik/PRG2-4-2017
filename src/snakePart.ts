import GameObject from './gameObject';
import Moving from './moving';

export default class SnakePart extends GameObject {

    private isHead: boolean;
    public speed: number;
    public behaviour: IBehaviour; // interface

    constructor(isHead: boolean, x: number, y: number) {
        super(x, y); // give constructor an x and y
        this.isHead = isHead; // check if it is an Head or not
        this.speed = 1;

        this.behaviour = new Moving(this);
    }

    public move(): void {
        this.behaviour.move();
        super.move();
        // console.log('dit werkt wel/niet');
    }
}
