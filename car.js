class Car{
    constructor(x,y,weight, speed){
        this.weight=weight;
        this.speed=speed;
        this.velocityX=this.speed;
        this.width=20;
        this.heigth=20;
        this.x = x;
        this.y = y;
        this.car = createSprite(this.x,this.y,this.width,this.height);
        this.car.velocityX = this.speed;
        this.car.shapeColor = Math.round(random(0,255));
    }

display() {
    
    //console.log(this.car);
    
    drawSprites();
}
collition(wall_x,wall_width) {
    if(wall_x-this.car.x < (this.car.width+wall_width)/2)
  {
    this.car.velocityX = this.car.velocityX * -1;
      var deformation=0.5 * this.weight * this.speed* this.speed/22509;
      console.log(deformation+ "  is deformation");
      
	if(deformation>180)
	{
        this.car.shapeColor=color(255,0,0);
        
	}

	if(deformation<180 && deformation>100)
	{
		this.car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		this.car.shapeColor=color(0,255,0);
	}
  }  
}   

}