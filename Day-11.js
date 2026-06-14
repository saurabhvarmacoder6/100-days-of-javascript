// Question 1 (Print Number 6-1 With Recursion)

function printNum(num) {
    if (num === 0) {
        return
    }

    console.log(num);
    printNum(num - 1)

}

printNum(6)


// Question 2 (Print Number 1-6 With Recursion)

function printNum2(num) {
    if (num > 6) {
        return
    }

    console.log(num);
    printNum2(num + 1)

}

printNum2(1)


// Question 3 (Get Factorial With Recursion)


function factorial(num) {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(6));


// Question 4 (Array Sum Using Recursion)

let sumOfArr = 0;
let arr = [1, 2, 3, 4, 5, 6];
function arrSum(num) {
    if (num < 0) {
        return
    }
    sumOfArr += arr[num]
    arrSum(num - 1)
}

arrSum(arr.length - 1)
console.log(sumOfArr);


