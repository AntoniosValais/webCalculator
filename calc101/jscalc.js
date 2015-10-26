/**
 * Created by Neo on 10/25/2015.
 */

var operationOrder = ['*','/','+','-'];
var insertedExpression = [];
var insertedExpressionIndex = -1;
var number = new CalculatorNumber();

function clearExpression()
{
    insertedExpression = [];
    insertedExpressionIndex = -1;
    number = new CalculatorNumber();
}
function CalculatorNumber()
{
    this.totalNumber = 0.0;
    this.insertingIntegerDigit = true;

    this.lastDecimalDigitPosition = 1;

    this.receiveIntegerDigit = function receiveIntegerDigit( receiveDecimalDigit )
    {
        this.insertingIntegerDigit = receiveDecimalDigit;
    };

    this.addLeastSignificantDigit = function addLeastSignificantDigit( digit )
    {
        if( this.insertingIntegerDigit )
        {
            this.addIntegerLeastSignificantDigit( digit );
        }
        else
        {
            this.addDecimalLeastSignificantDigit( digit );
        }
    };

    this.addIntegerLeastSignificantDigit = function addIntegerLSD( integerLeastSignificantDigit )
    {
        this.totalNumber = this.totalNumber * 10 + integerLeastSignificantDigit;
    };

    this.addDecimalLeastSignificantDigit = function addDecimalLSD( decimalLeastSignificantDigit )
    {
        var decimalToBeAdded = decimalLeastSignificantDigit / Math.pow(10, this.lastDecimalDigitPosition);

        this.totalNumber += decimalToBeAdded;

        this.lastDecimalDigitPosition++;
    };

    this.getNumber = function getNumber()
    {
        return this.totalNumber;
    }
}

function compute( argument1, argument2, operation )
{
    switch( operation )
    {
        case '*':

            return argument1 * argument2;

            break;

        case '/':

            if( argument2 == 0 )
            {
                return Number.POSITIVE_INFINITY;
            }
            else
            {
                return argument1 / argument2;
            }

            break;

        case '+':

            return argument1 + argument2;

            break;

        case '-':

            return argument1 - argument2;

            break;
    }
}

function getExpressionResult()
{
    var operationIndex;
    var element;

    var argument1, argument2;

    outterLoop:  for( operationIndex = 0; operationIndex < operationOrder.length; operationIndex++ )
    {
        var operation = operationOrder[ operationIndex ];

        for( element = 0; element < insertedExpression.length; element++ )
        {
            if( insertedExpression[ element ] == operation )
            {
                argument1 = insertedExpression[ element - 1 ];
                argument2 = insertedExpression[ element + 1 ];

                var result = compute( argument1, argument2, operation );

                if( result == Number.POSITIVE_INFINITY )
                {
                    insertedExpression = [];
                    insertedExpression[0] = result;
                    break outterLoop;
                }

                insertedExpression.splice( (element-1), 3, result );

                element--;
            }
        }
    }

    return insertedExpression[0];
}


function newInput(element)
{
    var input = element.innerHTML;

    switch (input)
    {
        case 'C':
            clearExpression();
            break;

        case '.':

            number.receiveIntegerDigit( false );

            break;

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':

            number.addLeastSignificantDigit( parseInt( input ) );

            if ( isNaN( insertedExpression[ insertedExpressionIndex ] ) )
            {
                insertedExpression[ ++insertedExpressionIndex ] = number.getNumber();
            }
            else
            {
                insertedExpression[ insertedExpressionIndex ] = number.getNumber();
            }

            break;

        case '*':
        case '/':
        case '+':
        case '-':
            number = new CalculatorNumber();

            insertedExpression[ ++insertedExpressionIndex ] = input;
            break;
    }

    if( input == '=' )
    {
        var result = getExpressionResult().toString();

        clearExpression();

        document.getElementById("screen").innerHTML = result;
    }
    else
    {
        document.getElementById("screen").innerHTML = " ";
        document.getElementById("screen").innerHTML = insertedExpression.join("");
    }
}