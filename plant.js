class Plant {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        
        this.plant = Bodies.circle(x,y,25,options);
        this.image = loadImage("images/plant.png");
        this.radius = 25;
        this.image.scale = 0.7;
        World.add(world, this.plant)
        
        
    }

    display(){
        push();
        var pos = this.plant.position;
        imageMode(CENTER);
        image(this.image,500,450,this.radius,this.radius);
        pop();
    }
}