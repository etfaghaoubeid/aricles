/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 arrays  link = https://medium.freecodecamp.org/what-you-should-know-about-javascript-arrays-a7e5394f78f8?fbclid=IwAR3OnAFjINP6PZRnB2xP-K2NDiT7NnJvS89DHpFLy--bDZ3E7zmI0WJDC7o
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */
/*
:::::::::::::::::::::::::::
      map function
:::::::::::::::::::::::::::
*/

let numbers = [1, 2, 3, 4];
const doubleNumbers = numbers.map(number => number * 2);
console.log("map double numbers", doubleNumbers);
// keep particular property
let persons = [
  {
    name: "Mouvid",
    age: 23
  },
  {
    name: "Hamoud",
    job: "software"
  }
];

const lessPersonInfo = persons.map(person => person.name);
console.log("lessPersonInfo", lessPersonInfo);
/*
:::::::::::::::::::::::::::
      filter function
:::::::::::::::::::::::::::
*/
const filterNumbers = [1, 2, 3, , 4, 5, 6, 7, 8];
const filterOddNumbers = filterNumbers.filter(number => number % 2 != 0);
console.log("filterOddNumbers", filterOddNumbers);

/*
:::::::::::::::::::::::::::
      reduce function
:::::::::::::::::::::::::::
*/

const reduceNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sumReduceNumbers = reduceNumbers.reduce((sum, item) => (sum += item), 0);
console.log("sumReduceNumbers", sumReduceNumbers);

let map = (arr, fn) => {
  return arr.reduce((mapedArray, element) => {
    return [...mapedArray, fn(element)];
  }, []);
};
console.log(map([1, 2, 3, 4, 5], element => element + 1));

let filter = (arr, fn) => {
  return arr.reduce((filterElement, element) => {
    return fn(element) ? [...filterElement, element] : [...filterElement];
  }, []);
};
console.log(filter([1, 2, 3, 4, 5], element => element % 2 != 0));

function flatDeep(arr) {
  return arr.reduce((accumilator, element) => {
    return Array.isArray(element)
      ? [...accumilator, ...flatDeep(element)]
      : [...accumilator, element];
  }, []);
}

console.log("flatDeeper", flatDeep([1, 2, [3, 4, [5], 6], 8]));

/*
:::::::::::::::::::::::::::
      spread operator
:::::::::::::::::::::::::::
*/
const numbersSpread = [1, 2, 3, 4, 5];
const copynNumbersSpread = [...numbersSpread];
console.log("copynNumbersSpread", copynNumbersSpread);
const otherNumbers = [6, 7, 8];
const concatNumber = [...numbersSpread, ...otherNumbers];
console.log("concatNumber", concatNumber);
// shallow copy
let users = [
  {
    name: "atigh",
    postion: "web developer",
    age: 29
  },
  {
    name: "Lalle",
    postion: "Ban6ye",
    age: 20
  },
  3
];
let usersCopy = [...users];
usersCopy[0].name = "chavie";
usersCopy[0].age = 28;
usersCopy[2] = 4;
console.log(users, usersCopy);

/*
:::::::::::::::::::::::::::
      includes
:::::::::::::::::::::::::::
*/

let includesNumbers = [1, 2, 3, 4];
console.log(includesNumbers.includes(2));

/*
:::::::::::::::::::::::::::
      concat && concatAll
:::::::::::::::::::::::::::
*/
let concatNumbers = [1, 2, 3, 4];
console.log(concatNumbers.concat([5, 6, 7]));

/*
:::::::::::::::::::::::::::
      forEach
:::::::::::::::::::::::::::
*/

function concatall(arr, arrays) {
  return arr.concat(...arrays);
}
console.log(concatall([1, 2, 3], [3, 4, 5, 6], [7, 8]));

let forEachNumbers = [1, 2, 3, 4, 7];
forEachNumbers.forEach(console.log);

/*
:::::::::::::::::::::::::::
      indexOf
:::::::::::::::::::::::::::
*/
let indexOfNumbers = [1, 2, 3, 45];
console.log(indexOfNumbers.indexOf(45));

/*
:::::::::::::::::::::::::::
 find stop when find one
:::::::::::::::::::::::::::
*/
let findNumbers = [1, 2, 3, 4, 5, 6];

let r = findNumbers.find(element => element > 3);
console.log(r);

/*
:::::::::::::::::::::::::::
    findIndex return index 
:::::::::::::::::::::::::::
*/
let findEndexNumbers = [1, 2, 3, 4, 5, 6, 7];
let re = findEndexNumbers.findIndex(element => element == 4);
console.log(re);

/*
:::::::::::::::::::::::::::
    slice 
:::::::::::::::::::::::::::
*/
let sliceNumbers = [1, 2, 3, 4, 5, 67, 8];
let sliceCopy = sliceNumbers.slice();
console.log(sliceNumbers, sliceCopy);
let portion = sliceNumbers.slice(0, 4);
console.log(portion);
/*
:::::::::::::::::::::::::::
 some:return true or false  
:::::::::::::::::::::::::::
*/
let someNumbers = [1.2, 3, 4, 5, 67, 8];
let someResult = someNumbers.some(item => item > 8);
console.log(someResult);

/*
:::::::::::::::::::::::::::
 evry : test all item  
:::::::::::::::::::::::::::
*/
let evryNumbers = [1, 2, 3, 4, 56, 7, 8];
let evryResult = evryNumbers.every(item => item > 0);
console.log(evryResult);
