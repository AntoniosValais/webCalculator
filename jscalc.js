var result;
function getElement(x){
    document.calc.view.value += x;
    result = result + x;
    if(x == 'C') {
        document.calc.view.value = '';
    }
    else if(x == '=') {
        document.calc.view.value = eval();
    }
}