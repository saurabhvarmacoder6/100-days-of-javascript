// Q1 

async function getUser() {
    return Promise.resolve("saurabh kumar")
}

async function showUser() {
    const user = await getUser();
    console.log(user);

}

showUser()


// Q2

async function getAge() {
    return Promise.resolve(19)
}

async function showAge() {
    const age = await getAge();
    console.log(age);

}

showAge()


// Q3

async function getError() {
    return Promise.reject("server error")
}

getError()
    .then((res) => {
        console.log(res);

    })
    .catch((err) => {
        console.log(err);
    })


// Q4 

async function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 2000);
    })
}

async function showDelayVal() {
    const val = await delay();
    console.log(val);
}

showDelayVal()


// Q5

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Saurabh Kumar")
        }, 2000);
    })
}

async function showData() {
    console.log("Loading...");
    let data = await getData();
        console.log(data);
    
}

showData()