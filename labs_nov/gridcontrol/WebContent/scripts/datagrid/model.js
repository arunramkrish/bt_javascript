var datagrid = datagrid || {};
datagrid.model = {
	loadData : function(descriptor, callback) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if ((xhr.status >= 200) && (xhr.status < 300)) {
					var response = JSON.parse(xhr.responseText);
					
					//convert server returned data into model for grid view
					var adapter = descriptor.modelAdapter;
					var gridModel = adapter(response);
					
					//callback with the converted data
					callback(gridModel);
				}
			}
		};
		
		xhr.open("GET", descriptor.dataUrl, true);
		xhr.send(null);
	}
};
