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