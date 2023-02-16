var sea = createsprites (400,400,400,400);
var seaImg,shipImg1
var ship

sea.velocityX=-6



sea.lodImagem("sea.Img1")   
 ship.lodImagem("ship.Img1")

  function preload(){
    ship.Img1= addImagem("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
    sea.Img1= addImagem("sea.png");



}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
if (sea.X < 0){
  sea.x = sea.width/2;

}



    drawSprites();

 
}
