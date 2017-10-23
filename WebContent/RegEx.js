function check()
{
	var no1=document.getElementById("n").value;
	var re=new RegExp("^\\d\\d{8}\\d$");
	var r=re.test(no1);
	var a=r>0?"Valid Phone Number":"Invalid Phone Number";
	document.getElementById('chk').innerHTML = a;
}