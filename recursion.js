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