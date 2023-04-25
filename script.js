function insert_Row() {
    //Write your code here
  var table = document.querySelector("#sampleTable");
	var x = table.innerHTML;
	var row = document.createElement("tr");
	row.innerHTML =  "<td>New Cell1</td><td>New Cell2</td>";
	table.insertBefore(row,table.firstChild)
}
