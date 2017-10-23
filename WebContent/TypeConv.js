function area()
{
	var a=Number(document.getElementById("b").value);
	var b=Number(document.getElementById("h").value);
	var z=a*b/2;
	if(!isNaN(z))
	{
		document.getElementById('ans').innerHTML = z;
	}
	else
	{
		document.getElementById('ans').innerHTML = "One of the element is not a number";
	}
}