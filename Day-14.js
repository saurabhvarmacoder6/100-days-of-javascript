// Q1 (Resolve Promise After 2 Second)

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Submited")
    }, 2000)
}).then((res) => {
    console.log(res);
})


// Q2 (Reject Promise After 1 Second)

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Internal Server Error")
    }, 1000)
}).catch((err) => {
    console.log(err);
})


// Q3 (Resolve User Using .then())

function getUser() {
    return new Promise((resolve, reject) => {
        resolve("Saurabh Kumar")
    })
}

getUser().then((res) => {
    console.log(res);
})


// Q4 (Reject User Using .catch())

function getUser() {
    return new Promise((resolve, reject) => {
        reject("User Not Found")
    })
}

getUser().catch((err) => {
    console.log(err);
})


// Q5 (Check Age With Promise)

function checkAge() {
    let age = 14
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible")
        } else {
            reject("Not Eligible")
        }
    })
}


checkAge()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
