let nbarray = [];
let x=0;


function setup() {
  createCanvas(800, 600, WEBGL);

  for(let i=0;i<1;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
  }
  
  console.log(nbarray);
  //createCanvas(600, 600, WEBGL);
  //detailX = createSlider(2, 24, 12);
  //detailX.position(10, height + 5);
 // detailX.style('width', '80px');
  
  
}

function draw() {
 
 background(100,100,100,);
   //background-image:url( ' https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.xuite.net%2Fgwasunshau%2Fwretch%2F130525916&psig=AOvVaw2Typc2iHSxTsxtRj_WF-6R&ust=1616934833509000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDMxOe90O8CFQAAAAAdAAAAABAD ' );      
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
  
   x=x+0.05
    if(mouseIsPressed){
  //fill(mouseX,mouseY,random(255));
  //square(mouseX-325,mouseY-325, 55);  
  //noStroke();
    
  } else{
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.05);
  fill(202,122,44);
  cone(40, 90);
  
    //fill(mouseX,mouseY,10);
    //circle(mouseX-300, mouseY-300,20+5*sin(x));
    noStroke();
  }
  
  

  
  
  
  
  
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
    this.cc=color(random(100),random(100),random(255))
    this.stela=new stela(this.x,this.y,this.z,this.size*0.35,this.size);
    this.stela1=new stela1(this.x,this.y,this.z,this.size*0.85,this.size);
    this.stela2=new stela2(this.x,this.y,this.z,this.size*0.5,this.size);
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    //noStroke();
    push();
    
      rotateX(frameCount*0.001);
        rotateY(frameCount*0.001);
        rotateZ(frameCount*0.05);
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
      
        this.mx = this.mx+0.6;
        }
      this.stela.display();
      this.stela2.display();
      this.stela1.display();
      
      fill(this.cc);
     //ellipsoid(30, 40, 40, detailX.value(), 8);
    //cylinder(this.size*1);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
  }
}


//小球相關
class stela{
    constructor(x,y,z,size,cdx){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.cdx=cdx;
    this.cc=color(random(200),random(100),100)
  }
  display(){
    push();
    rotateZ(frameCount*0.1);
    translate(this.cdx,0,0);  
    fill(this.cc);
    sphere(this.size);
    pop();
}
  }

class stela1{
    constructor(x,y,z,size,cdx){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.cdx=cdx;
    this.cc=color(random(100),random(100),0)
  }
  display(){
    push();
    rotateZ(frameCount*0.4);
    translate(this.cdx,5,0);  
    fill(this.cc);
    sphere(this.size);
    pop();
}
  }

class stela2{
    constructor(x,y,z,size,cdx){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.cdx=cdx;
    this.cc=color(random(100),random(100),100)
  }
  display(){
    push();
    rotateZ(frameCount*0.5);
    translate(this.cdx,10,0);  
    fill(this.cc);
    sphere(this.size*2);
    pop();
}
  }