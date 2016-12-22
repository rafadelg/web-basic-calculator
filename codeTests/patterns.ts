const pattDigit = /[0-9]/;
const pattOpera = /^[\+\*\-\/\\\=]$/;
var valor1 = "0";
var valor2 = "\\";
var valor3 = "=";
console.log(pattDigit.test(valor1));
console.log(pattOpera.test(valor2));
console.log(pattOpera.exec(valor2));
console.log(pattOpera.exec(valor2)?pattOpera.exec(valor2)[0]:"es_nulo");
console.log(pattOpera.test(valor3));
console.log(pattOpera.exec(valor3)?pattOpera.exec(valor3)[0]:"es_nulo");
/*
TELÉFONO NACIONAL (sin espacios)
Comienza (^) por una cifra numérica (\d) de la q habrá 9 ocurrencias ({9}) y aquí acabará la cadena ($).
NOTA: La exp "\d" equivale a la exp "[0-9]", y representa a un carácter de una cifra numérica; es decir,
'0' ó '1' ó '2' .. '9'
*/
const pTestTlfNac1 = /^\d{9}$/;
const pTestTlfNac2 = /^[0-9]{9}$/;
var tlfNac = "959330011"
console.log("Tlf. nacional: " + tlfNac + " es " + pTestTlfNac1.test(tlfNac));
console.log(pTestTlfNac2.exec(tlfNac)?pTestTlfNac2.exec(tlfNac)[0]:" es_nulo");
/*
TELÉFONO INTERNACIONAL
eg. (+34)954556817
Comienza (^) por un paréntesis (\(), le sigue un caráct + (\+), después un dígito (\d) del q habrá
2 o 3 ocurrencias ({2,3}), después le sigue un paréntesis de cierre (\)), luego viene una cifra numérica de la que
habrá 9 ocurrencias ({9}), y aquí acabará la cadena ($).
NOTA: Puesto que los caracteres: (, ), +, *, -, \, {, }, |, etc... tienen significados especiales dentro de
una expresión regular, para considerarlos como caracteres normales que debe incluir una cadena
deben de ir precedidos del carácter de barra invertida \.
*/
const pTestTlfInt = /^\(\+\d{2,3}\)\d{9}$/;
var tlfInt = "(+34)955000117"
console.log("Tlf. internacional: " + pTestTlfInt.test(tlfInt));

/*
FECHA (formato DD/MM/AAAA)
Comienza (^) por una cifra numérica (\d) de la que habrá 2 ocurrencias ({2}), después una barra (\/), seguida de
2 cifras numéricas, otra barra, 4 cifras numéricas, y aquí acabará la cadena ($).
Exp. Reg.: /^\d{2}\/\d{2}\/\d{4}$/
*/
const pTestFecha = /^\d{2}\\\d{2}\\\d{4}$/;
var fecha = "01\\10\\2016";
console.log("Fecha (dd\\mm\\aaaa): " + fecha + " " + pTestFecha.test(fecha));

// Código postal: únicamente 5 dígitos.
const pTestCpostal = /^\d{5}$/;
const pTestCpostal2 = /^\d{2}\.\d{3}$/;
var cpostal = "21410";
var cpostal2 = "21.410";
console.log("Codigo postal: (nnnnn): " + cpostal + " " + pTestCpostal.test(cpostal));
console.log("Codigo postal: (nn.nnn): " + cpostal2 + " " + pTestCpostal2.test(cpostal2));

// e-mail: usuario@servidor.com
const patteMail = /^(.+\@.+\..+)$/;
/*
Comienza (^) por caracteres cualesquiera q no sean salto de línea (.) de los que habrá, al menos, una ocurrencia
(+), después el carácter arroba (\@), seguido de al menos un carácter que no podrá ser el salto de línea (.+),
después viene el carácter punto (\.), seguido de al menos un carácter donde ninguno podrá ser el salto de línea
(.+), y aquí acabará la cadena ($).
*/
const myEmail = /^(.{2,10}\@.{3,10}\..{2,3})$/;
const myEmail2 = /^(([a-z]|[A-Z]).{1,10}\@.{3,10}\..{2,3})$/;
const myEmail3 = /^(([a-z]|[A-Z])[\w-\.]{1,10}[a-zA-Z]{1}\@.{3,10}\..{2,3})$/;
var email = "g234-678-9@gmail.com";
console.log("e-mail: " + email + " " + myEmail.test(email));
console.log("e-mail: " + email + " " + myEmail2.test(email));
console.log("e-mail: " + email + " " + myEmail3.test(email));
//Nota: no se ajusta exactamte a RFC0822 - Lectura orientativa: https://www.uv.es/ciuv/cas/correo/email.html
/*
Número entero
Comienza (^) opcionalmente (?) por el carácter + o por el carácter -, por lo q puede q, incluso, no aparezcan
ninguno de los 2; seguidamte vienen caracteres de cifras numéricas (\d) de los q, al menos, debe introducirse
uno (+), y aquí acabará la cadena ($)
*/
const pNumentero1 = /^(\+|\-)?\d+$/;
const pNumentero2 = /^[+-]?\d+$/;
const pNumentero3 = /^(\-)?[0-9]{2,5}$/;
var numEntero = "-023";
console.log("Nº entero: " + numEntero + " " + pNumentero1.test(numEntero));
console.log("Nº entero: " + numEntero + " " + pNumentero2.test(numEntero));
console.log("Nº entero: " + numEntero + " " + pNumentero3.test(numEntero));

/*
Número real
eg. -123,35 o 7,4 o 8
Comienza (^) opcionalmente (?) por el carácter + o por el carácter -, por lo que puede que incluso no aparezcan
ninguno de los 2; seguidamente vienen caracteres de cifras numéricas (\d) de los que al menos debe introducirse
uno (+), y, opcionalmente, aparecerá un punto o coma decimal seguido de al menos una cifra numérica, y aquí
acabará la cadena ($)
*/
var n: number = 2;
const pNumreal = /^[+-]?\d+([,.]\d+)?$/;
const pNumreal2 = /^(\-)?[1-9]\d{0,7}(\,[0-9]{1,4})?$/;
var numReal = "-1,0";
console.log("Nº real: " + numReal + " " + pNumreal.test(numReal));
console.log("Nº real: " + numReal + " " + pNumreal2.test(numReal));

const patron = /^\-?[1-9]\d{0,7}(\,[0-9]{1,4})?([\+\-\*\/=])?$/;
let valor = "-1,0";
console.log("Clic: " + valor + " " + patron.test(valor));