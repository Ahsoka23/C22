class Tower{

    //constructor
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h; 

        var options = {
            isStatic:true
        }


        this.image = loadImage("assets/tower.png");
    }

    //functions
    print(){
        image(this.image,this.x,this.y,this.w,this.h);
    }
}