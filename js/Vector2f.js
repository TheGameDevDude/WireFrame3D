class Vector2f {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getMagnitude() {
        return Math.sqrt(this.x**2 + this.y**2);
    }

    interpolate(a, b, alpha) {
        let result = new Vector2f();
        result.x = (1 - alpha) * a.x + alpha * b.x;
        result.y = (1 - alpha) * a.y + alpha * b.y;
        return result;
    }

    normalize() {
        let result = new Vector2f();
        let mag = this.getMagnitude();
        result.x = this.x / mag;
        result.y = this.y / mag;
        return result;
    }
}