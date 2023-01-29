//name space use to group functionalities at one common place
namespace meraFile{
    export class Apple{
         name = "ram";
         getMyname(){
            return this.name
            console.log(this.name)
         }
    }
}
let k = new meraFile.Apple();
k.getMyname();
