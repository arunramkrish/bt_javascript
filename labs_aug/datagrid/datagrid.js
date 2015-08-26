function DataGridListener() {
	function listenerImpl() {
	}
	listenerImpl.onHeaderClick = function(colIndex) {
		console.log("header " + colIndex + " clicked");
	};
	
	return listenerImpl;
}
function DataGrid(containerId, model, listener) {
	this.containerId = containerId;
	this.model = model;
	this.listener = listener;
	init(containerId, model, listener);
	
	function createCallback(listener, index) {
		return function() {
			listener.onHeaderClick(index);
		}
	}
	function init(containerId, model, listener) {
		var columns = model.getColumns();
		var rows = model.getRows();
		
		//get containerId element
		var parent = document.getElementById(containerId);
		
		//create table
		var tableElement = document.createElement("table");
		tableElement.className = "dg-table";
		parent.appendChild(tableElement);
		
		//create header with columns
		var header = tableElement.createTHead();
		var headerRow = header.insertRow();
		headerRow.className = "dg-header-row";
		//header.appendChild(headerRow);
		for (var colName in columns) {
			var headerCol = document.createElement("td");
			headerCol.innerHTML = columns[colName];
			headerRow.appendChild(headerCol);
			headerCol.className = "dg-header-cell";
			headerCol.onclick = createCallback(listener, colName);
		}
		
		//create rows for each row in the model
		for (var row in rows) {
			var dataRow = tableElement.insertRow();
			dataRow.className = "dg-row";
			for (var colName in columns) {
				var dataCol = document.createElement("td");
				dataCol.innerHTML = rows[row][columns[colName]];
				dataRow.appendChild(dataCol);
				dataCol.className = "dg-cell";
			}
		}
	
	}
}