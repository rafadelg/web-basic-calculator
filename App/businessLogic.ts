const pattOknumberInScreen = /^[-]?\d{1,9}([,][0-9]{0,8})?$/;
const pattOperator = /^[\+\*\-\/\=]$/;
let numberInScreen:string = "";
let clicksOnButton: string = "";
let currentNumber:number = 0;
let previousOperator = "";
let maxNumberLength:number = 9; // max lenght of number (in screen)
let calculator = new CalcCientifica();
//process mouse-click on a button object
function processClickOn(clickOnButton){
	if (clickOnButton == "r") { // reset 
		numberInScreen = "";
		calculator.reset();
	} 
	if (numberInScreen.length>0) //apply to first number only
		switch (clickOnButton){
			case ("<"): // delete digit last
				numberInScreen = numberInScreen.substring(0,numberInScreen.length-1);
				break;
			case ("i"): // cahnge over to negative and vice versa
				numberInScreen = (parseFloat(numberInScreen)*(-1)).toString();
		}
	//go making the number
	if (numberInScreen.length<maxNumberLength) {
		if (numberInScreen==""&&clickOnButton=="0") return; //se descartan 0's por la izqda.
			else modelNumberAtFirst(clickOnButton); //se tratan clics iniciales para "-", "-0" y ","
				if (pattOknumberInScreen.test(numberInScreen+clickOnButton)) 
					numberInScreen += clickOnButton; //forzamos a q el Nº se ajuste al patrón	
	}
	if (numberInScreen=="") // evitar efecto "brusco" cuando numberInScreen es ""
		document.getElementById("idScreen").innerText = "0";
	else 
		document.getElementById("idScreen").innerText = numberInScreen;
	//si el Nº está formado y nos llega el operador
	if (pattOperator.test(clickOnButton)&&pattOknumberInScreen.test(numberInScreen)){
		currentNumber = parseFloat(numberInScreen.replace(",","."));
		if (/^[\+\*\-\/]$/.test(clickOnButton)) previousOperator = clickOnButton;
		switch (clickOnButton){
			case ("+"):
				calculator.add(currentNumber);
				numberInScreen = calculator.result().toString().replace(".",",") + " + ";
				break;
			case("-"):
				calculator.sub(currentNumber);
				numberInScreen = calculator.result().toString().replace(".",",") + " - ";
				break;
			case("*"):
				calculator.mul(currentNumber);
				numberInScreen = calculator.result().toString().replace(".",",") + " * ";				
				break;
			case("/"):
				calculator.div(currentNumber);
				numberInScreen = calculator.result().toString().replace(".",",") + " / ";
				break;
			case("="):
				switch(previousOperator){
					case ("+"):
						calculator.add(currentNumber);
						break;
					case("-"):
						calculator.sub(currentNumber);
						break;
					case("*"):
						calculator.mul(currentNumber);				
						break;
					case("/"):
						calculator.div(currentNumber);
				}
				numberInScreen = calculator.result().toFixed(5);
				previousOperator = "";
				calculator.reset();
		}
		document.getElementById("idScreen").innerText = numberInScreen.replace(".",",");
		numberInScreen = "";
	}
	clicksOnButton += clickOnButton; // para controlar todas las pulsaciones
	document.getElementById("idClicks").innerText = clicksOnButton;	
}
//particular cases
function modelNumberAtFirst(clickOnButton):void {
	//forzamos a q: si Nº igual a "-0", se sustituya el 0 por un dígito
	if (numberInScreen == "-0" && /^[0-9]$/.test(clickOnButton)) numberInScreen = "-";
	//Nº negativo: sólo si se hace clickOnButton "-" al ppio.
	if (numberInScreen == "" && clickOnButton == "-"){
		numberInScreen += clickOnButton;
		maxNumberLength += 1;
	}
	//Nº decimal (al ppio): se añade 0, tanto si es positivo como negativo
	if (clickOnButton == ",") {
		maxNumberLength++; //aumentamos la longitud en 1 (para q no se contabilicen "," y "-")
		if (numberInScreen == "") numberInScreen = "0" + ",";
		else if (numberInScreen == "-") numberInScreen = "-0" + ",";
	}
}