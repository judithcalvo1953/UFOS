// from data.js
const tableData = data;
// get table references
var tbody = d3.select("tbody");
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}
//CHALLENGE AREA keep track of all filters--Date, City, State, Country and Shape
let filters ={};

function updateFilters() {
  //save the element, value and id of the filter that was changed
let grabme = d3.select(this);
let elementid = grabme.attr("id");
let values=grabme.property("value");
  //If a filter values was entered into input box then add that filterId and value
//call function to apply all filters and rebuild the table
//filterTable(updateFilters);
//let date = d3.select("#datetime").property("value");
//others go here
if(values !="") {
  filters[elementid]= values;
}
else{
  delete filters[elementid];
}
filterTable();}

function filterTable() {
//set the filteredData to the tableData
var filterdata=tableData;
Object.entries(filters).forEach(([key, value])=>{
  filterdata=filterdata.filter(row=>row[key]===value)
})
//call function fo apply all filters and rebuild the data
buildTable(filterdata);

}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", updateFilters);
// Build the table when the page loads
buildTable(tableData);
