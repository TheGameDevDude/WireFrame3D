class Vector3f {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getMagnitude() {
        return Math.sqrt(x**2 + y**2 + z**2);
    }

    normalize() {
        let result = new Vector3f();
        let mag = this.getMagnitude();
        result.x = this.x / mag;
        result.y = this.y / mag;
        result.z = this.z / mag;
        return result;
    }

    scale(factor) {
        let result = new Vector3f();
        result.x = this.x * factor;
        result.y = this.y * factor;
        result.z = this.z * factor;
        return result;
    }

    round() {
        let result = new Vector3f();
        result.x = Math.round(this.x * 10000) / 10000;
        result.y = Math.round(this.y * 10000) / 10000;
        result.z = Math.round(this.z * 10000) / 10000;
        return result;
    }

    shiftToScreenSpace(width, height) {
        let result = new Vector3f();
        result.x = ((this.x * width) + width) / 2;
        result.y = (height - (this.y * height)) / 2;
        return result;
    }

    dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    multiply(matrix) {
        let result = new Vector3f();
        result.x = matrix.MATRIX[0 + 0 * 3] * this.x + matrix.MATRIX[1 + 0 * 3] * this.y + matrix.MATRIX[2 + 0 * 3] * this.z;
        result.y = matrix.MATRIX[0 + 1 * 3] * this.x + matrix.MATRIX[1 + 1 * 3] * this.y + matrix.MATRIX[2 + 1 * 3] * this.z;
        result.z = matrix.MATRIX[0 + 2 * 3] * this.x + matrix.MATRIX[1 + 2 * 3] * this.y + matrix.MATRIX[2 + 2 * 3] * this.z;
        return result;
    }
}