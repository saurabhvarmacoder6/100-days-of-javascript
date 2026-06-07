// Question 1 (Find Unique Elements)

function findUniNum(arr) {

    let numbers = [];
    let uniqueNum = []
    let dublicateNum = [];

    for (let i = 0; i < arr.length; i++) {
        if (!numbers.includes(arr[i])) {
            numbers.push(arr[i])

        } else {
            dublicateNum.push(arr[i])
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        if (!dublicateNum.includes(numbers[i])) {
            uniqueNum.push(numbers[i])
        }
    }

    console.log(uniqueNum);
}

findUniNum([1, 2, 2, 3, 4, 4, 5, 6])


// Question 2 (Reverse Word)


function reverseWord(str) {
    let reverseWord = str.split(" ").reverse().join(" ")
    console.log(reverseWord);
}

reverseWord("I Love Java")


// Question 3 (Find Most Frequent Element and Find Max Occurrence 😂)


function findElem(arr) {
    let obj = {}
    let num = 0;
    let num2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
            if (obj[arr[i]] > num) {
                num = obj[arr[i]]
                num2 = arr[i]
            }
        } else {
            obj[arr[i]] = 1
        }
    }
    console.log(num2);
}

findElem([1, 2, 6, 1, 2, 2, 4, 1, 4, 1])
findElem("javascript")


// Question 4 (Count Digits)

let digit = 123458;
let digitNum = digit.toString().length
console.log(digitNum);

