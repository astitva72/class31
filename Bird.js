class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png")
    this.arry=[]

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>2&&this.body.position.x)
    this.arry.push([this.body.position.x,this.body.position.y])
    for(var I=0;I<this.arry.length;I=I+1)
    image(this.smokeimage,this.arry[I][0],this.arry[I][1])
  }
}
