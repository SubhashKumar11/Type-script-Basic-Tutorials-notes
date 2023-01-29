//to run program tsc app.ts in terminal .Then app.js file generated automatically .then include app.js in .html file
//console.warn("hello-world"); or use tsc App.ts --watch and for.js use nodeApp.js
class Tests1 {
    apple(){ 
      console.warn("eating apple")
    }
}
let a1 = new Tests1();
a1.apple();
//if you want to reflect changes automatically like nodemon use -> tsc app.ts --watch 
//and for multiple ts file use node app.js
//Topic1:Type number string
var n:  number=10; //it doest contain int so we use number
let b:boolean = true;
//Datatypes: boolean,string,void,null,any(any type of value can be assign to that variable)
let s:string = 'ram';
let c:number = 345.67;
let f:any = true;

