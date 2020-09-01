// JavaScript Document
 
function convertTemp() {
	var c = document.getElementById('c'), f = document.getElementById('f');
	
	if(c.value != '') {
		f.value = Math.round(c.value * 9 / 5 + 32);
		c.value = '';
	} else {
		c.value = Math.round((f.value - 32) * 5 / 9);
		f.value = '';
	}
}

