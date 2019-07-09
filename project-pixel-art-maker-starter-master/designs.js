// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

    // here we add this to prevent the reload  of the page
    event.preventDefault();
    
    // set the variables
    var tableHeight = document.getElementById("inputHeight").value;
    var tableWidth = document.getElementById("inputWidth").value;
    var tableCanvas = document.getElementById("pixelCanvas");

    //clear table
    tableCanvas.innerHTML = "";

    //make rows and cells
    for (var a = 0; a < tableHeight; a++) {
        var tableRow = document.createElement("tr");
        for (var b = 0; b < tableWidth; b++) {
            var cell = document.createElement("td");
            tableRow.appendChild(cell);
        }
        tableCanvas.appendChild(tableRow);
    }
}

function colorCell(event) {
    //select color
    if (event.target.nodeName == "TD") {
        var chosenColor = document.getElementById("chosenColor").value;
        event.target.style.backgroundColor = chosenColor;
    }
}