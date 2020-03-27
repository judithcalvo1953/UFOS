// import the data from data.js
const tableData = data;
// Reference the html table using d3
var tbody = d3.select ("tbody");
function buildtable(data) {
    //first clear out any existing data
    tbody.html("");
    //Next, loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");
        //Loop through each filed in the dataRow and add
        // each value as a table cell (td)
    Object.values(dataRow).forEach((val)=> {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}
function handleClick() {
    //Grab the datatime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if a date was entered and filter the
    // data using that date.
    //apply 'filter method to the table data to only keep the
    //row where the 'datetime' value matcheds the filter value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //rebuild the table using the filtered data
    //@Note : If no date ws entered, then filteredData will
    //just be the original tableData. here call the buildtable function with
    //filtered data
    buildtable(filteredData);
}
//Attach an event to listen for the form button to be clicked on
d3.selectAll("filter-btn").on("click", handleClick);
//Build the table when the page loads
buildtable(tableData);




