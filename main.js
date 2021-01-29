const btns = document.querySelector(".calculator-functions");
const screen = document.querySelector(".calculator-screen");
let prevNr, symbol;
let reset = false;
btns.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.attributes.id) {
        let value = event.target.attributes.id.value;
        applyToScreen(value);
    }
});

function applyToScreen(value) {
    let display = "";
    switch (value) {
        case "AC":
            display = "0";
            symbol = "";
            reset = false;
            screen.textContent = display;
            break;
        case "DEL":
            display = screen.textContent;
            display = display.slice(0, -1);
            (display == false || display === "0") ? display = "0": display = display;
            screen.textContent = display;
            break;
        case "/":
            //if statement to prevent NaN from being calculated
            if (parseFloat(screen.textContent) == parseFloat(screen.textContent)) {
                prevNr = parseFloat(screen.textContent);
            }
            symbol = "/";
            display = "/";
            screen.textContent = display;
            break;
        case "*":
            if (parseFloat(screen.textContent) == parseFloat(screen.textContent)) {
                prevNr = parseFloat(screen.textContent);
            }
            symbol = "*";
            display = "*";
            screen.textContent = display;
            break;
        case "-":
            if (parseFloat(screen.textContent) == parseFloat(screen.textContent)) {
                prevNr = parseFloat(screen.textContent);
            }
            symbol = "-";
            display = "-";
            screen.textContent = display;
            break;
        case "+":
            if (parseFloat(screen.textContent) == parseFloat(screen.textContent)) {
                prevNr = parseFloat(screen.textContent);
            }
            symbol = "+";
            display = "+";
            screen.textContent = display;
            break;
        case "=":
            display = screen.textContent;
            if(parseFloat(screen.textContent) === parseFloat(screen.textContent)){
                switch (symbol) {
                    case "*":
                        display = prevNr * parseFloat(screen.textContent);
                        break;
                    case "/":
                        display = prevNr / parseFloat(screen.textContent);
                        break;
                    case "-":
                        display = prevNr - parseFloat(screen.textContent);
                        break;
                    case "+":
                        display = prevNr + parseFloat(screen.textContent);
                        break;
                    default:
                        break;
            }
            screen.textContent = display;
            symbol = "";
            reset = true;
            }
            break;
        case ".":
            display = value;
            if (!reset && parseFloat(screen.textContent) === parseFloat(screen.textContent)) {
                let tmpArr = screen.textContent.split("");
                let count = 0;
                tmpArr.forEach(element => {
                    (element.localeCompare(".") === 0) ? count++ : "";
                });
                if (!(count > 0)) {
                    screen.textContent += display;
                }
            }else{
                screen.textContent = "0."
                reset = false;
            }

            break;
        default:
            display = value;
            if (screen.textContent.length > 1 || parseFloat(screen.textContent) > 0) {
                if (!reset) {
                    screen.textContent += display;
                } else {
                    reset = false;
                    screen.textContent = display;
                    prevNr = "";
                }
            } else if (screen.textContent === "0") {
                screen.textContent = display;
            } else if (typeof screen.textContent !== 'number') {
                screen.textContent = display;
                reset = false;
            }
    }
}