class Calculator {
    constructor() {
        this.memory = 0;
    }
    add(number) {
        this.memory = this.memory + number;
    }
    sub(number) {
        if (this.memory == 0)
            this.memory = number;
        else if (number < 0)
            this.memory = this.memory + number;
        else
            this.memory = this.memory - number;
    }
    mul(number) {
        if (this.memory == 0)
            this.memory = number;
        else
            this.memory = this.memory * number;
    }
    div(number) {
        if (this.memory == 0)
            this.memory = number;
        else
            this.memory = this.memory / number;
    }
    result() {
        return this.memory;
    }
    reset() {
        this.memory = 0;
    }
}
//# sourceMappingURL=classCalculator.js.map