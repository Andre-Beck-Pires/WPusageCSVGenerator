

function writeCsv(){
    alert(dateRange);
    downloadCSV(headers, "sample.csv");
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
