// Qusetion 1 (Reverse Array)

let arr = [1, 2, 3, 4, 5, 6];
let reverseArr = []

for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i])
}

console.log(reverseArr);


// Question 2 (Find Dulicate Numbers)

let numbers = [1, 2, 3, 3, 2, 2, 4, 6, 8, 8, 6, 8, 4, 1, 5];
let dublicateNum = [];

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j] && i !== j && !dublicateNum.includes(numbers[i])) {
            dublicateNum.push(numbers[i])
        }
    }
}

console.log(dublicateNum);


// Question 3 (Find Second Largest Number)

let numArr = [10, 6, 5, 8, 20, 15];

numArr.sort((a, b) => {
    return b - a
})

let sln = numArr[1];

console.log(sln);


// Question 4 (Count Words)

let str = "i love java";
let textArr = str.split(" ")
let words = textArr.length
console.log(words);


// Question 5 (Star Pattern In Different Way)

let star = ""
let line = 6;

for (let i = 0; i < line; i++) {
    star += "*"
    console.log(star);
}


// Question 6 (Find Largest Number Without Loop And Math.Max)

let number = [4, 8, 10, 1]

number.sort((a, b) => b - a);
console.log(number[0]);

// Second Method

let bigNum = number.reduce((arr, curr) => arr > curr ? arr : curr, 0)

console.log(bigNum);




