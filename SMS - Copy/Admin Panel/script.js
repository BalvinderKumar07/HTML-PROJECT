
var div = document.getElementById("link");
var open = document.getElementById("open");
var close = document.getElementById("close");

function menuopen(){
    div.style.display = "block" 
    open.style.display = "none" 
    close.style.display = "block"
}
function menuclose(){
    div.style.display = "none" 
    open.style.display = "block" 
    close.style.display = "none"
}