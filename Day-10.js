// Question 1 (Check Sorted Array)

function isSorted(arr) {
    let sortedArr = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1]) {
            sortedArr = true;
        } else {
            sortedArr = false;
            break;
        }
    }

    console.log(sortedArr);
}

isSorted([1, 2, 2, 3, 4, 5, 6]);


// Question 2 (Count Positive , Zero And Negative Number)

function checkNum(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {
            !obj["Zero"] ? obj["Zero"] = 1 : obj["Zero"]++;
        } else if (arr[i] > 0) {
            !obj["Positive"] ? obj["Positive"] = 1 : obj["Positive"]++;
        } else {
            !obj["Negative"] ? obj["Negative"] = 1 : obj["Negative"]++;
        }

    }
    console.log(obj);
}

checkNum([-2, 5, 1, 8, 0, -4])


// Question 3 (Reverse String Using Two Pointer)

function reverseStr(str) {
    let strArray = str.split("")
    for (let i = 0; i < strArray.length / 2; i++) {
        let tem = strArray[strArray.length - (i + 1)]
        strArray[strArray.length - (i + 1)] = strArray[i]
        strArray[i] = tem;
    }
    console.log(strArray.join(""));
}

reverseStr("javascript");


// Question 4 (Find Pare With Given Sum)

let target = 7;

function findPareSum(arr) {
    let pair = []
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target && !pair.includes(arr[i]) && !pair.includes(arr[j])) {
                pair.push(arr[i], arr[j], "or")

            }
        }

    }
    pair.pop()
    console.log(pair);
}

findPareSum([1, 2, 3, 1, 5, 6, 4]);


// Question 5 (Remove Fasly Value)

function removeFalsyVal(arr) {
    let positiveVal = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            positiveVal.push(arr[i]);
        }
    }
    console.log(positiveVal);
}

removeFalsyVal([0, 1, false, 2, "", 3, null, 4, " ", {}])


// Question 6 (Check Plaindrome Using Two Pointer)

function checkPalindrome(str) {
    let isPalindrome = true;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] === str[str.length - (i + 1)]) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
            break;
        }
    }
    console.log(isPalindrome);
}

checkPalindrome("level")