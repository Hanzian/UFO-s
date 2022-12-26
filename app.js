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
  // set handClick Function
  function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#cityInput").property("value");
  let state = d3.select("#stateInput").property("value");
  let country = d3.select("#countryInput").property("value");
  let shape = d3.select("#shapeInput").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  };

  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  };

  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  };

  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    handleClick();
  }
});

// Build the table when the page loads
buildTable(tableData);