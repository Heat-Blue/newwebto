let count = 0;
document.getElementById("increasebtn").onclick = function(){
    count += 1;
    document.getElementById("inclabel").innerHTML = count;

}
document.getElementById("decreasebtn").onclick = function(){
    count -= 1;
    document.getElementById("inclabel").innerHTML = count;

}
document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("inclabel").innerHTML = count;

}