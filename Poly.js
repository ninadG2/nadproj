class Poly
{
     constructor(x, y, radius)
     {
        this.body = Bodies.circle(x, y, radius, radius, options)
        var options ={
                       'restitution':0.3,
                       'isStatic': false
                  
                     }
        this.width = width;
        this.height = height;
        this.r = radius
        World.add(world, this.body)
        this.image = loadImage("polygon.png")
     }

     display()
     {
        var stonePos = this.body.position;
        image(this.image, stonePos.x, stonePos.y, this.r, this.r)
        imageMode(CENTER)
     }
}