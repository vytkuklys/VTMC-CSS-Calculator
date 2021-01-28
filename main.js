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

function applyToScreen(value){
    let display = "";
    switch (value){
        case "AC":
            display = "0";
            symbol = "";
            reset = false;
            screen.textContent = display;
            break;
        case "DEL":
            display = screen.textContent;
            display = display.slice(0, -1);
            (display == false || display === "0") ? display = "0" : display = display;
            screen.textContent = display;
            break;
        case "/":
            if(parseFloat(screen.textContent) == parseFloat(screen.textContent)){
                prevNr = parseFloat(screen.textContent);
            }
            symbol = "/";
            display = "/";
            screen.textContent = display;
            break;
        case "*":
            if(parseFloat(screen.textContent) == parseFloat(screen.textContent)){
                prevNr = parseFloat(screen.textContent);
            }
            symbol = "*";
            display = "*";
            screen.textContent = display;
            break;
        case "-":
            if(parseFloat(screen.textContent) == parseFloat(screen.textContent)){
                prevNr = parseFloat(screen.textContent);
            }
            symbol = "-";
            display = "-";
            screen.textContent = display;
            break;
        case "+":
            if(parseFloat(screen.textContent) == parseFloat(screen.textContent)){
                prevNr = parseFloat(screen.textContent);
            }
            symbol = "+";
            display = "+";
            screen.textContent = display;
            break;
        case "=":
            display = screen.textContent;
            console.log(symbol)
            switch (symbol){
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
            break;
        case ".":
            display = value;
            let tmpArr = screen.textContent.split("");
            let count = 0;
            console.log(tmpArr)
            tmpArr.forEach(element => {
                (element.localeCompare(".") === 0) ? count ++ : "";
            });
            if(!(count > 0)){
                screen.textContent += display;
            }
            break;
        default:
            display = value;
            console.log(screen.textContent, "sitas")
            if(screen.textContent.length > 1 || parseFloat(screen.textContent) > 0){
                if(!reset){
                    screen.textContent += display;
                }else{
                    reset = false;
                    screen.textContent = display;
                    prevNr = "";
                }
            }else if(screen.textContent === "0"){
                screen.textContent = display;
            }else if(typeof screen.textContent !== 'number'){
                screen.textContent = display;
            }
    }
}

