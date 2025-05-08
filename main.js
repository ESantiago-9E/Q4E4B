function displayProductCategory() {
	var levelEntry = document.getElementById('categoryEntry').value;
	
	switch (prodCategory){
	  case "C": 
		document.getElementById("displayCategory").innerHTML = 
		"Category: Clothing";

	  case 2 
		document.getElementById("displayCategory").innerHTML = 
		"Category: Electronics";

	  case 3
	 	document.getElementById("displayCategory").innerHTML = 
		"Category: Books";

	default:
		window.alert("Invalid Section Number")
	}
}