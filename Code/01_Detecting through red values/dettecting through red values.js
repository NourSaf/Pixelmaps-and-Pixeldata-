//01. Declare the variables, which will be used in the code
let img_01; 
let slider; 
let button; 
let clone;
let text_01;

//02. PRELOAD function to pre load the img before running the code 
function preload (){
  img_01 = loadImage('Photos/Raw/IMG_3861.JPG');

}

//02. SETUP function to difine elements such as canvas size and image position

function setup(){
  createCanvas(1920, 1080);

  //setting image size and position
  image (img_01, 10, 10, 100,400);


  //Button 
  button = createButton ('DOWNLOAD');
  button.position(510,510);
  button.size (100, 50);
  button.mousePressed(saveImage);
}

//04. DRAW function contains FOR LOOP to get the pixels and maipulate them 
function draw (){
  img_01.loadPixels();

  //FOR LOOP to go through euch pixel in the photo
  //01. Getting the varitcal pixels 
  for (let y = 0; y < img_01.height; y++) {
    //02. Getting the horizantle pixels 
    for (let x = 0; x < img_01.width; x++){

      let in_color = img_01.get (x,y);
      let r = red (in_color);
      let g = green (in_color);
      let b = blue (in_color);
      let out_color;

    //if to recolor the pixels got from FOR LOOP based on their red values
    if (r < 1 ){
      out_color = color(20,255,20);
    } else if (r >= 25 && r < 75){
      out_color = color (255,0,0);
    } else if (r > 75){
      out_color = color (0,0,255); 
    }
    
      //setting the new pixels into the image 
      img_01.set(x,y, out_color);
    }
  }


  //updating the pixels and setting the image position and size
  img_01.updatePixels();
  image (img_01, 10,10, 600, 500);

  //noLoop for running the code only one time to reduce processing
  noLoop();
 
}

//saveIage function to save a certain image
function saveImage(){
  save(img_01, "Image01.jpg");
}

//fucntion keyPressed to allow downloading the image when S key is pressed
function keyPressed(){
  if (key === "s"){
   saveImage ("image01.jpg")
  }
}