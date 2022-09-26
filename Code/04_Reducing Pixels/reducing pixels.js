let img;

// Load the image
function preload() {
  img = loadImage("IMG_3861.jpg");
}

function setup() {
  createCanvas(900, 1200);

  img.resize(900,1200);

  noStroke();

}

function draw() {

  // Round to the nearest 10
  pixelsize = 50;
  
  // Loop through the pixels X and Y
  for (let y = 0; y < img.height; y += pixelsize) {
    for (let x = 0; x < img.width; x += pixelsize) {
      
  //     // Get the color at (x, y)
      fill(img.get(x, y));
      
  //     // Draw a rectangle at (x, y) and the size of a cell
      rect(x, y, pixelsize, pixelsize);

    }
  }
}

  function saveImage(){
    save(img, "img1.jpg");
    
  }
  
  function keyTyped(){
    if (key === "s"){
      rect.save ("rect", "jpg")
    }
  }

  
