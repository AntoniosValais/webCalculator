/**
 * Created by Joyce on 27/10/2015.
 */
var flag=false;

function changingVisibilityOfButtons() {
    if (document.getElementById("extras").style.visibility == "hidden") {
        document.getElementById("extras").style.visibility = "visible";

        flag = true;

    }
    else {
        document.getElementById("extras").style.visibility = "hidden";
        document.getElementById("inner_container").style.height = "550px";

        flag = false;
    }
}