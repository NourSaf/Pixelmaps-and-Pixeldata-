
let imageMaterial;

function preload() {
  imageMaterial = loadImage("Photos/Raw/IMG_3863.JPG");
}

function setup() {
  createCanvas(500, 700);
}

function draw() {
  background(255, 0, 255);
  imageMaterial.resize(250, 250);
  fill(255, 255, 0);
  noStroke();
  imageMaterial.loadPixels();

  console.log(imageMaterial.width)

  for (let y = 0; y < imageMaterial.height; y++) {
    for (let x = 0; x < imageMaterial.width; x++) {
      const in_color = imageMaterial.get(x, y);
      const dot_size = (lightness(in_color) / 255) * 40;
           ellipse(
        x * 500 / imageMaterial.width + 500 / imageMaterial.width * 0.5,
        y * 700 / imageMaterial.width + 700 / imageMaterial.width * 0.5,
        dot_size,
        dot_size
      );
    }
  }

  // bild wird nur als input verwendet, aber nicht dargestellt

  noLoop();
}

