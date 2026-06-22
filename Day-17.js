// Q1 (Longest Consecutive Sequence)

function checkSeq(arr) {
    let count = 1;
    let countArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tem
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i + 1] === ((arr[i]) + 1)) {
            count++
        } else {
            countArr.push(count)
            count = 1
        }
    }

    let numLength = countArr[0];

    for (let i = 0; i < countArr.length - 1; i++) {
        if (numLength < countArr[i + 1]) {
            numLength = countArr[i + 1]
        }
    }

    console.log(numLength);

}

checkSeq([100, 4, 201, 199, 19, 197, 196, 1, 3, 2])


// Q2 (Product Of Array Expect Self)

function fun(arr) {
    let newArr = [];
    let arrOfNum = [];
    let temVal = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] !== arr[i]) {
                newArr.push(arr[j])
            }
        }
        let val = newArr.reduce((acc, curr) => {
            return acc * curr
        })
        arrOfNum.push(val)
        newArr = []
    }
    console.log(arrOfNum);
}

fun([1, 2, 3, 4])


// Q3 (Two Sum Optimized Without Nested Loop)

let target = 9;

function checkInOfSum(arr) {
    let indexOfSum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(Math.abs(arr[i] - target)) && arr.includes(Math.abs((Math.abs(arr[i] - target)) - target))) {
            if (!indexOfSum.includes(arr.indexOf(Math.abs((Math.abs(arr[i] - target)) - target)) && arr.indexOf(Math.abs(arr[i] - target)))) {
                indexOfSum.push(arr.indexOf(Math.abs((Math.abs(arr[i] - target)) - target)), arr.indexOf(Math.abs(arr[i] - target)));
            }
        }
    }

    console.log(indexOfSum);


}

checkInOfSum([3, 6, 7, 2])


// Q4 (Longest Word Without Reapting Chracter)

function checkChr(str) {
    let filteredStr = "";
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] !== str[i + 1] && !filteredStr.includes(str[i])) {
            filteredStr += str[i]
        }
    }
    console.log(filteredStr);

}

checkChr("abcdebcbb")


// Q5 (Rotate Arr K Times)

let K = 2;
function rotateArr(arr) {
    for (let i = 0; i < K; i++) {
        for (let j = arr.length - 1; j > 0; j--) {
            let temVal = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temVal
        }

    }

    console.log(arr);

}

rotateArr([1, 2, 3, 4, 5, 6])