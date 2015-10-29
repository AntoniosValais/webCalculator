var controller = new CalculatorController();

function CalculatorController()
{
    this.prod = [];
    this.newInput = null;
    this.result = 0;
    this.firstCalculatorScreenCharacterSizeLimit = 14;
    this.totalCalculatorScreenCharacterSizeLimit = 22;

    this.receiveInputFrom = function receiveInputFrom( element )
    {
        this.newInput = element.title;

        if( this.newInput == '=')
        {
            try
            {
                this.result = math.eval( this.prod.join("") );
                this.prod = [];
                this.prod = this.result.toString().split("");
                this.checkIfScreenSizeNeedsToExpand();
                document.getElementById("screen").innerHTML = this.result.toString();
            }
            catch(e)
            {
                this.checkIfScreenSizeNeedsToExpand();
                document.getElementById("screen").innerHTML = "Expression Error!!!";
            }
            return;
        }

        if( this.prod.join("").length > this.totalCalculatorScreenCharacterSizeLimit )
        {
            return;
        }

        this.checkIfScreenSizeNeedsToExpand();

        this.prod.push( this.newInput );

        this.funckChecker();

        this.result = "";

        for (var i = 0; i < this.prod.length; i++)
        {
            this.result += this.prod[i];
        }

        document.getElementById("screen").innerHTML = this.result.toString();
    };

    /*
     Made by Tania

     Dexetai enan pikana opou an sti teleytai thesi brisketai mathimatiki sinartisi
     tote bazei tin sinartisi stin arxi tou pinaka,an stin proteleutai thesi iparxei parenthesi
     tote kanei append tin sinartisi.

     */
    this.funckChecker = function funckChecker()
    {
        var lastInput = this.prod[ this.prod.length - 1 ];
        var funcButtons = document.getElementsByClassName("mathFunc");

        for ( var i = 0; i < funcButtons.length; i++ )
        {
            if ( lastInput === funcButtons[i].title )
            {
                if( this.prod.length === 1 )
                {	//an sinartisi einai to proto input pou dothike
                    this.prod[ this.prod.length - 1 ] = lastInput + "(";
                }
                else
                {
                    if ( this.prod[ this.prod.length - 2 ].match( /[^0-9\)\'pi']/ ) )
                    {	//an prin tin sinartisi einai otidipote ekstos apo arithmous
                        //kai ) tote kane append tin sinartisi
                        this.prod[ this.prod.length - 1 ] = lastInput + "(";
                    }
                    else
                    {
                        //allios pane tin sinartisi stin arxi kai kleise parenthesi
                        this.prod.pop();
                        this.prod.unshift(lastInput + "(");
                        this.prod.push(")");
                    }
                }
            }
        }
    };

    this.clearAll = function clearAll()
    {
        document.getElementById("screen").innerHTML = "";
        this.prod = [];
        this.checkIfScreenSizeNeedsToExpand();
    };

    this.reduceScreenCharacterFontSize = function reduceScreenCharacterFontSize()
    {
        document.getElementById("screen").style.fontSize = "20px";
    };

    this.restoreScreenCharacterFontSize = function restoreScreenCharacterFontSize()
    {
        document.getElementById("screen").style.fontSize = "30px";
    };

    this.checkIfScreenSizeNeedsToExpand = function checkIfScreenSizeNeedsToExpand()
    {
        if( this.prod.join("").length > this.firstCalculatorScreenCharacterSizeLimit )
        {
            this.reduceScreenCharacterFontSize();
        }
        else
        {
            this.restoreScreenCharacterFontSize();
        }
    };
}
/*
function input(elements)
{
    var newInputs = elements.title;
    var currentProd = prod;

    if( newInputs == '=')
    {
        try
        {
            var result = math.eval( currentProd.join(""));
            document.getElementById("screen").innerHTML = result;
        }
        catch(e)
        {
            document.getElementById("screen").innerHTML = "Expression Error!!!";
        }
        return;
    }

    prod.push(newInputs);
    prod = funckChecker(currentProd);
    var result = "";
    for (var i = 0; i < prod.length; i++)
    {
        result += prod[i];
    }
    document.getElementById("screen").innerHTML = result;
}

function clearAll()
{
    document.getElementById("screen").innerHTML = "";
    prod = [];
}
*/

/*
 Made by Tania

 Dexetai enan pikana opou an sti teleytai thesi brisketai mathimatiki sinartisi
 tote bazei tin sinartisi stin arxi tou pinaka,an stin proteleutai thesi iparxei parenthesi
 tote kanei append tin sinartisi.

 @param inputArray   Pinakas me input
 output ton allagmeno pinaka

 */

/*
function funckChecker(inputArray)
{

    var lastInput = inputArray[inputArray.length - 1];
    var funcButtons = document.getElementsByClassName("mathFunc");

    for (var i = 0; i < funcButtons.length; i++)
    {
        if (lastInput === funcButtons[i].title)
        {
            if(inputArray.length === 1)
            {	//an sinartisi einai to proto input pou dothike
                inputArray[inputArray.length - 1] = lastInput + "(";
            }
            else
            {
                if ( inputArray[inputArray.length - 2].match( /[^0-9\)\'pi']/ ) )
                {	//an prin tin sinartisi einai otidipote ekstos apo arithmous
                    //kai ) tote kane append tin sinartisi
                    inputArray[inputArray.length - 1] = lastInput + "(";
                }
                else
                {
                    //allios pane tin sinartisi stin arxi kai kleise parenthesi
                    inputArray.pop();
                    inputArray.unshift(lastInput + "(");
                    inputArray.push(")");
                }
            }
        }
    }

    return inputArray;
}
*/