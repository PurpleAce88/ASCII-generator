const density = "Ñ@#W&$9876543210%?|!abc/;:+=<~-,._' "

let bear;

let res = 5;

function preload(){
  bear = loadImage("mitsuri.png")

}
function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(220);
  //image(bear,0,0,width,height);

  let w = width / bear.width;
  let h = height / bear.width;
  bear.loadPixels();
  bear.resize(width/res,height/res);
  //image(bear,0,0,width,height);
  for(let i = 0;i < bear.width;i++){
    for(let j = 0;j < bear.height; j++){
      const pixelIndex = (i + j * bear.width) * 4;
      const r = bear.pixels[pixelIndex + 0];
      const g = bear.pixels[pixelIndex + 1];
      const b = bear.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3

      noStroke();
      fill(0);
      //square(i * w, j* h, w);

      const len = density.length;
      const charIndex = floor(map(avg,0,255,0,len));
      
      textSize(w);
      textAlign(CENTER,CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5 , j * h + h * 0.5);
    }
  }
}