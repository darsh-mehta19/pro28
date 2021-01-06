class Stone extends BaseClass {
    constructor(x,y){
      push();
     var options={
      isStatic:false,
      restitution:0,
      friction:1,
      density:1.2
     }
      super(x,y,50,50,options);
      this.image = loadImage("stone.png");
      pop();
      
    }
  }