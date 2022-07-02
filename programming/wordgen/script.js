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
    var syllableStructure = document.getElementById("syllable_structure").value;
    var definitions = document.getElementById("syllable_definitions").value;
    var result = document.getElementById("wordgen_result");
    var iterationNumber = document.getElementById("iteration_number").value;

    result.innerHTML = "";
    
    parseSyllables(syllableStructure);
    
    var splitDefinitions = definitions.split("\n");


    for (var defLine in splitDefinitions)
    {
        parseAbbrDefinitions(splitDefinitions[defLine]);
    }

    for (var i = 0; i < iterationNumber; i++)
    {
        result.innerHTML += generateSyllables() + "\n";
    }
    
}