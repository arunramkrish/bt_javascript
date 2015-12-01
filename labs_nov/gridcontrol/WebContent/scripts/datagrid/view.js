var datagrid = datagrid || {};
datagrid.view = {
	render : function(gridModel, container, descriptor) {
		var parent = document.getElementById(container);

		var titleTag = document.createElement("p");
		titleTag.innerHTML = gridModel.title;

		parent.appendChild(titleTag);

		var tableTag = document.createElement("table");
		parent.appendChild(tableTag);

		for (var i = 0; i < gridModel.rows.length; i++) {
			var row = tableTag.insertRow();

			var record = gridModel.rows[i];
			
			for (var c=0;c<descriptor.columnsToShow.length;c++) {
				var column = descriptor.columnsToShow[c];
				var colDescriptor = descriptor.columnDescriptor[column];
			
				var newCell = row.insertCell();
				newCell.innerHTML = colDescriptor.value(record);
			}
			
			row.addEventListener("click", createCallback(record, i));
/*			
			newCell = row.insertCell(0);
			newText = document.createTextNode(record.name);
			newCell.appendChild(newText);
			*/
		}
		
		function createCallback(record, i) {
			return function() {
				descriptor.rowClicked(record, i);
			};
		}
	}
	
};
