class CalculatorTest implements ICalculator<number> {
 
	private memory: number;

    constructor() {
        this.memory = 0;
	}

	public get $memory():number {
		return this.memory;
	}

	public set $memory(value:number) {
		this.memory = value;
	}
   
	public add(number:number):void {
		this.$memory = this.$memory + number;
	}

	public sub(number:number):void {
		if (number<0) 
			this.$memory = this.$memory + number;
		else 
			this.$memory = this.$memory - number;
	}

	public mul(number:number):void {
		this.$memory = this.$memory * number;
	}

	public div(number:number):void {
		this.$memory = this.$memory / number;
	}

	public result():number{
		return this.$memory;;
	}

	public reset():void{
		this.$memory = 0 ;
	}
	
}
let c = new CalculatorTest();
console.log("memoria inicial: " + c.result());
let numero1:string = "123.456";
let res:string;
c.add(parseFloat(numero1));
console.log("memoria: " + c.result());
c.sub(parseFloat("1"));
console.log("memoria: " + c.result());
c.mul(parseFloat("2.0"));
console.log("memoria: " + c.result());
c.sub(parseFloat(".912"));
console.log("memoria: " + c.result());
c.div(parseFloat("2"));
res = c.result().toString();
console.log("memoria: " + res);