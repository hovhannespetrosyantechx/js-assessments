// Part A: JavaScript Utilities Library (Functions)

// Area if a rectangel
const Area = function(w, h) {
    return w * h;
}
console.log(Area(3, 4));

// Check if n is even
const isEven = function(n) {
    if (n % 2 === 0) {
        return `${n} is even`;
    }
    return `${n} is not even`;
}
console.log(isEven(3));


// Check if array is empty
function isEmpty(arr){
    if (arr.length === 0){
        return 'array is empty'
    }
    return 'array is not empty';
}
console.log(isEmpty([1,2,3]));

// Raise elemtns of an array by power of 2
function pow2(arr){
    for (let i = 0; i > arr.length; i++){
        arr[i] = arr[i] ** 2;
    }   
    return arr;
}
console.log(pow2([2,3,4]));

// Repeat 3 times 
const threeTimes = (text) => {
    for (let i=0; i<3; i++){
        console.log(`${i+1} ${text}`);
    }
}
threeTimes('lorem')

// Check if text contians n
const nInText = (text, n) =>{
    for (let i=0; i< text.length; i++){
        if (text[i] === n){
            return true;
        }
    }
    return false;
}
console.log(nInText('foss', 'g'))
