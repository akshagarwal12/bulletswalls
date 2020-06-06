function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight= random(30,52)
  rectMode(CENTER)
   bullet= createSprite(50,200,50,50)
  wall = createSprite(1200,200,thickness,height/2)
  bullet.velocityX=speed;
  thickness=random(22,83)
}
var bullet, wall, thickness;
var speed, weight;

function collide(bullet1,wall1){
  if(wall1.x-bullet1.x<(bullet1.width+wall1.width/2)){
    return true;
  }
  return false;

}

function draw() {
  bullet.velocityX=speed;
  function collide(bullet1,wall1){
    if(wall1.x-bullet1.x<(bullet1.width+wall1.width/2)){
      return true;
    }
    return false;

  }

  if (collide(bullet,wall)){
     bullet.velocityX=0
     console.log('hit')
     var deformation = 0.5*weight*speed*speed/(thickness * thickness * thickness);
     if(deformation>10){
       bullet.shapeColor=color(255,0,0)
    
     }
     if(deformation<10){
        bullet.shapeColor=color(0,255,0);
     }

    }
  


  background(255,255,255);  
  drawSprites();
}