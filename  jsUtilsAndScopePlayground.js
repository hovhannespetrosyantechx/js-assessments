// Part A: JavaScript Utilities Library (Functions)

// Area if a rectangel
const Area = function (w, h) {
    return w * h;
}
console.log(Area(3, 4));

// Check if n is even
const isEven = function (n) {
    if (n % 2 === 0) {
        return `${n} is even`;
    }
    return `${n} is not even`;
}
console.log(isEven(3));


// Check if array is empty
function isEmpty(arr) {
    if (arr.length === 0) {
        return 'array is empty'
    }
    return 'array is not empty';
}
console.log(isEmpty([1, 2, 3]));

// Raise elemtns of an array by power of 2
function pow2(arr) {
    for (let i = 0; i > arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    return arr;
}
console.log(pow2([2, 3, 4]));

// Repeat 3 times 
const threeTimes = (text) => {
    for (let i = 0; i < 3; i++) {
        console.log(`${i + 1} ${text}`);
    }
}
threeTimes('lorem')

// Check if text contians n
const nInText = (text, n) => {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === n) {
            return true;
        }
    }
    return false;
}
console.log(nInText('foss', 'g'))



// Part B: Scope Simulation & Analysis

let lvl = 23; //lvl is declared in golbal scope so it is avalabe everywhere
function evaluate() {
    var message = 'Keep going'; // message is declared insde evaluate(), it is accessible only inside the funtions scope 
    if (lvl > 10 && lvl < 40) { 
        let status = 'Novice';
        const total = 100;
    }
    function data(){ 
        console.log(lvl); // data() has access to lvl becaouse its global 
        console.log(message); // data() has access to message because they both are inside the scope of evaluate()
        console.log(status);
        console.log(total);
        // status and total are only abalabe insde the if block (where they were declared), if they were var they would be accessuble in data()

    }
    data(); // data() is only avalabe insde its parents scope 
}

evaluate();




