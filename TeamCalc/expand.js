/**
 * Created by Neo on 10/27/2015.
 */
var expand = function() {

    var yourDiv = document.getElementById("shorten");
    var status = getComputedStyle(yourDiv).getPropertyValue("display");
    if(status == "none"){
        document.getElementById("extras").style.display = "block";
        document.getElementById("main_container").style.height = "750px";
        document.getElementById("button_container").style.height = "680px";
        document.getElementById("breakLine").style.display = "block";
        document.getElementById("expand").style.display = "none";
        document.getElementById("shorten").style.display = "block";
    }
    else{
        document.getElementById("extras").style.display = "none";
        document.getElementById("button_container").style.height = "";
        document.getElementById("main_container").style.height = "";
        document.getElementById("breakLine").style.display = "none";
        document.getElementById("expand").style.display = "block";
        document.getElementById("shorten").style.display = "none";
    }

}