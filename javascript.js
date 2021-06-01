function changeColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    document.getElementById("title").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
    console.log("clicked");
}

var words = ["Javascript", "Accessibilty", "Back End", "Banwidth", "For Loop", "Java", "C++", "Browser", "CSS", "Comment"]
function changeWord() {
    var randNum = Math.floor(Math.random() * words.length);
    document.getElementById("title").innerText = words[randNum];
    console.log("clicked");
}

function addWord() {
    if (document.getElementById("text-submit").value == "") {
        
    }
    else {
    var newWord = document.getElementById("text-submit").value;
    words.push(newWord);
    document.getElementById("title").innerText = newWord;
    document.getElementById("text-submit").value = "";
    }
}

