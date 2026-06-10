// Question 1 (Find Intersection of Two Array)

let arr1 = [1, 2, 3, 4, 5, 10];
let arr2 = [3, 4, 5, 6];
let intersecArr = [];

for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
        intersecArr.push(arr1[i])
    }
}

console.log(intersecArr);


// Question 2 (Find First Non-Repeating Chracter)

function findChar(val) {
    let str = val.toLowerCase();
    let str1 = '';
    let nonReapVal = '';
    let reapVal = '';

    for (let i = 0; i < str.length; i++) {
        if (!str1.includes(str[i])) {
            str1 += str[i]
        } else {
            reapVal += str[i]
        }
    }


    for (let i = 0; i < str1.length; i++) {

        if (!reapVal.includes(str1[i])) {
            nonReapVal += str1[i]
        }
    }

    console.log(nonReapVal[0]);

}

findChar("express")


// Question 3 (Move All Zeroes to End)

function moveZero(arr) {
    let arr1 = arr.reverse()
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 0) {
            newArr.push(arr1[i])
        } else {
            newArr.unshift(arr1[i])
        }
    }
    console.log(newArr);

}

moveZero([0, 1, 0, 3, 12, 0, 6, 3])


// Question 4 (Number Pyramid)

let line = 6;

for (let i = 1; i <= line; i++) {
    let str = ""
    let num = 1;
    for (let j = 1; j <= i; j++) {
        str += num;
        num++
    }
    console.log(str);

}


// Question 5 (Count Even Odd And Object)

function separatNum(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (!obj["even"]) {
                obj["even"] = 1;
            } else {
                obj["even"]++
            }

        } else {
            if (!obj["odd"]) {
                obj["odd"] = 1;
            } else {
                obj["odd"]++
            }
        }
    }
    console.log(obj);

}

separatNum([1, 2, 3, 4, 5, 6, 7])

