// Q1 (Custom Find)

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            console.log(arr[i]);
            break;
        }
    }
}

myFind([1, 2, 3, 4, 5, 6], (num) => num > 3)


// Q2 (Custom Every)

function myEvery(arr, callback) {
    let isTrue = true;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            isTrue = true;
        } else {
            isTrue = false;
            break;
        }
    }
    console.log(isTrue);
}

myEvery([2, 4, 6], (num) => num % 2 === 0)


// Q3 (Custom Some)

function mySome(arr, callback) {
    let isTrue = true;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            isTrue = true;
            break;
        } else {
            isTrue = false;
        }
    }
    console.log(isTrue);

}

mySome([1, 4, 5, 3], (num) => num % 2 === 0)


// Q4 (Student Mark Analyzer)

let dataOfStudent = [
    { "name": "Saurabh", "marks": 70 },
    { "name": "Rohan", "marks": 99 },
    { "name": "Aman", "marks": 90 }
]

function checkMarks(arr) {
    let topper = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        if (topper.marks < arr[i + 1].marks) {
            topper = arr[i + 1]
        }
    }
    console.log(`Topper = ${topper.name}`);
}

checkMarks(dataOfStudent)


// Q5 (Delete Duplicate Object)

let arrOfObj = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" },
]

function removeDuplicate(arr) {
    let filtredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!filtredArr.some(obj => obj.id === arr[i].id)) {
            filtredArr.push(arr[i])
        }
    }
    console.log(filtredArr);
}

removeDuplicate(arrOfObj)