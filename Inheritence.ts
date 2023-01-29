class Rajarami{
   names; // or names = "ram";
   setNames(names){ //setname is userdefine
    this.names = names
   }
    getMyname(){
        console.log(this.names);
    }
}
//child class
class Betas extends Rajarami{
    getMynames(){
        console.log(this.names);
    }
}
//object declaration
let a = new Betas()
a.setNames("ram");
a.getMynames();