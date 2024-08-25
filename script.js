function operate (a, b, operator) {
    if (operator == "+") {return result = a+b};
    if (operator == "-") {return result = a-b};
    if (operator == "*") {return result = a*b};
    if (operator == "/") {
        if (b == 0) {
            alert("You can't divide by 0, common knowledge bro");
            return result = a;
        } else {
            return result = a/b
        }
}}


let bufferNumber;
let a;
let b;
let operatorSign;
let result = 0;
let bufferArray = [] 
let displayNumber = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator")



function arrayToNumber() { 
    bufferNumber = "";
    for (let number of bufferArray) {
        bufferNumber += number;
    }
    displayNumber.textContent = bufferNumber;
    return +bufferNumber;
}


function arrayButton () { //function to add numbers to the display
        numberButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if (bufferArray.length > 17) {
                    alert("Too many numbers, go easy bro")
                } else {
                bufferArray.push(button.id);}
                console.log(bufferArray);
                arrayToNumber()
            })
        })
};



document.querySelector("#clear").addEventListener("click", () => {
    bufferArray = [];
    arrayToNumber();
    a = "";    
})

document.querySelector("#delete").addEventListener("click", () => {
    bufferArray.pop();
    arrayToNumber()     
})

document.querySelector("#round").addEventListener("click", () => {
    bufferNumber = (+bufferNumber).toFixed(3);
    bufferArray = [];
    for (let n = 0; n < bufferNumber.length; n++) {
        bufferArray.push(bufferNumber[n])
    };
    arrayToNumber();
})

document.querySelector("#plusminus").addEventListener("click", () => {
    if (bufferArray[0] == "-") {
        bufferArray.shift();
        arrayToNumber();
    } else {
        bufferArray.unshift("-");
        arrayToNumber();
    }
})




function operator() {
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            a = +bufferNumber;
            operatorSign = button.id;
            bufferArray = [];
            arrayToNumber();
            console.log(operatorSign);
            return a + operatorSign
        })
    })

}

function equal() {
    document.querySelector("#equal").addEventListener("click", () => {
        b = +bufferNumber;
        operate(a,b,operatorSign);
        console.log(result);
        result = result.toString();
        bufferArray = [];
        for (let n = 0; n < result.length; n++) {
            bufferArray.push(result[n])
        };
        arrayToNumber();
        })
}

function decimal() {
    if (bufferArray.includes(".")) {
        console.log("déjà un point!")
    }
}


arrayButton();
operator();
equal();
decimal();
