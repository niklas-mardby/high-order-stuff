const foo = () => {
    console.log("foobar");
};
foo(); // Invoke it using the variable
console.log(foo);

const kebab = () => {
    return "kebab";
}

// higher order function = funktion som tar emot en funktion som invärde
const newFoo = (x: any) => {
    console.log(x());
}

newFoo(kebab);

// higher order function = funktion som returnerar en funktion
const mathy = (x: number) => {
    return (a: number) => {
        return a * x;
    }
}

// 2 * 5
const dubble = mathy(2);
console.log(dubble(5));

const tripple = mathy(3);
console.log(tripple(5));

