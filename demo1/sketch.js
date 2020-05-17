
var canvas;
var s;
var ghosts;

function preload() {



}
function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
 ghosts = new Group();

 for(var i = 0; i<10; i++) {
    var newGhost = createSprite(random(0, width), random(0, height));

    newGhost.addAnimation('floating', 'img/assets/cub_00000.png', 'img/assets/cub_00148.png');
    ghosts.add(newGhost);
  }
}



function draw() {
clear();

for(var i = 0; i<ghosts.length; i++) {
    var g = ghosts[i];
    //moving all the ghosts y following a sin function (sinusoid)
    g.position.x += sin(frameCount/30);
      g.position.y += sin(frameCount/30);

      g.attractionPoint(0.15, mouseX, mouseY);
      g.maxSpeed = 9;


  }


   drawSprites();

}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  // var s = createSprite(mouseX, mouseY, 30, 30);
  //   s.addAnimation('floating', 'img/assets/cub_0000.png', 'img/assets/cub_0148.png');
  // //if no image or animation is associated it will be a rectancle of the specified size
  // //and a random color
  //
  // //now you can use the variable to set properties
  // //e.g. a random velocity on the x and y coordinates
  // s.velocity.x = random(-5, 5);
  // s.velocity.y = random(-5, 5);
}
