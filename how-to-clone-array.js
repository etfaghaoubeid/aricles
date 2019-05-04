//:  https://medium.freecodecamp.org/how-to-clone-an-array-in-javascript-1d3183468f6a

// spred operator //
let numbers=[1,2,3,4,5];
let copyNumber = [...numbers]
console.log(copyNumber);
copyNumber.push(2) // this fine 
// this is note fine 
let nestedNumber  =[[12],[5]]
let copyNestedNumber = [...nestedNumber,4]
copyNestedNumber[0].push(34);
console.log(nestedNumber,copyNestedNumber); // becose they chare the reference


// 2) old for 
let oldForNumber = [1,2,3]
let copyOldForNumber = []
for(let i =0;i<oldForNumber.length;i++){
    copyOldForNumber[i] = oldForNumber[i] ;
}
oldForNumber.push(4)// fine 
console.log(oldForNumber,copyOldForNumber); //not save  for 2 dimation : because by ref not by value


// copy using map 
let mapArray = [1,3,4]
let copyMapArray = mapArray.map(element=>element);
console.log(mapArray,copyMapArray);
// copy using filter 
let filterArrsy  =[2,3,45,67,87,]
let cocpyFilterArrsy = filterArrsy.filter(element=>element>9)
console.log(cocpyFilterArrsy)

// reduce 
let reduceArray = [1,2,4,56,56]
let copyReduceArray = reduceArray.reduce((newArra,element)=>{newArra.push(element);return newArra},[]);
console.log(copyReduceArray)

// slice copy 
let sliceArray = [1,2,3,4,5];
let copySliceArray = sliceArray.slice(0,2);
console.log(copySliceArray); // all element no params slice()

// json pars 
let nestedJsonParse = [[1,2],[3,4]]
let copyNestedJsonParse = JSON.parse(JSON.stringify( nestedJsonParse));
nestedJsonParse[0].push(9)
console.log(nestedJsonParse,copyNestedJsonParse)
console.log(typeof copyNestedJsonParse)

//concat 
console.log([1,2,3].concat(4))
console.log([1,2,3].concat([5,6]))

// from 
let fromArray=  [1,2,3]
let copyFromArray = Array.from(fromArray)
console.log(fromArray,copyFromArray)