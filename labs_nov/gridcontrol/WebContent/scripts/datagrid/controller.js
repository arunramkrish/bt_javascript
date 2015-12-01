var datagrid = datagrid || {};
datagrid.controller = datagrid.controller || {};

datagrid.controller.GridControl = function(container, descriptor) {
	var model = datagrid.model;
	var view = datagrid.view;
	
	model.loadData(descriptor, loadView);
	
	function loadView(data) {
		view.render(data, container, descriptor);
	}
};