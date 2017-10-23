var student = [{id:01,name:"Madhur Gor",grade:"4"},
			   {id:02,name:"Anurag Patel",grade:"4"},
			   {id:03,name:"Rohan Panchal",grade:"3.5"},
			   {id:04,name:"Saurabh Jain",grade:"2"},
			   {id:05,name:"Smit Desai",grade:"2"},
			   {id:06,name:"Nabil Patel",grade:"4"},
			   {id:07,name:"Hiren Patel",grade:"2.5"}];

var i, max=0, min=4, nmax=0, nmin=0, t1="", t2="";

function find()
{
	var i, max=0, min=4, nmax=0, nmin=0, t1="", t2="", n1=0, n2=0;
	for(i=0;i<student.length;i++)
	{
		max=max>student[i].grade?max:student[i].grade;
		min=min<student[i].grade?min:student[i].grade;
	}
	for(i=0;i<student.length;i++)
	{
		if(max==student[i].grade) nmax+=1;
		if(min==student[i].grade) nmin+=1;	
	}
	for(i=0;i<student.length;i++)
	{
		if(max==student[i].grade && n1==0)
			{t1=student[i].name; n1+=1;}
		else if(max==student[i].grade && n1==nmax-1)
			{t1=t1+" and "+student[i].name; n1+=1}
		else if(max==student[i].grade)
			{t1=t1+", "+student[i].name; n1+=1;}
		
		if(min==student[i].grade && n2==0)
			{t2=student[i].name; n2+=1;}
		else if(min==student[i].grade && n2==nmin-1)
			{t2=t2+" and "+student[i].name; n2+=1;}
		else if(min==student[i].grade)
			{t2=t2+", "+student[i].name; n2+=1;}
	}
	document.getElementById('h').innerHTML = "Highest grade is "+max+"; "+t1+" is/are student/s who got this grade.";
	document.getElementById('l').innerHTML = "Lowest grade is "+min+"; "+t2+" is/are student/s who got this grade.";
}