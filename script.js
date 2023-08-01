
function generateCSV(dateRange, headersContent, rowsContent, bottomContent) {
    // Create the CSV content
    let csvContent = "Date Range: " + dateRange + "\n\n";
    csvContent += headersContent.join(",") + "\n";
  
    // Add the rows content and split into 8 cells per row
    for (let i = 0; i < rowsContent.length; i += headersContent.length) {
      const row = rowsContent.slice(i, i + headersContent.length);
      const splitRow = [];
      for (let j = 0; j < row.length; j += 8) {
        splitRow.push(row.slice(j, j + 8).join(","));
      }
      csvContent += splitRow.join("\n") + "\n";
    }
  
    // Add the bottom content
    csvContent += "\n" + bottomContent.join(",") + "\n";
  
    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: "text/csv" });
  
    // Generate the URL for the Blob
    const url = URL.createObjectURL(blob);
  
    // Create a temporary anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = dateRange.replace("/", "-").replace(" ", "_") + ".csv";
  
    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
  
    // Clean up the temporary anchor element
    document.body.removeChild(downloadLink);
  }





var dateRange = document.getElementsByClassName("mat-input-element")[0].value; //get the date range

var headers = document.getElementsByClassName("mat-header-row")[0].querySelectorAll("th");
var headersContent = [];
for(let i =0; i<headers.length; i++){
    headersContent[i] = headers[i].innerText;
}//get the readers from the table


var trs = document.getElementsByClassName("main-container")[0].querySelectorAll("tr");
var bottom = trs[trs.length-1];
bottom = bottom.querySelectorAll("td");
var bottomContent = [];
for(let i =0; i<bottom.length; i++){
    bottomContent[i] = bottom[i].innerText;
}//get the totals


var rows = document.getElementsByClassName("cdk-row");
var rowsContent = [];
for(let i = 0; i < rows.length; i++)
{ 
    iterator = 8 * i;
    for(let j =0; j < rows[i].querySelectorAll("td").length; j++)
    {
        rowsContent[j+iterator] = rows[i].querySelectorAll("td")[j].innerText; 
    }
   
}//table content

generateCSV(dateRange, headersContent, rowsContent, bottomContent);