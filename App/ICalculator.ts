/* supongamos que existe una interfaz de una calculadora genérica (para cálculos con Nºs reales, complejos..);
   sólo tendríamos que implementar sus métodos de acuerdo a nuestras necesidades.
*/
interface ICalculator<T> {
    add<T>(number:T):void;
    sub<T>(number:T):void;
    mul<T>(number:T):void;
    div<T>(number:T):void;
    result<T>():T;
    reset():void;
}

/* 
interface IComplex {
    Complex add (arg1:Complex, arg2:Complex);
    Complex sub (arg1:Complex, arg2:Complex);
    Complex mul (arg1:Complex, arg2:Complex);
    Complex mulc(arg1:Complex, n:number);  //multiply one constant by complex number
    Complex div (arg1:Complex, arg2:Complejo);
    boolean  eq (arg1:Complex, arg2:Complex); //compare two complex numbers (about themselves)
}

class Complex {
    private number real;
    private number imag;

    constructor Complex(real:number, imag:number) {
        this.real = real;
        this.imag = imag;
    }
}
*/