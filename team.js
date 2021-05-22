class Team {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        
        this.team = Bodies.circle(x,y,25,options);
        this.image1 = loadImage("images/teamboy1.png");
        this.image2 = loadImage("images/teamboy2.png");
        this.image3 = loadImage("images/teamgirl1.png");
        this.image4 = loadImage("images/teamgirl2.png");
        this.radius = 25;
        this.image1.scale = 1;
        World.add(world, this.team)
        
        
    }

    display(){
        push();
        var pos = this.team.position;
        imageMode(CENTER);
        image(this.image1,300,310);
        image(this.image2,500,310);
        image(this.image3,700,350);
        image(this.image4,900,300);
        pop();
    }
}
