class Matrix3f {
    // creates an identity matrix
    constructor() {
        this.MATRIX = [];
        for(let i = 0; i < 3 * 3; i++) {
            this.MATRIX[i] = 0;
        }
        this.MATRIX[0 + 0 * 3] = 1;
        this.MATRIX[1 + 1 * 3] = 1;
        this.MATRIX[2 + 2 * 3] = 1;
    }

    getRotation(angle, x, y, z) {
        let r = angle * Math.PI / 180;
        let cos = Math.cos(r);
        let sin = Math.sin(r);
        let omc = 1 - cos;

        this.MATRIX[0 + 0 * 3] = x * omc + cos;
        this.MATRIX[1 + 0 * 3] = y * x * omc + z * sin;
        this.MATRIX[2 + 0 * 3] = x * z * omc - y * sin;

        this.MATRIX[0 + 1 * 3] = x * y * omc - z * sin;
        this.MATRIX[1 + 1 * 3] = y * omc + cos;
        this.MATRIX[2 + 1 * 3] = y * z * omc + x * sin;

        this.MATRIX[0 + 2 * 3] = x * z * omc + y * sin;
        this.MATRIX[1 + 2 * 3] = y * z * omc - x * sin;
        this.MATRIX[2 + 2 * 3] = z * omc + cos;

        return this;
    }
}