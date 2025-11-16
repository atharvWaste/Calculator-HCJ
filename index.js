// function run zalay kay nahi cheak karny cathi
var toChack1 = false; 
var toChack2 = false;
var justCalculated = false;  

function printMe(btn) {
    var display = document.getElementById("display");

    // Clear only ONCE after "="
    if (justCalculated) {
        display.value = "";
        justCalculated = false;
    }

    console.log("num op");
    display.value += btn.value;
    toChack1 = true;
}

function printMeMAth(btn) {
    var display = document.getElementById("display");

    // Clear only ONCE after "="
    if (justCalculated) {
        display.value = "";
        justCalculated = false;
    }

    console.log("math op");
    display.value += btn.value;
    toChack2 = true;
}

function deleteMe() {
    var display = document.getElementById("display");

    // If last result was calculated, clear first
    if (justCalculated) {
        display.value = "";
        justCalculated = false;
        return;
    }

    display.value = display.value.slice(0, -1);
}

function AllClearMe() {
    document.getElementById("display").value = "";
    toChack1 = false;
    toChack2 = false;
    justCalculated = false;
}

document.getElementById("ac").onclick = AllClearMe;


function calculator() {
    var display = document.getElementById("display");

    if (toChack1 && toChack2) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            AllClearMe();
            return;
        }

        // Mark that "=" was pressed
        justCalculated = true;

        // Reset flags
        toChack1 = false;
        toChack2 = false;

    } else {
        AllClearMe();
    }
}