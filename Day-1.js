// Question 1 (Reverse String)

let str = "saurabh";
let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
}
console.log(reverseStr);


// Question 2 (Find Largest Number)

let arr = [10, 8, 1, 9, 2, 11];
let largetNumOfArr = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (largetNumOfArr < arr[i]) {
        largetNumOfArr = arr[i]
    }
}

console.log(largetNumOfArr);


// Question 3 (Palindrome Check)

let palindromeVal = "madam";
let reverseStr2 = "";

for (let i = palindromeVal.length - 1; i >= 0; i--) {
    reverseStr2 += palindromeVal[i]
}

palindromeVal === reverseStr2 ? console.log(true) : console.log(false);


// Question 4 (Star Pattern)

let num = 6;

for (let i = 0; i < num; i++) {
    let star = "*"
    for (let j = 0; j < i; j++) {
        star += "*"
    }
    console.log(star);
}

