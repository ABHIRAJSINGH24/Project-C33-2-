class Box{
    constructor(x, y, width, height) {
        var options = {
          'restitution' :0.4,
          'friction' :0.1,
          'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visibility = 225;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<=3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
        }else {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-5;
          tint(225,this.visibility);
          pop();
        }
      }
}