var student = [{id:01,name:"Madhur Gor",grade:"4"},
			   {id:02,name:"Anurag Patel",grade:"4"},
			   {id:03,name:"Rohan Panchal",grade:"3.5"},
			   {id:04,name:"Saurabh Jain",grade:"2"},
			   {id:05,name:"Smit Desai",grade:"2"},
			   {id:06,name:"Nabil Patel",grade:"4"},
			   {id:07,name:"Hiren Patel",grade:"2.5"}];

function grade()
{
	var i, fl=0;
	var a=document.getElementById("id").value;
	for(i=0;i<student.length;i++)
	{
		if(a==student[i].id)
		{
			fl=1;
			if(student[i].grade<3)
				document.getElementById("grade").innerHTML= "Your grade is "+student[i].grade+". You are on probation as your grade is below 3."
			else
				document.getElementById("grade").innerHTML= "Your grade is "+student[i].grade+". You can enroll for next semester as your grade is same or above 3."
		}
	}
	if(fl==0)
	{
		document.getElementById("grade").innerHTML= " ";
		window.alert("Student ID does not exist.");
	}
}