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
			if(inputArray[inputArray.length-2] === "(")
			{
				inputArray[inputArray.length-1] = lastInput+"(";
			}else{
				inputArray.pop();
				inputArray.unshift(lastInput+"(");
			}
			
		}
	}
	
	return inputArray;
}