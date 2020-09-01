// JavaScript Document
function isLeapYear() { 
var year = document.getElementById("year").value;  
document.getElementById("P").innerHTML = (year % 100 === 0) ? (year % 400 === 0): (year % 4 === 0); 
	
}