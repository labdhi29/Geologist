class Stone{
    constructor{
        var options{
            restitution:0.8,
            friction:0.9,
            denstity:12
        }
      this.width=width;
      this.height=height;
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      world.add(World,this.body)
    }
    display(){
        display(){
      var pos = this.body.position;
      var angle = this.body.angle;
	  push()
	  translate(pos.x, pos.y);
      rotate(angle);
	  rectMode(CENTER)
	  strokeWeight(4);
	  stroke("pink");
	  fill("purple");
      rect(0,0,this.width,this.height);
	  pop();
	
    }

}