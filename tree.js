class Tree extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("tree.png");
      this.body.scale =10;
      Matter.Body.setAngle(this.body, angle);
    }
  }