let x = 0;
let speed = 0.5;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(139, 0, 0);
  
  //base
  stroke(0);
  strokeWeight(1);
  fill(54,55,56);
  rect(100, 350, 600, 300);
  
  //second marker
  fill(45,46,46);
  rect(100, 275, 600, 75);
  
  
  noStroke (255);
  fill (255)
   quad (275,275, 350,275, 425,350, 350,350);
    quad(425,275, 500,275, 575,350, 500,350);
    quad(575,275, 650,275, 700,350, 650,350);
  triangle(650,275, 700,350, 700,325);
  
  //white lines
    stroke(255);
  strokeWeight(5);
  line(150,525, 650,525);
  line(300,525, 300,625);
  line(500,525, 500,625);
  
  push();
  
  //moving marker
  noStroke (67, 235, 52);
  fill(45,46,46)
  translate(100,200);
  rotate(radians(x-18));
  rect(0,0, 600, 75);
  
  x = x + speed;
  
  
  if (x > 18 ) {
    speed = -0.5;
    
  };
   if (x < 0) {
     speed = 0.5;
   }
  
  translate(-100,-200);
  fill(255)
  
  //left stripe
  quad(200,200, 275,275, 350,275, 275,200);
 
  
  //middle stripe
  quad(350,200, 425,200, 500,275, 425,275);

  
  //right stripe
  quad(500,200, 575,200, 650,275, 575,275);
  
  //right bottom stripe
  fill(143, 219, 219);
  
  pop();
  
  noStroke (0);
  fill(0);
  triangle(100,200, 100,350, 275,350);


  

}