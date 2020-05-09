var wall;
//var Car=[];
var Zenia,Tourus,Cyclap;
var edges;
function setup() {
  createCanvas(1600,400);
  
  Zenia = new Car(50,50,2260,60);
  Tourus = new Car(50,100,1522,50);
  Cyclap = new Car(50,150,3000,45);
  wall=createSprite(1500,200,60,400);
edges = createEdgeSprites();
}

function draw() {
  background("black"); 
  
  Zenia.display();
  Tourus.display();
  Cyclap.display();

  Zenia.collition(wall.x,wall.width);
  Tourus.collition(wall.x,wall.width);
  Cyclap.collition(wall.x,wall.width);
  
 
}
/*function collition(car){
       
  if(wall.x-car.x<(car.width+wall.width)/2){
          var deformation=0.5*this.weight*this.speed*this.speed/2500;
          car.velocityX=0;
      if(deformation>180){
              car.fill="red";
      }
      else if(deformation<180 && deformation>100){
          car.fill="yellow";
      }
      else if(deformation<100){
          car.fill="green";
      }
      else{
          car.fill="white"
      }
  }
}*/