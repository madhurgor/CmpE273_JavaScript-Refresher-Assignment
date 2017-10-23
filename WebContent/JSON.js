
var studentText = '{"student":[{"id":01,"name":"Madhur Gor","age":21,"department":"Computer"},{"id":02,"name":"Anurag Patel","age":22,"department":"Electrical"},{"id":03,"name":"Rohan Panchal","age":24,"department":"Electrical"},{"id":04,"name":"Saurabh Jain","age":21,"department":"Computer"},{"id":05,"name":"Smit Desai","age":22,"department":"Mechanical"},{"id":06,"name":"Hiren Patel","age":21,"department":"Civil"}]}';

var studentObj = JSON.parse(studentText);
for(i=0;i<studentObj.student.length;i++)
{
	document.getElementById('re').innerHTML+="Name: "+studentObj.student[i].name+", Age: "+studentObj.student[i].age+" and Department:"+studentObj.student[i].department+"<br>";
}