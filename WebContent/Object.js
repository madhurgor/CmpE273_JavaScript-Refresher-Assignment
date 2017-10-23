var student = [{id:01,name:"Madhur Gor",age:"21",department:"Computer",major:"Software Engineering",hobbies:"Playing Chess"},
			   {id:02,name:"Anurag Patel",age:"22",department:"Computer",major:"Software Engineering",hobbies:"Playing Snooker"},
			   {id:03,name:"Rohan Panchal",age:"24",department:"Computer",major:"Computer Engineering",hobbies:"Reading"},
			   {id:04,name:"Saurabh Jain",age:"21",department:"Computer",major:"Computer Science",hobbies:"Listening Music"},
			   {id:05,name:"Smit Desai",age:"22",department:"Mechanical",major:"Mechanical Engineering",hobbies:"Swimmimg"},
			   {id:06,name:"Hiren Patel",age:"21",department:"Civil",major:"Civil Engineering",hobbies:"Playing Counter Strike"}];

function search()
{
	var i=0, fl=0;
	for(i=0;i<student.length;i++)
	{
		if(student[i].id==document.getElementById("id").value)
		{
			document.getElementById("ans").innerHTML="The student having Student ID "+student[i].id+" is "+student[i].name+". He is "+student[i].age+". He belongs to "+student[i].department+" departmant. His major is "+student[i].major+". His hobby/ies is/are "+student[i].hobbies+".";
			fl=1;
		}
	}
	if(fl==0)
	{
		document.getElementById("ans").innerHTML="This Student ID does not exist.";
	}
}