window.onload = () => {
  

// create a function that takes a mathematical expression as a string and return the result as a number
// example:
// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10

function mathExpression(str) {
    let arr = str.split(/\s+/);
    let num = Number(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+') {
        num += Number(arr[i + 1]);
        } else if (arr[i] === '-') {
        num -= Number(arr[i + 1]);
        }
    }
    return num;
}

console.log(mathExpression('2 - 4'));
    
};