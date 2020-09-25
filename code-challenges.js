// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// Fibonacci sequence adds the previous number to the next number (0 + 1 = 1 -> 1 + 1 = 2 -> 1 + 2 = 3 -> 2 + 3 = 5 ...)
// create a function that takes a parameter that is the length of the Fibonacci sequence
const fibonacci = (lengthOfFibSequence) => {
    // need to make a placeholder variable that will hold the value of the previous value (to add to the next)
    // start at 0
    let previousValue = 0
    // declare a current sum variable that holds the sum of the last sum and the previous number
    let currentSum = 0
    // create an array to hold the Fibonacci sequence which starts at 1
    let fibonacciSequence = [1]
    // variable that holds the previous sum (which was the currentSum); initialized to the first value in array
    let previousSum = fibonacciSequence[0]
    // run this math sequence of adding the previous number to recent sum of the previous 2 numbers to get the current sum
    // use length - 1 because 1 is always the first value and starting value that does not come from the sum of a previous number
    for (let i = 0; i < lengthOfFibSequence - 1; i++) {
        currentSum = previousSum + previousValue
        //reassign the previousValue to be the previousSum
        previousValue = previousSum
        // reassign the previousSum to currentSum for the next loop
        previousSum = currentSum
        // push the current sum to new array
        fibonacciSequence.push(currentSum)
    }
    return fibonacciSequence
}

// console.log(fibonacci(10))



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// declare function that takes array of mixed data types as argument
const filterNumInAscendingOrder = (array) => {
    // assign a new variable that house the new array of only numbers (and negative values)
    // filter through array to find only number data types AND odd numbers (so can't use  % 2 === 1 because won't approve of negative numbers)
    let onlyNumInAscendingOrder = array.filter(value => {
        return typeof value === "number" && value % 2 !== 0
    })
    // sort the numbers from least to greatest so.. arrayName.sort((a,b) => a - b)
    // return that array
    return onlyNumInAscendingOrder.sort((a,b) => a - b)
}

// console.log(filterNumInAscendingOrder(fullArr1))
// console.log(filterNumInAscendingOrder(fullArr2))



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”
// declare function that accepts a string
const middleLetterOfString = (string) => {
    // declare variable that will hold the middle letter and intialize to empty string
    let middleLetter = ""
    // remember relationship between string length and index is length - 1 !!
    // use Math.floor() to round down
    // console.log(string.length/2)
    let middleIndex = Math.floor(string.length/2)
    // only works for odd valued length strings so it will be the length divided by two rounded up to get that index of that character
    if (string.length % 2 !== 0) {
        return middleLetter = string.charAt(middleIndex)
    } else {
        // else if even length string, return character at index of middle - 1 (because length - 1 : index) and middle
        return middleLetter = string.charAt(middleIndex - 1) + string.charAt(middleIndex)
    }
}

// console.log(middleLetterOfString(middleLetters1))
// console.log(middleLetterOfString(middleLetters2))



// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
// declare the instance of a class called Sphere that contains the radius
class Sphere {
    // the constructor can has a parameter that is the user's radius input
    constructor(radius) {
        this.radius = radius
    }
    // create function that gets the area of sphere with a given radius
    getArea() {
        return 4 * Math.PI * (this.radius ** 2)
    }
}

var sphereTest1 = new Sphere(2).getArea()
// expected output: 50.26548...
var sphereTest2 = new Sphere(10).getArea()
// expected output: 1256.637061...
var sphereTest3 = new Sphere(15).getArea()
// expected output: 2827.433388...
// console.log(sphereTest1)
// console.log(sphereTest2)
// console.log(sphereTest3)




// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// declare function that takes array as argument
const accumulateSumOf = (array) => {
    // declare a previous sum variable and initialize to 0
    let previousSum = 0
    // map through the array and add the previous sum to the next value in the array
    let accumulatedSumArray = array.map(value => {
        return previousSum += value
    })
    // return the accumulating sum
    return accumulatedSumArray
}

console.log(accumulateSumOf(numbersToAdd1))
console.log(accumulateSumOf(numbersToAdd2))
console.log(accumulateSumOf(numbersToAdd3))