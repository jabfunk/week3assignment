// #1
const ages = [3, 9, 23, 64, 2, 8, 28, 93]

//subtract value of first element from value of last element
const subtract = ages.pop() - ages[0]
console.log(subtract)

//add new age
ages.push(35)
console.log(ages)

//loop to iterate through array and calculate average age 
const average = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log(average);

// #2
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// #3 accessing last element in array 
const lastItem = names[names.length -1]
console.log(lastItem)

// #4 accessing first element in array 
const firstItem = names[0]
console.log(firstItem)

//#5 new array 
let lengths = names.map(function(element) {
    return element.length; 
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue; 
}); 
console.log(sum);
    
// #7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)
function twoParameters(word, n) {
    var parameters = " ";
    while (n > 0) {
        parameters += word;
        n--;
    }
    return parameters;
}
twoParameters("Hello", 3);

// #8 function that takes two parameters and returns a full name
function fullName(first, last) {
    return first + " " + last 
}

fullName("Julie", "Boehm")

// #9 Function that takes array of numbers and returns true if sum > 100
let numbers = [1, 3, 5, 9, 101];

let sumNumber = numbers.reduce(function(a, b) {
    return a + b; 
}, 0);
console.log(sumNumber)

function isHundred(sumNumber) {
    if (sumNumber >= 100) {
        return true
    } else {
        return false
    }
}


// #10 function that takes array of numbers and returns average
function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [1, 5, 2, 3, 7];
var a = ArrayAvg(myArray);
console.log(a)

// #11 function takes two arrays of numbers and returns true if average in first array is greater than average in second array
function twoArrays(array1, array2) {

}

// #12 function called willBuyDrink that takes a boolean isHotOutside and a number moneyInPocket and returns true if hot outside and if money is greater that 10.50



// #13 function solves a problem - write what that function does 