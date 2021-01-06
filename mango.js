class Mango extends BaseClass {
    constructor(x, y){

      push();

      var options={
        isStatic:true,
        restitution:0,
        friction:1
      }
      super(x,y,50,50,options);
      this.image = loadImage("mango.png");
    }
  
  };