// Question 1 (Create Counter Using Clouser)

function createCounter() {
    let count = 0;
    function counterFun() {
        console.log(count);
        count++
    }

    return counterFun
}

const counter = createCounter()

counter()
counter()
counter()
counter()


// Question 2 (Create Counter With Initial Value)

function createCounter1(val) {
    let count = val;
    function counterFun1() {
        console.log(count);
        count++
    }

    return counterFun1
}

const counter1 = createCounter1(10)

counter1()
counter1()
counter1()
counter1()


// Question 3 (Create Greeting Generator)

function createGreeting(str){
    let val = str;
    function getName(name){
        console.log(`${val} ${name}`);
        
    }
    return getName;
}

const greet = createGreeting("Hello");
greet("Saurabh")


// Question 4 (Create Multiplier Generator)

function createMultiplier(num){
    let val = num;
    function getNum(num1){
        console.log(val*num1);
        
    }
    return getNum;
}

const multiplieWith = createMultiplier(2);

multiplieWith(6)
