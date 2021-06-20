class Paper{

    constructor(x,y,r){
        var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
        }
    this.body=Bodies.circle(x,y,r,options);
    this.img=loadImage("paper.png")
    this.r=r;
    World . add(world,this.body)
    }
    display(){
        push()
        var pos=this.body.position
        var angle = this.body.angle
        translate(pos.x, pos.y);
        imageMode(CENTER)
        //strokeWeight(4);
        angleMode(RADIANS)
        fill(255)
        rotate(angle);
        image(this.img,0,0,this.r, this.r);
        pop()

    }



}
