function getFormvalue() {
    //Write your code here
	let form = document.getElementById("form1");
	form.addEvenetListener("submit",function(){
		const f = from.elements["fname"].value;
		const l = from.elements["lname"].value;

		const alertm = f+" "+l;
		alert(alertm);
	})
}
