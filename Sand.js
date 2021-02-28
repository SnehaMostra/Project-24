class Sand {
    constructor(x, y,r) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y,5, [options],[5]);
    
      this.radius = 5;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      stroke("blue");
      strokeWeight(2);
      fill("red");
      ellipse(0, 0, 5 , 5);
      pop();
    }
  };
  