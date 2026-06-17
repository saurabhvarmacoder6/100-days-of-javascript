// Q1 (Custom Map)

function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }
    return result;
}

console.log(myMap([1, 2, 3, 4], (num) => num * 2));


// Q2 (Custom Filter)

function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(myFilter([1, 2, 3, 4], (num) => num % 2 === 0));


// Q3 (Calculator Using Callback)

function calculator(num1, num2, opration) {
    let result = 0;
    if (opration === "add") {
        result = num1 + num2
    } else if (opration === "sub") {
        result = num1 - num2
    } else if (opration === "mul") {
        result = num1 * num2
    } else if (opration === "dvi") {
        result = num1 / num2
    } else {
        alert("enter valid input")
        return
    }

    console.log(result);
}

calculator(2, 4, "add");


// Q4 (Process Name)

function processName(name, callback) {
    let result = "";
    if (callback === "toUpperCase") {
        result = name.toUpperCase()
    } else if (callback === "toLowerCase") {
        result = name.toLowerCase()
    }

    console.log(result);

}

processName("saurabh", "toUpperCase")


// Q5 (Custom ForEach)

function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

myForEach([1, 2, 3, 4], (num) => {
    console.log(num);
})


// Q6 (Combine Custom Map And Filter)

function fun(arr) {
    let result = [];
    result = myFilter(arr, (num) => num % 2 === 0);
    result = myMap(result, (num) => num * 10);
    console.log(result);
}

fun([1, 2, 3, 4, 5, 6])