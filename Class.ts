class Rajaram{
    names;
    apple;
   constructor(names,apple){
    this.names = names;
    this.apple = apple;
   }
    getMyname(){
        console.log(this.names);
    }
}
//object declaration
let a1 = new Rajaram("ram",6)
a1.getMyname();