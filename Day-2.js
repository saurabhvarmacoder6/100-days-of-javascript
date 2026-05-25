// Question 1 (FizBuzz)

let num = 16;

for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    } else if (i % 5 === 0) {
        console.log("Buzz");

    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}


// Question 2 (Count Vowels)

let vowels = 0;
let str = "Javascript".toLowerCase();

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        vowels++
    }
}

console.log(vowels);


// Question 3 (Sum of Arr)

let arr = [4, 5, 6, 4, 3, 4, 3, 1];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

console.log(sum);


// Question 4 (Even and odd Separation)

let numArr = [1, 2, 3, 4, 5, 6];
let even = [];
let odd = [];

for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
        even.push(numArr[i])
    } else {
        odd.push(numArr[i])
    }
}

console.log(even, odd);


// Question 5 (Star Pattern)

let lines = 6;

for (let i = lines; i > 0; i--) {
    let star = "*";
    for (let j = 1; j < i; j++) {
        star += "*"
    }
    console.log(star);
    
}