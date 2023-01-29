/**
 * use for validating the structure of an object in the case where we are creating an object,
 * and when we are passing object as parameter
 * syntax: interface Interface_name{
 * write your code here as
 * property_name:datatype,
 * propert_name: datatype
 * }
 */
interface UserHai{
    name:string,
    roll:number,
    getMyname:()=>string //way of function declaration
}
let myuserIs  = {
    name: 'raju',
    roll: 5,
    getMyname :function(){
        console.log("function called")
    }
}
console.log(myuserIs.getMyname)
export{}