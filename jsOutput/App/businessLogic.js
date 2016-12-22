const pattOknumberInScreen = /^[-]?\d{1,9}([,][0-9]{0,8})?$/;
const pattOperator = /^[\+\*\-\/\=]$/;
let numberInScreen = "";
let clicksOnButton = "";
let currentNumber = 0;
let previousOperator = "";
let maxNumberLength = 9;
let calculator = new CalcCientifica();
function processClickOn(clickOnButton) {
    if (clickOnButton == "r") {
        numberInScreen = "";
        calculator.reset();
    }
    if (numberInScreen.length > 0)
        switch (clickOnButton) {
            case ("<"):
                numberInScreen = numberInScreen.substring(0, numberInScreen.length - 1);
                break;
            case ("i"):
                numberInScreen = (parseFloat(numberInScreen) * (-1)).toString();
        }
    if (numberInScreen.length < maxNumberLength) {
        if (numberInScreen == "" && clickOnButton == "0")
            return;
        else
            modelNumberAtFirst(clickOnButton);
        if (pattOknumberInScreen.test(numberInScreen + clickOnButton))
            numberInScreen += clickOnButton;
    }
    if (numberInScreen == "")
        document.getElementById("idScreen").innerText = "0";
    else
        document.getElementById("idScreen").innerText = numberInScreen;
    if (pattOperator.test(clickOnButton) && pattOknumberInScreen.test(numberInScreen)) {
        currentNumber = parseFloat(numberInScreen.replace(",", "."));
        if (/^[\+\*\-\/]$/.test(clickOnButton))
            previousOperator = clickOnButton;
        switch (clickOnButton) {
            case ("+"):
                calculator.add(currentNumber);
                numberInScreen = calculator.result().toString().replace(".", ",") + " + ";
                break;
            case ("-"):
                calculator.sub(currentNumber);
                numberInScreen = calculator.result().toString().replace(".", ",") + " - ";
                break;
            case ("*"):
                calculator.mul(currentNumber);
                numberInScreen = calculator.result().toString().replace(".", ",") + " * ";
                break;
            case ("/"):
                calculator.div(currentNumber);
                numberInScreen = calculator.result().toString().replace(".", ",") + " / ";
                break;
            case ("="):
                switch (previousOperator) {
                    case ("+"):
                        calculator.add(currentNumber);
                        break;
                    case ("-"):
                        calculator.sub(currentNumber);
                        break;
                    case ("*"):
                        calculator.mul(currentNumber);
                        break;
                    case ("/"):
                        calculator.div(currentNumber);
                }
                numberInScreen = calculator.result().toFixed(5);
                previousOperator = "";
                calculator.reset();
        }
        document.getElementById("idScreen").innerText = numberInScreen.replace(".", ",");
        numberInScreen = "";
    }
    clicksOnButton += clickOnButton;
    document.getElementById("idClicks").innerText = clicksOnButton;
}
function modelNumberAtFirst(clickOnButton) {
    if (numberInScreen == "-0" && /^[0-9]$/.test(clickOnButton))
        numberInScreen = "-";
    if (numberInScreen == "" && clickOnButton == "-") {
        numberInScreen += clickOnButton;
        maxNumberLength += 1;
    }
    if (clickOnButton == ",") {
        maxNumberLength++;
        if (numberInScreen == "")
            numberInScreen = "0" + ",";
        else if (numberInScreen == "-")
            numberInScreen = "-0" + ",";
    }
}
//# sourceMappingURL=businessLogic.js.map