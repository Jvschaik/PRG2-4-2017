import GameObject from './gameObject';

export default class SnakePart extends GameObject {

    private isHead: boolean;

    constructor(isHead: boolean, x: number, y: number) {
        super(x, y); // give constructor an x and y
        this.isHead = isHead; // check if it is an Head or not
    }
}
