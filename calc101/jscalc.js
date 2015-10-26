/**
 * Created by Neo on 10/25/2015.
 */
var numb1,numb2,operFlag;
var calculate = function(numb1,numb2,operFlag){
    var result;
    if(operFlag ==('+')){
        result = numb1 + numb2;
    }
    else if(operFlag ==('-')){
        result = numb1 - numb2;
    }
    else if(operFlag ==('*')){
        result = numb1 * numb2;
    }
    else if(operFlag ==('/')){
        result = numb1 / numb2;
    }
    return result;
}

var input = function(x) {
    if (x == 'C') {
        document.getElementById("screen").innerHTML = "";
    }
    else if (x == '+') {
        numb1 = document.getElementById("screen").innerHTML;
        document.getElementById("screen").innerHTML = x;
        operFlag = '+';
    }
    else if (x == '-') {
        numb1 = document.getElementById("screen").innerHTML;
        document.getElementById("screen").innerHTML = x;
        operFlag = '-';
    }
    else if (x == '*') {
        numb1 = document.getElementById("screen").innerHTML;
        document.getElementById("screen").innerHTML = x;
        operFlag = '*';
    }
    else if (x == '/') {
        numb1 = document.getElementById("screen").innerHTML;
        document.getElementById("screen").innerHTML = x;
        operFlag = '/';
    }
    else if (x == '=') {
        numb2 = document.getElementById("screen").innerHTML;
        result = calculate(numb1, numb2, operFlag);
        document.getElementById("screen").innerHTML = result;
    }
    else if (x == '0' || x == '1'|| x == '2'|| x == '3'|| x == '4'|| x == '5'|| x == '6'|| x == '7'|| x == '8'|| x == '9') {
        if(document.getElementById("screen").innerHTML !== '*' || '+' || '-' || '/' || '=')
        {document.getElementById("screen").innerHTML += x;}
        else
            document.getElementById("screen").innerHTML += x;
    }

};