/*
Populates HTML element with id as containerId with a HTML table. Table has columns from properties present in the first element of tableData. Each record in tableData should correspond to row

containerId : String id of the div or html container
TableData : Array of javascript objects
*/
function Datatable(containerId, tableData) {
    
    //get the container element
    var container = document.getElementById(containerId);
    
    //create html table element
    var tableElement = document.createElement("table");
    
    //use HTMLTableElement API to insert row / header
    var header = tableElement.createTHead();
    var row = tableElement.insertRow();
    
    //iterate thro prop names in the first record of table data and create columns
    for (property in tableData[0]){
        var cell = row.insertCell();
        cell.innerHTML = property;
        cell.classList.add("datatable-theader", "datatable-cell");
    }
    
    //for each record in tableData insert row in table element 
    for(var recordIndex=0;recordIndex<tableData.length;recordIndex++) {
        var record = tableData[recordIndex];
        // for each field in the current record, populate cell text
        var recordRow = tableElement.insertRow();
        for (property in record){
            var cell = recordRow.insertCell();
            cell.innerHTML = record[property];
            cell.classList.add("datatable-td", "datatable-cell");
        }   
    }
    
    //append table element to container
    container.appendChild(tableElement);
}