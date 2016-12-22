class CalculatorTest {
    constructor() {
        this.memory = 0;
    }
    get $memory() {
        return this.memory;
    }
    set $memory(value) {
        this.memory = value;
    }
    add(number) {
        this.$memory = this.$memory + number;
    }
    sub(number) {
        if (number < 0)
            this.$memory = this.$memory + number;
        else
            this.$memory = this.$memory - number;
    }
    mul(number) {
        this.$memory = this.$memory * number;
    }
    div(number) {
        this.$memory = this.$memory / number;
    }
    result() {
        return this.$memory;
        ;
    }
    reset() {
        this.$memory = 0;
    }
}
let c = new CalculatorTest();
console.log("memoria inicial: " + c.result());
let numero1 = "123.456";
let res;
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
//# sourceMappingURL=classes.js.map