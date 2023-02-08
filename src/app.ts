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

// i js kan vi göra

/* const o = {
    name: "Gugge",
    age: 12,
}
o.hobby = "lift heavy things";

o.doSomething = () => {
    console.log(this.name);
}*/

// =========== forEach ===========

const arr: number[] = [1, 2, 3, 4, 5];

arr.forEach((n) => {
    console.log(n);
});

arr.forEach((e, i, arr) => {
    //console.log(e + arr[i + 1]);
    console.log(e + (i === arr.length - 1 ? 0 : arr[i + 1]));

});

// =========== filter ===========

const animals: string[] = ["gris", "hund", "katt", "elefant", "blåval", "myrslok"];

const a: string[] = animals.filter((o) => {
    // test som returnerar true eller false
    return o.length > 4;
});

// filter nedan gör samma sak som filter ovan
// const b: string[] = animals.filter(o => o.length > 4)

console.log(a);

// shallow or deep? kom ihåg hur js gör med referenser
console.log("referens?");

const gugge = [1, 2, 3];
const bobbo = gugge;
bobbo[0] = 12;
console.log(gugge);

let x = 12;
let y = x;
y += 12;
console.log(x);

class Pirate {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const pirates: Pirate[] = [new Pirate("John Smith"), new Pirate("Bill")];

const ps: Pirate[] = pirates.filter((p) => {
    return p.name.length > 4;
});

console.log(ps);

// =========== map
// =========== reduce
