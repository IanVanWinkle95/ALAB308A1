// --------------------Part 1-----------------------

// let counter = 0

// function incrementVariable(n) {
//     console.log(n)
//     if (n < 15000) {
//         incrementVariable(n+1)
//     }
// }

// try {
//     incrementVariable(0)
// } catch (error) {
//     console.error("An error has occurred!", error)
//     console.log("Value of the counter:", counter)
// }

// --------------------Part 2------------------------

let counter = 0

const incrementVariable = (n) => {
    console.log(n)
    counter = n
    if (n < 45) {
        return () => incrementVariable(n + 1)
    }
}

const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
        result = result();
    }
    return result;
}

try {
    trampoline(incrementVariable, 0)
} catch (error) {
    console.error("An error has occurred!", error)
    console.log("Value of the counter:", counter)
}

// -----------------Part 2 Example-------------------

// const factorial = (n) => {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }

// const facto = (n, a = 1) => {
//     if (n === 0) return a;
//     return () => facto(n - 1, n * a);
// }

// const trampoline = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//         result = result();
//     }
//     return result;
// }

// console.log(trampoline(facto(10000)))

// ---------------------Part 3------------------------

const holdText = document.getElementById("holdText")
// holdText.textContent = "primeNumber"

const num = 10000

function isPrime(num) {
    if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
    return true;
}

let nextPrime = num;
    while (true) {
        if (isPrime(nextPrime)) {
            console.log(`The next prime number after ${num} is ${nextPrime}`);
            break;
        }
    nextPrime++;
}

setTimeout(() => {
    // isPrime(num)
    console.log("isPrime")
    alert("Calculation is finished")
}, 1000)

