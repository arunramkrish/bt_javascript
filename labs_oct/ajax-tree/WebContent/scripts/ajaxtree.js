function submitNode(form) {
	var inputs = form.elements;
	var formObject = new Object();

	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].type == "text") {
			formObject[inputs[i].id] = inputs[i].value;
		}
	}
	
	console.log(JSON.stringify(formObject));
	
	postRequest(formObject);
}

function postRequest(data) {
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var responseObject = JSON.parse(xhr.responseText);
				data.id = responseObject["id"];
				refreshTreeGrid(data);
			}
		}
	};
	
	xhr.open("POST", "tree", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(data));
}

function refreshTreeGrid(newNode) {
	var tableID = "tree-grid";
	
	// Get a reference to the table
	  var tableRef = document.getElementById(tableID);

	  // Insert a row in the table at row index 0
	  var newRow   = tableRef.insertRow(1);

	  // Insert a cell in the row at index 0
	  var newCell  = newRow.insertCell(0);
	  // Append a text node to the cell
	  var newText  = document.createTextNode(newNode["parent"]);
	  newCell.appendChild(newText);
	  
	// Insert a cell in the row at index 0
	  newCell  = newRow.insertCell(0);
	  // Append a text node to the cell
	  newText  = document.createTextNode(newNode["content"]);
	  newCell.appendChild(newText);
	  
	// Insert a cell in the row at index 0
	  newCell  = newRow.insertCell(0);
	  // Append a text node to the cell
	  newText  = document.createTextNode(newNode["name"]);
	  newCell.appendChild(newText);
}