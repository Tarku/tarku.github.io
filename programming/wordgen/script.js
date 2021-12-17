var syllables = []
var abbrDefinitions = {}

function parseSyllables(code)
{
    var separatedSyllables = code.split(";");
    syllables = separatedSyllables;
}

function parseAbbrDefinitions(code)
{
    var separatedDefinition = code.split("=");
    var abbrName = separatedDefinition[0];
    var abbrDef = separatedDefinition[1];
    var splitAbbrDef = abbrDef.split(" ");

    abbrDefinitions[abbrName] = splitAbbrDef;
}

function generateSyllables()
{
    var random = Math.floor(Math.random() * syllables.length);
    var randomSyllable = syllables[random];

    for(let i of randomSyllable)
    {
        if (i == i.toUpperCase())
        {
            var random2 = Math.floor(Math.random() * abbrDefinitions[i].length);
            randomSyllable = randomSyllable.replace(i, abbrDefinitions[i][random2])
        } else {
            randomSyllable = randomSyllable.replace(i, i);
        }
        console.log(i)
    }

    return randomSyllable;
}

function main()
{   
    var syllableStructure = document.getElementById("sylstruct").value;
    var definitions = document.getElementById("syldef").value;
    var result = document.getElementById("result");
    var itergen = document.getElementById("itergen").value;

    result.innerHTML = "";
    
    parseSyllables(syllableStructure);
    
    var splitDefinitions = definitions.split("\n");


    for (var defLine in splitDefinitions)
    {
        parseAbbrDefinitions(splitDefinitions[defLine]);
    }

    for (var i = 0; i < itergen; i++)
    {
        result.innerHTML += generateSyllables() + "\n";
    }
    
}