class Box {

constructor(x,y,width,height){

var options={'restitution':1,'density':1,'isStatic':true,'friction':2}

this.body=Bodies.rectangle(x,y,width,height,options)

this.width=width;
this.height=height;

World.add(world,this.body)
}

display(){

rectMODE(CENTER);



var a = this.body.position.x
var b = this.body.position.y


fill("red");
rect(a,b,this.width,this.height)



}

}