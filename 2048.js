window.onload = function () {
    this.newGame();
    this.changeCSS();
    $(document).keydown(function (event) {
        switch (event.keyCode) {
            case 37: {
                if (left()) {
                    // var emptyBox = document.getElementsByClassName("empty");
                    // if (emptyBox.length > 1) {
                    //     setTimeout(function () { createNewNumber(); createNewNumber(); changeCSS(); }, 222);
                    // } else if (emptyBox.length == 1) {
                    //     setTimeout(function () { createNewNumber(); changeCSS(); }, 222);
                    // }
                    setTimeout(function () { createNewNumber(); changeCSS(); }, 222);
                    winOrLose();
                }
                // changeCSS();

                break;
            }
            case 38: {
                if (up()) {
                    // var emptyBox = document.getElementsByClassName("empty");
                    // if (emptyBox.length > 1) {
                    //     setTimeout(function () { createNewNumber(); createNewNumber(); changeCSS(); }, 222);
                    // } else if (emptyBox.length == 1) {
                    //     setTimeout(function () { createNewNumber(); changeCSS(); }, 222);
                    // }
                    setTimeout(function () { createNewNumber(); changeCSS(); }, 222);
                    winOrLose();
                }
                // changeCSS();

                break;
            }
            case 39: {
                if (right()) {
                    // var emptyBox = document.getElementsByClassName("empty");
                    // if (emptyBox.length > 1) {
                    //     setTimeout(function () { createNewNumber(); createNewNumber(); changeCSS(); }, 222);
                    // } else if (emptyBox.length == 1) {
                    //     setTimeout(function () { createNewNumber(); changeCSS(); }, 222);
                    // }
                    setTimeout(function () { createNewNumber(); changeCSS(); }, 222);
                    winOrLose();
                }
                // changeCSS();

                break;
            }
            case 40: {
                if (down()) {
                    // var emptyBox = document.getElementsByClassName("empty");
                    // if (emptyBox.length > 1) {
                    //     setTimeout(function () { createNewNumber(); createNewNumber(); changeCSS(); }, 222);
                    // } else if (emptyBox.length == 1) {
                    //     setTimeout(function () { createNewNumber(); changeCSS(); }, 222);
                    // }
                    setTimeout(function () { createNewNumber(); changeCSS(); }, 222);
                    winOrLose();
                }
                // changeCSS();

                break;
            }
            default: break;
        }

    })
}

function newGame() {
    var boxArray = document.getElementsByClassName("box");
    for (var i = 0; i < boxArray.length; i++) {
        if (boxArray[i].classList.contains("nonempty")) {
            boxArray[i].innerHTML = "";
            boxArray[i].classList.remove("nonempty");
            boxArray[i].classList.add("empty");
        }
    }
    createNewNumber();
    createNewNumber();
    changeCSS();
}

function createNewNumber() {
    var boxArray = document.getElementsByClassName("box");
    var boxArr_2D = new Array();
    for (var k = 0; k < boxArray.length;) {
        for (var i = 0; i < 4; i++) {
            boxArr_2D[i] = new Array();
            for (var j = 0; j < 4; j++) {
                boxArr_2D[i][j] = boxArray[k];
                k++
            }
        }
    }
    // console.log(boxArr_2D[2][3]);

    var emptyBox = new Array();
    var nonemptyBox = new Array();
    var m = 0, n = 0;
    for (var x in boxArr_2D) {
        for (var y in boxArr_2D[x]) {
            if (boxArr_2D[x][y].classList.contains("empty")) {
                emptyBox[m] = boxArr_2D[x][y];
                m++
            } else if (boxArr_2D[x][y].classList.contains("nonempty")) {
                nonemptyBox[n] = boxArr_2D[x][y];
                n++
            }
        }
    }
    // console.log(emptyBox,nonemptyBox);

    var newNumber;
    if (Math.random() < 0.66) {
        newNumber = 2;
    } else {
        newNumber = 4;
    }
    // console.log(newNumber);
    m = Math.floor(Math.random() * emptyBox.length);
    console.log(m);
    var newNumPosition = emptyBox[m];
    newNumPosition.classList.add("nonempty");
    newNumPosition.classList.remove("empty");
    newNumPosition.innerHTML = newNumber;
}

function up() {
    var boxArray = document.getElementsByClassName("box");
    var boxArr_2D = new Array();
    for (var k = 0; k < boxArray.length;) {
        for (var i = 0; i < 4; i++) {
            boxArr_2D[i] = new Array();
            for (var j = 0; j < 4; j++) {
                boxArr_2D[i][j] = boxArray[k];
                k++;
            }
        }
    }
    var move = false;
    for (j = 0; j < 4; j++) {
        for (i = 0; i < 4; i++) {
            if (boxArr_2D[i][j].classList.contains("nonempty")) {
                if (i == 0) { }
                else if (boxArr_2D[i - 1][j].classList.contains("empty")) {
                    boxArr_2D[i - 1][j].innerHTML = boxArr_2D[i][j].innerHTML;
                    boxArr_2D[i][j].innerHTML = "";
                    boxArr_2D[i - 1][j].classList.remove("empty");
                    boxArr_2D[i - 1][j].classList.add("nonempty");
                    boxArr_2D[i][j].classList.remove("nonempty");
                    boxArr_2D[i][j].classList.add("empty");
                    i -= 2;
                    move = true;
                } else if (boxArr_2D[i - 1][j].classList.contains("nonempty")) {
                    if (boxArr_2D[i][j].innerHTML == boxArr_2D[i - 1][j].innerHTML) {
                        boxArr_2D[i - 1][j].innerHTML *= 2;
                        boxArr_2D[i][j].innerHTML = "";
                        boxArr_2D[i][j].classList.remove("nonempty");
                        boxArr_2D[i][j].classList.add("empty");
                        i -= 1;
                        move = true;
                    }
                }
            }
        }
    }
    changeCSS();
    return move;
}

function down() {
    var boxArray = document.getElementsByClassName("box");
    var boxArr_2D = new Array();
    for (var k = 0; k < boxArray.length;) {
        for (var i = 0; i < 4; i++) {
            boxArr_2D[i] = new Array();
            for (var j = 0; j < 4; j++) {
                boxArr_2D[i][j] = boxArray[k];
                k++;
            }
        }
    }
    var move = false;
    for (j = 3; j >= 0; j--) {
        for (i = 3; i >= 0; i--) {
            if (boxArr_2D[i][j].classList.contains("nonempty")) {
                if (i == 3) { }
                else if (boxArr_2D[i + 1][j].classList.contains("empty")) {
                    boxArr_2D[i + 1][j].innerHTML = boxArr_2D[i][j].innerHTML;
                    boxArr_2D[i][j].innerHTML = "";
                    boxArr_2D[i + 1][j].classList.remove("empty");
                    boxArr_2D[i + 1][j].classList.add("nonempty");
                    boxArr_2D[i][j].classList.remove("nonempty");
                    boxArr_2D[i][j].classList.add("empty");
                    i += 2;
                    move = true;
                } else if (boxArr_2D[i + 1][j].classList.contains("nonempty")) {
                    if (boxArr_2D[i][j].innerHTML == boxArr_2D[i + 1][j].innerHTML) {
                        boxArr_2D[i + 1][j].innerHTML *= 2;
                        boxArr_2D[i][j].innerHTML = "";
                        boxArr_2D[i][j].classList.remove("nonempty");
                        boxArr_2D[i][j].classList.add("empty");
                        i += 1;
                        move = true;
                    }
                }
            }
        }
    }
    changeCSS();
    return move;
}
function left() {
    var boxArray = document.getElementsByClassName("box");
    var boxArr_2D = new Array();
    for (var k = 0; k < boxArray.length;) {
        for (var i = 0; i < 4; i++) {
            boxArr_2D[i] = new Array();
            for (var j = 0; j < 4; j++) {
                boxArr_2D[i][j] = boxArray[k];
                k++;
            }
        }
    }
    var move = false;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (boxArr_2D[i][j].classList.contains("nonempty")) {
                if (j == 0) { }
                else if (boxArr_2D[i][j - 1].classList.contains("empty")) {
                    boxArr_2D[i][j - 1].innerHTML = boxArr_2D[i][j].innerHTML;
                    boxArr_2D[i][j].innerHTML = "";
                    boxArr_2D[i][j - 1].classList.remove("empty");
                    boxArr_2D[i][j - 1].classList.add("nonempty");
                    boxArr_2D[i][j].classList.remove("nonempty");
                    boxArr_2D[i][j].classList.add("empty");
                    j -= 2;
                    move = true;
                } else if (boxArr_2D[i][j - 1].classList.contains("nonempty")) {
                    if (boxArr_2D[i][j].innerHTML == boxArr_2D[i][j - 1].innerHTML) {
                        boxArr_2D[i][j - 1].innerHTML *= 2;
                        boxArr_2D[i][j].innerHTML = "";
                        boxArr_2D[i][j].classList.remove("nonempty");
                        boxArr_2D[i][j].classList.add("empty");
                        j -= 1;
                        move = true;
                    }
                }
            }
        }
    }
    changeCSS();
    return move;
}
function right() {
    var boxArray = document.getElementsByClassName("box");
    var boxArr_2D = new Array();
    for (var k = 0; k < boxArray.length;) {
        for (var i = 0; i < 4; i++) {
            boxArr_2D[i] = new Array();
            for (var j = 0; j < 4; j++) {
                boxArr_2D[i][j] = boxArray[k];
                k++;
            }
        }
    }
    var move = false;
    for (i = 3; i >= 0; i--) {
        for (j = 3; j >= 0; j--) {
            if (boxArr_2D[i][j].classList.contains("nonempty")) {
                if (j == 3) { }
                else if (boxArr_2D[i][j + 1].classList.contains("empty")) {
                    boxArr_2D[i][j + 1].innerHTML = boxArr_2D[i][j].innerHTML;
                    boxArr_2D[i][j].innerHTML = "";
                    boxArr_2D[i][j + 1].classList.remove("empty");
                    boxArr_2D[i][j + 1].classList.add("nonempty");
                    boxArr_2D[i][j].classList.remove("nonempty");
                    boxArr_2D[i][j].classList.add("empty");
                    j += 2;
                    move = true;
                } else if (boxArr_2D[i][j + 1].classList.contains("nonempty")) {
                    if (boxArr_2D[i][j].innerHTML == boxArr_2D[i][j + 1].innerHTML) {
                        boxArr_2D[i][j + 1].innerHTML *= 2;
                        boxArr_2D[i][j].innerHTML = "";
                        boxArr_2D[i][j].classList.remove("nonempty");
                        boxArr_2D[i][j].classList.add("empty");
                        j += 1;
                        move = true;
                    }
                }
            }
        }
    }
    changeCSS();
    return move;
}

function changeCSS() {
    var boxes = document.getElementsByClassName("box");
    for (var i in boxes) {
        switch (boxes[i].innerHTML) {
            case "2": boxes[i].style.backgroundColor = "#FFC312"; break;
            case "4": boxes[i].style.backgroundColor = "#F79F1F"; break;
            case "8": boxes[i].style.backgroundColor = "#EE5A24"; break;
            case "16": boxes[i].style.backgroundColor = "#EA2027"; break;
            case "32": boxes[i].style.backgroundColor = "#C4E538"; break;
            case "64": boxes[i].style.backgroundColor = "#A3CB38"; break;
            case "128": boxes[i].style.backgroundColor = "#FDA7DF"; break;
            case "256": boxes[i].style.backgroundColor = "#12CBC4"; break;
            case "512": boxes[i].style.backgroundColor = "#9980FA"; break;
            case "1024": boxes[i].style.backgroundColor = "#b71540"; break;
            case "2048": boxes[i].style.backgroundColor = "#fa983a"; break;
            case "": boxes[i].style.backgroundColor = "rgb(154, 241, 215)";
        }
    }
}

function winOrLose() {
    var boxArray = document.getElementsByClassName("box");
    var boxArr_2D = new Array();
    for (var k = 0; k < boxArray.length;) {
        for (var i = 0; i < 4; i++) {
            boxArr_2D[i] = new Array();
            for (var j = 0; j < 4; j++) {
                boxArr_2D[i][j] = boxArray[k];
                k++
            }
        }
    }
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (boxArr_2D[i][j].innerHTML == "2048") {
                alert("   :) \n  2048!  Congratulations!");
                return;
            }
        }
    }
    var nonemptyBox = document.getElementsByClassName("nonempty");
    if (nonemptyBox.length < 16) {
        // console.log(nonemptyBox);
        return;
    }
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (boxArr_2D[i] != undefined && boxArr_2D[i][j + 1] != undefined && boxArr_2D[i][j].innerHTML == boxArr_2D[i][j + 1].innerHTML) {
                return;
            } else if (boxArr_2D[i] != undefined && boxArr_2D[i][j - 1] != undefined && boxArr_2D[i][j].innerHTML == boxArr_2D[i][j - 1].innerHTML) {
                return;
            } else if (boxArr_2D[i + 1] != undefined && boxArr_2D[i + 1][j] != undefined && boxArr_2D[i][j].innerHTML == boxArr_2D[i + 1][j].innerHTML) {
                return;
            } else if (boxArr_2D[i - 1] != undefined && boxArr_2D[i - 1][j] != undefined && boxArr_2D[i][j].innerHTML == boxArr_2D[i - 1][j].innerHTML) {
                return;
            }
        }
    }
    alert("  :( \n    Game Over!   ");
    
}