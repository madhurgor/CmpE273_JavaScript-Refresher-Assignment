function interest()
{
	var p=document.getElementById("p").value;
	var r=document.getElementById("r").value;
	var n=document.getElementById("n").value;
	var i=p*r*n/100/12;
	if(!isNaN(i))
	{
		document.getElementById('ans').innerHTML = i;
	}
	else
	{
		document.getElementById('ans').innerHTML = "Either Principle, Rate or Number of Months is not a number";
	}
}