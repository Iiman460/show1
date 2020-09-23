class Ball{
    constructor(x,y){
        var options = {

        }
        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;
        
        World.add(world,this.body);
    }

    show(){
        var pos = this.body.position;
        
        
        fill("yellow");
        ellipse(pos.x,pos.y,this.radius);
    }
}