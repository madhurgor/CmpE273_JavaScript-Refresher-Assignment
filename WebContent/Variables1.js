function area()
{
	var a=document.getElementById("l").value;
	var b=document.getElementById("w").value;
	var z=a*b;
	if(!isNaN(z))
	{
		document.getElementById('ans').innerHTML = z;
	}
	else
	{
		document.getElementById('ans').innerHTML = "One of the element is not a number";
	}
}