var ref = 0;
var four = 0;

function addcanele(newColor) {
    ref = ref + 1+four;
    console.log("Vous avez  " , ref, " de canelés");
    var elem = document.getElementById('caneles');
    elem.style.color = newColor;
    elem.innerHTML= "Vous avez "+ ref +" canelés";
    if (ref >= 25){
        document.getElementById('four').disabled = false;
    }
    if (ref < 25){
        document.getElementById('four').disabled = true;
    }
}
function delcanele(newColor) {
    if (ref >= 25) {
        console.log("achat en cours, la valeur de canelés est " , ref);
        ref = ref - 25;
        var audio = document.getElementById('audio');
        audio.play();
        if (ref < 25){
            document.getElementById('four').disabled = true;
        }
        four = four+1;
        var elem = document.getElementById('caneles');
        elem.innerHTML = "Vous avez "+ ref +" caneléss";
        elem.style.color = newColor;
    } else {
        console.log("Vous avez  " , ref, " de canelés pas assez pour un four");
    }
}

