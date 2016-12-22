class Calculator implements ICalculator<number> {
 
	private memory;

    constructor() {
        this.memory = 0;
	}
  
	public add(number:number):void {
		this.memory = this.memory + number;
	}

	public sub(number:number):void {
		if (this.memory == 0) this.memory = number;
		else
		if (number<0)
			this.memory = this.memory + number;
		else 
			this.memory = this.memory - number;
	}

	public mul(number:number):void {
		if (this.memory == 0) this.memory = number;
		else this.memory = this.memory * number;
	}

	public div(number:number):void {
		if (this.memory == 0) this.memory = number;
		else this.memory = this.memory / number;
	}

	public result():number{
		return this.memory;
	}

	public reset():void{
		this.memory = 0;
	}
	
}
