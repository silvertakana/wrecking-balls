class Joint {
    constructor(a,b,long,stiff){
        var option = {
            'bodyA': a,
            'bodyB': b,
            'stiffness':stiff,
            'length':long
        }
        this.bodyB = b;
        this.joint  = Constraint.create(option);
        World.add(world,this.joint)
    }
    display() {
       
       
        if(this.joint.bodyA){
        
        var posA = this.joint.bodyA.position;
        
        var posB = this.joint.bodyB.position;
        push();
        stroke(48,22,8);
        strokeWeight(20)
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
        }
    }
    break(){
        this.joint.bodyA = null;
        //this.joint.bodyB = null;
    }
    join(a){
        this.joint.bodyA = a;
    }
}