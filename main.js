function preload() {
}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(110, 250);
}

function draw() {

    circle(600, 300, 500);
    ellipse(46, 45, 55, 55);
    rect(47, 48, 59, 59)
}

function take_snapshot() {
    save('something.png');
}