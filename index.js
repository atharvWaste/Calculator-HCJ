// function run zalay kay nahi cheak karny cathi
var toChack1 = false; 
var toChack2 = false;
var justCalculated = false;  
// too solve problem 1
var lastCalculated = false;
function printMe(btn) {
    var display = document.getElementById("display");

    // Clear only ONCE after "="
    if (justCalculated) {
        display.value = "";
        justCalculated = false;
         lastCalculated = false;
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
        lastCalculated = false;
    }

    // solution of problem 1
if(lastCalculated === false){
    console.log("math op");
    display.value += btn.value;
    toChack2 = true;
    lastCalculated = true;
}else {
     display.value = "Syntax Error";
}

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

        // Reset chack command
        toChack1 = false;
        toChack2 = false;

    } else {
        AllClearMe();
    }
}


//problem1: muliple oprtors can be used like -++ in single row
// solution : display var kay aahe te check karayala lage....
//printMeMAth or printMe var condition lavavi lage.
// logic : lagun don math op disayala nako.