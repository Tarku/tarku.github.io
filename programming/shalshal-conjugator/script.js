var endings = {
    "human":{
        // Non-Past
        "prog_present":"taik¹³",
        "near_future":"taiɬ¹³",
        "iter_future":"tail¹³",
        "gnomic":"tai¹³-qʼa³",
        // Past
        "semel_past":"ɕaɕ³",
        "near_past":"ɕat³",
        "prog_past":"ɕatʰ³",
        "habit_past":"ɕax³",
        "rem_past":"ɕakʷ³"
    },
    "animate":{
        // Non-Past
        "prog_present":"tak³",
        "near_future":"taɬ³",
        "iter_future":"tal³",
        "gnomic":"ta³-qʼa³",
        // Past
        "semel_past":"taɕ³¹",
        "near_past":"tat³¹",
        "prog_past":"tatʰ³¹",
        "habit_past":"tax³¹",
        "rem_past":"takʷ³¹"
    },
    "inanimate":{
        // Non-Past
        "prog_present":"teuk³¹",
        "near_future":"teuɬ³¹",
        "iter_future":"teul³¹",
        "gnomic":"teu³-qʼa³¹",
        // Past
        "semel_past":"taɕ³¹",
        "near_past":"tat³¹",
        "prog_past":"tatʰ³¹",
        "habit_past":"tax³¹",
        "rem_past":"takʷ³¹"
    },
    "abstract":{
        // Non-Past
        "prog_present":"teuk³¹",
        "near_future":"teuɬ³¹",
        "iter_future":"teul³¹",
        "gnomic":"teu³-qʼa³¹",
        // Past
        "semel_past":"taɕ³¹",
        "near_past":"tat³¹",
        "prog_past":"tatʰ³¹",
        "habit_past":"tax³¹",
        "rem_past":"takʷ³¹"
    }
}
var derom = {
    "1":"¹",
    "3":"³",
    "s":"s",
    "lh":"lh",
    "'": "ʼ",
    "rh":"rh",
    "th":"th",
    "kh":"kh",
    "kw":"kw",
    "qw":"qw",
    "e":"e",
    "u":"u",
}

function updateValue()
{

    var verb = document.getElementById("verb").value

    var gend_human = document.getElementById("human").checked
    var gend_anim = document.getElementById("animate").checked
    var gend_inan = document.getElementById("inanimate").checked
    var gend_abstr = document.getElementById("abstract").checked

    var gender = "";

    var tense = document.getElementById("tense").value

    var result = document.getElementById("result")

    if (gend_human)
    {
        gender = "human"
    } else if (gend_anim)
    {
        gender = "animate"
    } else if (gend_inan)
    {
       gender = "inanimate"
    } else if (gend_abstr)
    {
       gender = "abstract"
    }

    for(var i in derom)
    {
        verb = verb.replaceAll(i,derom[i])
    }

    if(verb != "")
    {
        result.innerHTML = verb + "-" + endings[gender][tense]
    } else {
        result.innerHTML = "-"
    }
}

setInterval(updateValue, 100);