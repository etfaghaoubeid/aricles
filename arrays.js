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
     return Array.isArray(element) ?
       [...accumilator, ...flatDeep(element)] :
       [...accumilator, element];
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
 let users = [{
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

 /*
 :::::::::::::::::::::::::::
   flat
 :::::::::::::::::::::::::::
 */
 // const flatNumberss = [1, 2, [3, 4, [5, [6, 7]], [[[[8]]]]]];
 // const numbersflattenOnce = flatNumberss.flat();
 // console.log(numbersflattenOnce);

 /*
 :::::::::::::::::::::::::::
   join
 :::::::::::::::::::::::::::
 */
 let names = ["Atigh", "Larry", "Musk"];
 let joinNames = names.join(">");
 console.log(joinNames);
 /*
 :::::::::::::::::::::::::::
     isArray static
 :::::::::::::::::::::::::::
 */

 let isArrayNumbers = [1, 3, 4, 5, 6];
 console.log(Array.isArray(isArrayNumbers));

 /*
 :::::::::::::::::::::::::::
     sort 
 :::::::::::::::::::::::::::
 */
 let sortNames = ["Atigh", "Chavie", "Mouvid", "Hamoud"];
 console.log(sortNames.sort());
 let sortNumbers = [23, 56, 45, 2, 4, 56, 89, 43];
 console.log(sortNumbers.sort((a, b) => a - b));

 /*
 :::::::::::::::::::::::::::
     pop
 :::::::::::::::::::::::::::
 */
 let popNumbers = [1, 2, 34, 5];
 popNumbers.pop();
 console.log("popNumbers", popNumbers);
 /*
 :::::::::::::::::::::::::::
     fill
 :::::::::::::::::::::::::::
 */

 /*
 :::::::::::::::::::::::::::
     reverce 
 :::::::::::::::::::::::::::
 */
 let reverceNumbers = [1, 2, 3, 4, 5, 6];
 reduceNumbers.reverse();
 console.log("reduceNumbers", reduceNumbers);

 /*
 :::::::::::::::::::::::::::
     shift 
 :::::::::::::::::::::::::::
 */
 let shiftNumbers = [1, 2, 3, 4];
 shiftNumbers.shift();
 console.log(shiftNumbers);

 /*
 :::::::::::::::::::::::::::
     unshift
 :::::::::::::::::::::::::::
 */
 let unshiftNumbers = [1, 2, 3, 4, 5];
 unshiftNumbers.unshift(-1, 0);
 console.log(unshiftNumbers);