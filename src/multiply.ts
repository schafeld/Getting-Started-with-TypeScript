type mathFunction = (a: number, b: number) => number;


const multiply: mathFunction = (a, b) => {
    return a * b;
}

console.log(multiply(5, 10));