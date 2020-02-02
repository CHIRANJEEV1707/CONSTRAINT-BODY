class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bird.body,
            bodyB:constraintlog.body,
            stiffness:0.04,
            lenght:10
            
        } 
        this.Chain=constraint.create(options)
        World.add(world,this.Chain)

    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(7)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

}