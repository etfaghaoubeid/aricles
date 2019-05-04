/*
==============================================================
        arrays  link = https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
==============================================================
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
let persons = [{
                name: "Mouvid",
                age: 23
        },
        {
                name: "Hamoud",
                job: "software"
        }

]

const lessPersonInfo = persons.map(person => person.name);
console.log("lessPersonInfo",
        lessPersonInfo);
/*
:::::::::::::::::::::::::::
      filter function
:::::::::::::::::::::::::::
*/
const filterNumbers = [1, 2, 3, , 4, 5, 6, 7, 8]
const filterOddNumbers = filterNumbers.filter(number => number % 2 != 0)
console.log("filterOddNumbers", filterOddNumbers);