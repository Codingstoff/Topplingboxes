class Ground 
{
    constructor(x,y,width1,height1)
    {
        var options = {isStatic:true} 
        this.Body = Bodies.rectangle(x,y,width1,height1,options);
        this.width = width1
        this.height = height1
        World.add(world,this.Body);
    }
    display()
    {
      var position = this.Body.position;
      rectMode(CENTER);
      rect(position.x,position.y,this.width,this.height)

    }

}