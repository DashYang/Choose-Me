//insert renrenscript to target html
function insertRenRen(){
	chrome.tabs.executeScript({
    code: 
	"var inscript = document.createElement('script');inscript.type='text/javascript';inscript.src='http://widget.renren.com/js/forward.js';inscript.async = 'true';var head = document.getElementsByTagName('head')[0];head.appendChild(inscript);"
  });
}

//check for the ratio
function check(){
	var info = document.getElementById("info");
	var inputs = document.getElementsByTagName('input');
	var choose = this.value;
	info.innerHTML = choose;
	if(choose == 'renren')
		insertRenRen();
}

//add listener to the ration
document.addEventListener('DOMContentLoaded', function () {
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', check);
  }
});
