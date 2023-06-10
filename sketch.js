var angle = 0,
  angle2 = 0;

var slider, slider2;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.001);
  slider2 = createSlider(0, TWO_PI, PI / 4, 0.001);
}

function draw() {
  background(51);
  angle = slider.value();
  angle2 = slider2.value();
  stroke(255);
  translate(200, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle2);
    branch(len * 0.67);
    pop();
  }

  // line(0, 0, 0, -len * 0.67);
}
