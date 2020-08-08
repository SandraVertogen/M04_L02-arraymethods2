//Deel A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]
// Hier komt jouw functie
const findSpiderMan = (superheroes) => {
    return superheroes.find(function (spider) {
        return spider.name === "Spiderman";
    });
};
console.log(findSpiderMan(superheroes));
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


// Deel B
const doubleArrayValues = (array) => {
    return array.map(number => {
        return number * 2;
    });
};
console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]


// Deel C
const containsNumberBiggerThan10 = (array) => {
    return array.some(number => {
        return number > 10;
    });
};
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false


// Deel D
const isItalyInTheGreat7 = (array) => {
    return array.includes('Italy');
};
console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true


// Deel E
const tenfold = (array) => {
    let tenFoldArray = [];
    array.forEach(number => {
        tenFoldArray.push(number * 10);
    });
    return tenFoldArray;
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]


// Deel F
const isBelow100 = (array) => {
    return array.every(number => {
        return number < 100;
    })
}
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false


// Deel G
const myArray = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]
const bigSum = myArray.reduce((currentTotal, array) => {
    return array + currentTotal;
});

console.log(bigSum);
// result should be 1118

