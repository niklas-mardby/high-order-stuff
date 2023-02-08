// 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙

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

const monsters: Monster[] = [
    new Monster("Blue Bob", 24, 5, 2),
    new Monster("Duke Blaargh the Third", 73, 12, 8),
    new Monster("Evil Dr Doof", 61, 4, 3),
    new Monster("Jane", 976, 21, 99),
    new Monster("Red Sue", 33, 3, 2),
    new Monster("Queen Phoebes of Void-Dark-37", 1356, 622, 6),
    new Monster("Steve", 43),
    new Monster("Sue Phlem", 56),
    new Monster("Karen", 47),
    new Monster("Over Lord James Skull-smasher Boom", 249, 6, 33)
];

// Add your code below

// 1. How many tentacles does all the monsters have together?
// 2. How many monsters are older than 50? Also log their names
// 3. How many monsters have names longer than 7 characters? Also log their names
// 4. Log the names and age of the three oldest monsters
// 5. How many monsters have names consisting of more than 2 words? Also log their names
// 6. Log the average number of eyes

