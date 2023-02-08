
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
    new Monster("Evil Dr Doof", 1, 1, 1),
    new Monster("Jane", 976, 21, 99),
    new Monster("Red Sue", 33, 3, 2),
    new Monster("Queen Phoebes of Void-Dark-37", 1356, 622, 6),
    new Monster("Steve", 43),
    new Monster("Sue Phlem", 56),
    new Monster("Karen", 47)
];

// add your code below
