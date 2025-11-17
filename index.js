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
}
else {

     display.value = "Syntax Error";
     toChack2 = false;
     lastCalculated = false;
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
    lastCalculated = false;

}

document.getElementById("ac").onclick = AllClearMe;


function calculator() {
    var display = document.getElementById("display");

    // ✅ allow sin(30), cos(60), log(100)
    if (display.value.includes("(")) {
        toChack1 = true;
        toChack2 = true;
    }

    if (toChack1 && toChack2) {
        try {
            if (
                display.value.startsWith("sin(") ||
                display.value.startsWith("cos(") ||
                display.value.startsWith("log(")
            ) {

                let raw = display.value;
                let num = raw.slice(raw.indexOf("(") + 1);
                num = parseFloat(num);

                if (!isNaN(num)) {
                    if (raw.startsWith("sin(")) display.value = Math.sin(num * Math.PI / 180);
                    if (raw.startsWith("cos(")) display.value = Math.cos(num * Math.PI / 180);
                    if (raw.startsWith("log(")) display.value = Math.log10(num);
                } else {
                    AllClearMe();
                    return;
                }

            } else {
                display.value = eval(display.value);
            }

        } catch (error) {
            AllClearMe();
            return;
        }

        // Mark that "=" was pressed
        justCalculated = true;
        
        // Reset chack command
        toChack1 = false;
        toChack2 = false;
        lastCalculated = false;

    } else {
        AllClearMe();
    }
}



// problem 2 :expand btn not working.
function expandMe(btn) {
    console.log("Expanding");
let expandedBox =  document.createElement("div");
expandedBox.classList.add("row");//to add the class as row
 const parentElement =document.getElementsByClassName("calculator")[0]
expandedBox.innerHTML = 
`  
        <div class="box"><label></label><input type="button" id="sin" value="sin(" onclick="printMe(this)"></div>
        <div class="box"><label></label><input type="button" id="cos" value="cos(" onclick="printMe(this)"></div>
        <div class="box"><label></label><input type="button" id="log" value="log(" onclick="printMe(this)"></div>
    `;
 console.log(expandedBox);

 btn.parentElement.parentNode.replaceChild(expandedBox, btn.parentElement);
}