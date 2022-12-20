const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let angle = 0;

// list of vertices to form a cube
let topLeftF = new Vector3f(-1, 1, -1);
let bottomLeftF = new Vector3f(-1, -1, -1);
let bottomRightF = new Vector3f(1, -1, -1);
let topRightF = new Vector3f(1, 1, -1);
let topLeftB = new Vector3f(-1, 1, 1);
let bottomLeftB = new Vector3f(-1, -1, 1);
let bottomRightB = new Vector3f(1, -1, 1);
let topRightB = new Vector3f(1, 1, 1);

let TRIANGLES = [];
TRIANGLES.push(new Triangle(topLeftF, bottomLeftF, bottomRightF));
TRIANGLES.push(new Triangle(topLeftF, bottomRightF, topRightF));
TRIANGLES.push(new Triangle(topLeftB, topRightB, bottomLeftB));
TRIANGLES.push(new Triangle(topRightB, bottomRightB, bottomLeftB));
TRIANGLES.push(new Triangle(topRightF, bottomRightB, topRightB));
TRIANGLES.push(new Triangle(topRightF, bottomRightF, bottomRightB));
TRIANGLES.push(new Triangle(topLeftF, topLeftB, bottomLeftF));
TRIANGLES.push(new Triangle(topLeftB, bottomLeftB, bottomLeftF));
TRIANGLES.push(new Triangle(topLeftF, topRightF, topLeftB));
TRIANGLES.push(new Triangle(topLeftB, topRightF, topRightB));
TRIANGLES.push(new Triangle(bottomLeftF, bottomLeftB, bottomRightB));
TRIANGLES.push(new Triangle(bottomLeftF, bottomRightB, bottomRightF));

function gameLoop() {
    // clear screen
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    TRIANGLES.forEach(triangle => {
        let vertices = triangle.VERTICES
            // rotate vertices
            .map(v => v.multiply(new Matrix3f().getRotation(angle, 0, 1, 0)))
            .map(v => v.multiply(new Matrix3f().getRotation(angle, 1, 0, 0)))
            // translate vertices
            .map(v => new Vector3f(v.x, v.y, v.z + 4))
            // perspective divide where we divide x and y by z
            .map(v => new Vector3f(v.x / v.z, v.y / v.z, v.z))
            // shift from world space to screenspace
            .map(v => v.shiftToScreenSpace(canvas.clientWidth, canvas.clientHeight));

        // render triangle
        new Triangle(vertices[0], vertices[1], vertices[2]).renderWireFrame(ctx);
    });

    angle += 1;
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);