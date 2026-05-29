// Question 1 (Remove Duplicates)

let arr = [1, 2, 2, 3, 4, 4, 5, 6];
let arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
        arr2.push(arr[i])
    }
}

console.log(arr2);

// Second Method

let val = new Set(arr)
console.log(val);


// Question 2 (Find Frequency of Elements)

let newArr = [1, 2, 2, 3, 1, 1];
let obj = {};

for (let i = 0; i < newArr.length; i++) {
    if (obj[newArr[i]]) {
        obj[newArr[i]]++
    } else {
        obj[newArr[i]] = 1
    }
}

console.log(obj);


// Question 3 (Check Prime Number)

let count = 1;

function checkPrimeNum(num) {
    for (let i = 1; i < 10; i++) {
        if (num % i === 0 && num !== 2 && num !== 3 && num !== 5 && num !== 7) {
            count++
        }
    }
    count === 2 || count === 1 ? console.log(num, " is Prime number") : console.log(num, "is Not Prime Number");
}

checkPrimeNum(25)


// Question 4 (Find Longest Word)

let str = "i love You";

function findLongNum(str) {
    let str2 = str.split(" ")
    let longestWord = str2.reduce((acc, curr) => {
        return acc.length > curr.length ? acc : curr
    })

    console.log(longestWord);

}

findLongNum(str)


// Question 5 (Triangle Pattern)

let line = 10;

for (let i = 1; i <= line; i += 2) {
    let star = ""
    for (let j = 0; j <= line; j++) {
        if (j <= line - i) {
            star += " "
        } else {
            star += "*"
        }
    }
    console.log(star);

}


// Question 6 (Check Palindrome without using reverse())


function checkPalindrome(str) {
    let isPalindrome = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[(str.length - 1) - i]) {
            isPalindrome = true
        } else {
            isPalindrome = false
        }
    }
    console.log(isPalindrome);
}


checkPalindrome("madam")


