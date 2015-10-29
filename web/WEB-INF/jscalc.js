/**
 * Created by Neo on 10/25/2015.
 */
var operators = ['*' , '/' , '+' , '-'];

/*var input = function(x){
if(x=="Clear"){
    document.Calc.Screen.value="";
}
else
    document.Calc.Screen.value += x;
};
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

var newinput = function(x) {
    if (x == 'C') {
        document.Calc.Screen.value = "";
    }
    else if (x == '+') {
        numb1 = document.Calc.Screen.value;
        document.Calc.Screen.value = x;
        operFlag = '+';
    }
    else if (x == '-') {
        numb1 = document.Calc.Screen.value;
        document.Calc.Screen.value = x;
        operFlag = '-';
    }
    else if (x == '*') {
        numb1 = document.Calc.Screen.value;
        document.Calc.Screen.value = x;
        operFlag = '*';
    }
    else if (x == '/') {
        numb1 = document.Calc.Screen.value;
        document.Calc.Screen.value = x;
        operFlag = '/';
    }
    else if (x == '=') {
        numb2 = document.Calc.Screen.value;
        result = calculate(numb1, numb2, operFlag);
        document.Calc.Screen.value = result;
    }

    else if (x == '0', '1', '2', '3', '4', '5', '6', '7', '8', '9') {
        if(document.Calc.Screen.value !== '*' || '+' || '-' || '/' || '=')
        {document.Calc.Screen.value += x;}
        else
        document.Calc.Screen.value = x;
    }

};