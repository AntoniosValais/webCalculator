/**
 * Created by Joyce on 27/10/2015.
 */

var flag=false;

function changingVisibilityOfButtons() {

            if(document.getElementById("equals").style.visibility == "hidden") {
                document.getElementById("equals").style.visibility = "visible";
                flag = true;

            }
            else {
                document.getElementById("equals").style.visibility = "hidden";
                flag =false;
            }

}