function validateForm(){
	if(document.querySelector("#fname").value==""){
		alert("First name is required");
		return false;
	}
	if(document.querySelector("#lname").value==""){
		alert("Last name is required");
		return false;
	}
	return true;
}
