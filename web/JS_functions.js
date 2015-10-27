/**
 * Created by ToNio on 25/10/2015.
 */
function alertFunction()
{
    window.alert("Hello!");
}

function writeFunction()
{
    document.getElementById("text").innerHTML = "2909";
}

function consoleFunction()
{
    console.log(10 + 2);
}

function mathFunction(x)
{
    var y = Math.sin(x);

    document.getElementById("text").innerHTML = y;
}

function equalFunction()
{
    document.getElementById("text").innerHTML = "\"5\" === 5 ->" + ("5" === 5)
        + " BUT " +
        "\"5\" == 5 ->" + ("5" == 5);
}

function objectFunction()
{
    var Person =
    {
        firstName: "Antonios",
        lastName: "Valais",
        getFullName: function(AEM)
        {
           return this.firstName +" "+ this.lastName + ": "+ AEM;
        }

    }

    document.getElementById("text").innerHTML = Person.getFullName(2909);
}

function printTheFunction()
{
    document.getElementById("text").innerHTML = printTheFunction;
}

function referenceFunction(element)
{
    element.innerHTML = "You clicked the text"
}

function arrayFunction(element)
{
    var person = [];

    person.push("Antonios");
    person[1] = "Valais";
    person.push(2909);
    person[ person.length ] = 26;


    var text = person.join(" ");

    element.innerHTML = text;
}

function typeConversionFunction()
{
    var x = "5";
    var y = 10;

    document.getElementById("text3").innerHTML = +"x"+y;
}
