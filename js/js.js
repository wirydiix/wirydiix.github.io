$("#draggable").draggable();
$("#chat").draggable();


var RPbtm = document.getElementById("RP-btm");
var NRPbtm = document.getElementById("NRP-btm");
var PMbtm = document.getElementById("PM-btm");
var Helpbtm = document.getElementById("Help-btm");


var RP = document.getElementById("RP");


var closeRpBtn = document.getElementById("button-close-rp");

RPbtm.onclick = function() {
    	RP.classList.remove("hiden");
    }
closeRpBtn.onclick = function() {
    	RP.classList.add("hiden");
    }