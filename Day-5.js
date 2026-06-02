// Question 1 (Find Middle Missing Number)

let arr1 = [55, 56, 58, 59, 61, 62];
let missNum = []

function findNum(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i] + 1 !== sortedArr[i + 1]) {
            missNum.push(sortedArr[i] + 1)
        }

    }
    console.log(missNum);

}

findNum(arr1)


// Question 2 (Find Largest And Smallest Number)

let arr2 = [4, 2, 5, 6, 1, 8, 9];

function searchNum(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(`Largest Number = ${sortedArr[sortedArr.length - 1]} Samllest Number = ${sortedArr[0]}`);

}

searchNum(arr2)


// Question 3 (Check Angram)

let str1 = "silent"
let str2 = "listen"


function checkAngram(str1, str2) {
    if (str1.length === str2.length) {
        let arrOfstr1 = str1.split("").sort().join("")
        let arrOfstr2 = str2.split("").sort().join("")

        arrOfstr1 === arrOfstr2 ? console.log("Angram")
            : console.log("Not Angram");
    } else {
        console.log("Not Angram");

    }

}

checkAngram(str1, str2)


// Question 4 (Find Even Numbers )

function findEvenNumbers(arr) {
    let evenArr = arr.filter((num) => {
        return num % 2 === 0
    })
    return evenArr
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));


// Question 5 (Rotate Array )

let numArr = [1, 4, 5, 8, 3, 2, 4]
let rotate = 2;

function rotateArr(arr) {
    for (let i = 1; i <= rotate; i++) {
        for (let j = arr.length - 1; j > 0; j--) {
            let temVal = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temVal
        }
    }
    console.log(arr);

}

rotateArr(numArr)