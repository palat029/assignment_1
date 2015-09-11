function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background - skyblue
  background(255, 204, 100);

	// set a fill color white
	fill(255, 255, 255);
	// draw ground
	noStroke();

	// set a stroke color

	// draw a circle
	ellipse(420, 280, 190, 160);
	ellipse(480, 130, 170, 120);
	ellipse(300, 70, 130, 140);
// R, G & B integar values
fill(0,191,255)
ellipse(-20, 180, 500, 650);
fill(84,107,47);
ellipse(420, 280, 160, 130);
ellipse(480, 130, 150, 100);
ellipse(300, 70, 100, 110);
// Draw a rectangle with rounded corners, each having a radius of 20.
fill(255,255,255)
rect(310, 40, 20, 20, 5);
rect(270, 40, 20, 20, 5);
fill(0,0,0)
rect(310, 43, 15, 15, 5);
rect(270, 43, 15, 15, 5);
ellipse(300, 90, 40, 20);

// HSL color is also supported and be specified
// by value
var c;
noStroke(); // Don't draw a stroke
c = color('hsl(160,100%,50%)')
fill(c); //use 'c' as fill color

beginShape();
  vertex(70, 20);
  vertex(84, 50);
  vertex(117, 55);
  vertex(93, 77);
  vertex(99, 110);
  vertex(70, 95);
  vertex(41, 110);
  vertex(47, 77);
  vertex(23, 55);
  vertex(56, 50);
  endShape(CLOSE);
	// set a fill color white
	fill(255, 255, 255);
	rect(35, 50, 75, 15);
	// Grayscale integar value
	fill(61);
	ellipse(70, 55, 25, 25);
	// R, G & B integar values
	fill(205, 201, 201);
	ellipse(70, 55, 15, 15);



}
