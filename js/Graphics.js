function line(a, b, ctx) {
    ctx.strokeStyle = '#0f0';
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
}