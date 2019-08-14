/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
   Recursion: https://guillaumebogard.dev/blog/what-is-recursion/
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

let r = factorial(100)
console.log("factorial ", r);

function fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {

        return fibonacci(n - 2) + fibonacci(n - 1)
    }
}
let fibo = fibonacci(10)
console.log(fibo)

console.log('===========================================');

function countDown(n){
    if(n <0 ){
      return ;
    }
    console.log(n)
     countDown(n-1)
}
countDown(4)

console.log('===========================================');


let categories = [
    {id:'animals',parent:null},
    {id:'mammals',parent:'animals'},
    {id:'cats',parent:'mammals'},
    {id:'dog',parent:'mammals'},
    {id:'chihuahua',parent:'dogs'},
    {id:'labrador',parent:'dogs'},



]
function makeTree(animalCategories,parent){
    let node = {}
    return animalCategories.filter(c=>c.parent == null)
    animalCategories.forEach(c=>node[])
}
console.log(makeTree(categories,null));