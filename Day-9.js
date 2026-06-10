// Question 1 (Maximum sum of 3 Consecutive Numbers Window Size = 3 And Without Reduce And Sort Method)

function maximumNum(arr) {
    let numArr = [];
    let maxNum = numArr[0] || 0;

    for (let i = 0; i < arr.length - 2; i++) {
        let num = arr[i] + arr[i + 1] + arr[i + 2];
        numArr.push(num)
        if (numArr[i] > maxNum) {
            maxNum = numArr[i]
        }
    }
    console.log(maxNum);

}

maximumNum([1, 2, 6, 4, 5, 3])


// Question 2 (Minimum Number in Array)

function minimumNum(arr) {
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    console.log(minNum);

}

minimumNum([10, 5, 8, 2, 20, 1])


// Question 3 (Count Occurrences)

let find = 2;
let arr = [1, 2, 2, 3, 2, 4];

function countOccur(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            count++
        }
    }

    console.log(count);

}

countOccur(arr)


// Question 4 (Find Index of Largest Number)

function findIndex(arr) {
    let indexOfNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[indexOfNum]) {
            indexOfNum = i
        }
    }

    console.log(indexOfNum);

}

findIndex([4, 8, 1, 10, 2, 6])


// Question 5 (Toggle Case)

function toggleChar(str) {
    let toggleVal = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            toggleVal += str[i].toUpperCase()

        } else {
            toggleVal += str[i].toLowerCase()

        }
    }
    console.log(toggleVal);
}

toggleChar("JaVaScRiPt")


// Question 6 (Merge Value Without Reduce)

let numArr = [1, 2, 3, 4, 5, 6];
let mergeVal = 0;

for (let val of numArr) {
    mergeVal += val
}

console.log(mergeVal);
