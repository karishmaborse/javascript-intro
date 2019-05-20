// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#get the data from the ufo dataset");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
});