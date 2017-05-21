abstract class GameObject {

    public x: number;
    public y: number;
    private width: number;
    private height: number;

    constructor(x: number, y: number) {
        this.width = 10; // set with of object at 10
        this.height = 10; // set height of object at 10
        this.x = x;
        this.y = y;
    }
}

export default GameObject;
