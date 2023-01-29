let datas1 = ['anil','ram',56] 
datas1.push(10);
console.log(datas1);

//object
interface userHai{
    name:string,
    age:number,
    address:any //any is datatype
}
let users2:userHai ={
    name:'bruce',
    age:30,
    address:'usa'
}
console.log(users2);
//note:-if we not define type after let user:datatype then for global use any so that any datatype assign to that 
let users1:any = {
name:'ram',
roll:5,
add:'607 rampur'
}
console.log(users1);



