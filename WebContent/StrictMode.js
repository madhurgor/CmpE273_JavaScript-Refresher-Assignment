function strict()
{
	'use strict';
	try
	{
		x="Strict Mode";
		document.getElementById('i').innerHTML=x;
	}
	catch(err)
	{
	    document.getElementById('i').innerHTML = "Error: "+err.message;
	}
}

function nonStrict()
{
	y="No error is thrown even if the variable is not declared.";
	document.getElementById('i').innerHTML=y;
}