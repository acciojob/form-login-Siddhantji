function getFormvalue() {
    //Write your code here
	let form = document.getElementById("form1");
	form.addEventListener("submit",function(){
		const f = form.elements["fname"].value;
		const l = form.elements["lname"].value;

		const alertm = f+" "+l;
		alert(alertm);
	})
}
