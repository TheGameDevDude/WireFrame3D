class Triangle {
    constructor(a, b, c) {
        this.VERTICES = [];
        this.VERTICES.push(a);
        this.VERTICES.push(b);
        this.VERTICES.push(c);
    }

    renderWireFrame(ctx) {
        line(this.VERTICES[0], this.VERTICES[1], ctx);
        line(this.VERTICES[1], this.VERTICES[2], ctx);
        line(this.VERTICES[2], this.VERTICES[0], ctx);
    }
}