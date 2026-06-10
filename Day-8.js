// Question 1 (Consecutive Sum Window Size = 2)

let arr1 = [1, 2, 3, 4, 5, 6];
let output = [];

for (let i = 0; i < arr1.length - 1; i++) {
    output.push(arr1[i] + arr1[i + 1])
}
console.log(output);


// Question 2 (Maximum Consecutive Sum Window Size = 2)

let arr2 = [2, 4, 1, 8, 5, 2];

function maximumNum(arr) {
    let numArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        numArr.push(arr[i] + arr[i + 1])
    }
    let output = numArr.reduce((res, curr) => {
        return res > curr ? res : curr;
    })

    console.log(output);

}

maximumNum(arr2)


// Question 3 (String Length Without .length)

let str = "javascript";

function checkLength(str) {
    let strLength = 0;
    for (let length of str) {
        strLength++
    }
    console.log(strLength);

}

checkLength(str)