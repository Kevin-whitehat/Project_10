
var ship;
var sea;
function preload() {
  shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png")

}

function setup() {
  sea = createSprite(200, 200);
  createCanvas(400, 400);
  sea.addImage("sea", seaImage);

  sea.velocityX = -4;
  ship = createSprite(200, 300);
  ship.addAnimation("ship", shipImage);
  ship.scale = 0.2

}

function draw() {


  if (sea.x < 0) {
    sea.x = sea.width / 2;

  }
  background("blue");
  drawSprites();

}