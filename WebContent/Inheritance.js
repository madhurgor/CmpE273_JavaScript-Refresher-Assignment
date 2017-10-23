var person = {name:"Madhur Gor", age:23, sex:"Male"};
var student = Object.create(person);

student.dept="Software Engineering";

document.getElementById('a').innerHTML="Name: "+person.name+", Age: "+person.age+" and Sex: "+person.sex;
document.getElementById('b').innerHTML="Name: "+student.name+", Age: "+student.age+", Sex: "+student.sex+" and Department: "+student.dept;

student.age=24;
document.getElementById('c').innerHTML="Name: "+student.name+", Age: "+student.age+", Sex: "+student.sex+" and Department: "+student.dept;