function display_paragraph() {
    var sentences = [];
    for (var i = 1; i <= 6; i++) {
        sentences.push(document.getElementById("no" + i).value);
    }
    document.getElementById("DisplayParagraph1").innerHTML=sentences.join(". ");
}

function display_paragraph2() {
    var sentences = [];
    for (var i = 1; i <= 6; i++) {
        sentences.push(document.getElementById("n" + i).value);
    }
    document.getElementById("DisplayParagraph2").innerHTML=sentences.join(". ");
}