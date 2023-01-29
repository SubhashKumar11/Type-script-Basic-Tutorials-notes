import StudentLogin from './Student'
import TeacherLogin from './Teacher' //we can use any name inplace studentLogin and TeacherLogin
let teacher = new TeacherLogin()
console.log(teacher.mydata);

//for student
let student = new StudentLogin()
student.mydata 
console.log(student.mydata)
//use command tsc *.ts --watch ->so that all files get converted into js file