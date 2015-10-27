var  prod = [];

function input(elements) {
    var  newInputs = elements.innerHTML;
    var  currentProd = prod;

    prod.push(newInputs);
    prod = funckChecker(currentProd);
    var result = "";
    for (var i = 0; i < prod.length; i++){
        result += prod[i];
    }
    document.getElementById("screen").innerHTML = result;
}

function clearAll() {
    document.getElementById("screen").innerHTML = "";
    prod = [];
}


/*
Made by Tania

Dexetai enan pikana opou an sti teleytai thesi brisketai mathimatiki sinartisi
tote bazei tin sinartisi stin arxi tou pinaka,an stin proteleutai thesi iparxei parenthesi
tote kanei append tin sinartisi. 

@param inputArray   Pinakas me input
output ton allagmeno pinaka

*/
function funckChecker(inputArray){
	
	var lastInput = inputArray[inputArray.length-1];
	var funcButtons = document.getElementsByClassName("mathFunc");
	
	for(var i=0;i<funcButtons.length;i++)
	{
		if(lastInput === funcButtons[i].innerHTML)
		{
			if(inputArray.length === 1)
			{	//an sinartisi einai to proto input pou dothike
				inputArray[inputArray.length-1] = lastInput+"(";
			}else{	
					if(inputArray[inputArray.length-2].match(/[^0-9\)]/))
					{	//an prin tin sinartisi einai otidipote ekstos apo arithmous
						//kai ) tote kane append tin sinartisi
						inputArray[inputArray.length-1] = lastInput+"(";
					}else{
						//allios pane tin sinartisi stin arxi kai kleise parenthesi
						inputArray.pop();
						inputArray.unshift(lastInput+"(");
						inputArray.push(")");
					}
			}
		}
	}
	
	return inputArray;
}