function div()
{
	var a=document.getElementById("n").value;
	var b=document.getElementById("d").value;
	var z;
	try
	{
		z=a/b;
		if(b==0) throw "Cannot divide by zero.";
		else if(isNaN(z)) throw "One of the element is not a number.";
		document.getElementById('ans').innerHTML = z;
	}
	catch(err)
	{
		document.getElementById('ans').innerHTML = "Error: "+err;
	}
}