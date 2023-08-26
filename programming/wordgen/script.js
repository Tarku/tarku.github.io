const SYLLABLE_SEPARATOR = "\n";
const DEFINITION_SEPARATOR = "\n";

var syllables = []
var abbrDefinitions = {}

function parseSyllables(code)
{
    var separatedSyllables = code.split(SYLLABLE_SEPARATOR);
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

    for(let syl of randomSyllable)
    {
        if (syl == syl.toUpperCase())
        {
            var random2 = Math.floor(Math.random() * abbrDefinitions[syl].length);
            randomSyllable = randomSyllable.replace(syl, abbrDefinitions[syl][random2])
        } else {
            randomSyllable = randomSyllable.replace(syl, syl);
        }
        console.log(syl)
    }

    return randomSyllable;
}

function main()
{   
    let syllableStructure = document.querySelector("#syllable_structure").value;
    let definitions = document.querySelector("#syllable_definitions").value;

    let iterationNumber = document.querySelector("#iteration_number").value;
    let addNewline = document.querySelector("#output_newline").checked;

    let result = document.querySelector("#wordgen_result");
    
    result.innerHTML = "";
    
    parseSyllables(syllableStructure);
    
    var splitDefinitions = definitions.split(DEFINITION_SEPARATOR);


    for (var defLine in splitDefinitions)
    {
        parseAbbrDefinitions(splitDefinitions[defLine]);
    }

    for (var i = 0; i < iterationNumber; i++)
    {
        let outputSeparator = addNewline ? "\n" : " ";

        result.innerHTML += generateSyllables() + outputSeparator;
    }
    
}