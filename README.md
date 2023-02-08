# high-order-stuff
A demo and discussion of higher order functions in JS/TS

# What you should dig into
Terminology you should be familiar with. If you're not then google and read up on them!
- higher order functions
- first-class functions / objects
- expression
- anonymous function
- arrow function
- [callback function (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- function chaining
- JS built-in hof: 
   - [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
   - [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
   - [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
   - [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
   - [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [this (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method)
- Immediately Invoked Function Expression = [IIFE (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

## Honorable mentions
- [Copy an array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copy_an_array) and [Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)

# Recommended reading
- [First-class Function (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [Higher-Order Functions, Eloquent Javascript](https://eloquentjavascript.net/05_higher_order.html)
- [Higher Order Functions: How to Use Filter, Map and Reduce for More Maintainable Code, freeCodeCamp](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-d9101f9cf528/)

# Code snippets
```js
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

# Quote from Eloquent Javascript, Chapter 5 : Higher-Order Functions
A large program is a costly program, and not just because of the time it takes to build. Size almost always involves complexity, and complexity confuses programmers. Confused programmers, in turn, introduce mistakes (bugs) into programs. A large program then provides a lot of space for these bugs to hide, making them hard to find.

Let’s briefly go back to the final two example programs in the introduction. The first is self-contained and six lines long.

```js
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
```

The second relies on two external functions and is one line long.

```js
console.log(sum(range(1, 10)));
```

Which one is more likely to contain a bug?

# Challenge
Want to dig into higher order functions with some simple excercises? Lets go! 💪

1. Look in the files challenges.html and challenges.ts
2. Edit challenges.ts to solve the problems below
3. Open challenges.html and check the Console to review your work

(so clone the repo to your computer and then work in your own local copies of these files)

## The Monster class  🐙
```ts
class Monster {
    name: string;
    age: number;
    tentacles: number;
    eyes: number;

    constructor(
        name: string,
        age: number,
        tentacles: number = 2,
        eyes: number = 2
    ) {
        this.name = name;
        this.age = age;
        this.tentacles = tentacles;
        this.eyes = eyes;
    }
}
```

## Problems
Try to solve the problems using higher order functions and the other concepts discussed (see list above).

1. How many tentacles does all the monsters have together?
2. How many monsters are older than 50? Also log their names
3. How many monsters have names longer than 7 characters? Also log their names
4. Log the names and age of the three oldest monsters
5. How many monsters have names consisting of more than 2 words? Also log their names
6. Log the average number of eyes

## Help

## Suggested solution