/**
 * Created by Neo on 10/27/2015.
 */
var expand = function() {
    var status = document.getElementById("extras").style.display;
    if(status !== "none") {
        document.getElementById("extras").style.display = "none";
        document.getElementById("inner_container").style.height = "";
        document.getElementById("breakline").style.display = "none";
    }
    else
    {
        document.getElementById("extras").style.display = "block";
        document.getElementById("inner_container").style.height = "550px";
        document.getElementById("breakline").style.display = "block";
    }
}