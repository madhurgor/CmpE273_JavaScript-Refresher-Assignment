var user= [{username:"Madhur_Gor",password:"mg123456"},
		   {username:"Anurag_Patel",password:"ap234567"},
		   {username:"Rohan_Panchal",password:"rp123456"},
		   {username:"Saurabh_Jain",password:"sj234567"},
		   {username:"Smit_Desai",password:"sd123456"},
		   {username:"Hiren_Patel",password:"hp234567"}];

function logIn()
{
	var i=0, fl=0;
	for(i=0;i<user.length;i++)
	{
		if(user[i].username.toUpperCase()==document.getElementById("u").value.toUpperCase() && user[i].password==document.getElementById("p").value)
		{
			window.alert("Welcome "+user[i].username+"!!");
			fl=1;
		}
	}
	if(fl==0)
	{
		window.alert("This username or password does not exist.");
	}
}

function mouseOver()
{
	document.getElementById('notification').innerHTML = "Please enter your username here and it is not case-sensitive.";
}

function mouseOver1()
{
	document.getElementById('notification').innerHTML = "Please enter your password here and it is case-sensitive.";
}

function mouseOver2()
{
	document.getElementById('notification').innerHTML = "Please click this button for logging in the system.";
}

function mouseOut()
{
	document.getElementById('notification').innerHTML = "Please see notifications here.";
}