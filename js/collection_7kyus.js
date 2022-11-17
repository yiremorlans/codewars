//Check if the number(n) is a perfect square!
var isSquare = function(n){
    //Take the floor()ed square root of the number.
      return Math.floor(n**.5) ** 2 === n 
    //Multiply the square root twice.
    //Use boolean equal operator to verify if the product of square root is equal to the number given.
    }
// ALSO Number.isInteger() method returns boolean if number is a whole integer
const isSquare = n => Number.isInteger(Math.sqrt(n));

//Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
  let newStr = ''
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let i =0; i<str.length; i++){
    if (vowels.includes(str[i]) === false) {
      newStr += str[i]
      console.log(newStr)
    }
  }
  return newStr
}
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
function descendingOrder(n){
  let newArr = String(n).split('').sort((a,b) => b-a).join('')
  return +newArr
}
//Return an array of only integers when given a list of positive integers and string.
function filter_list(l) {
  return l.filter(number => Number.isInteger(number))
}
function filter_list(l) {
  return l.filter(Number.isInteger);
}//also passing a method reference with no ()invocation is the same

//Return a string sentence where the beginning letter of every word is uppercase. Ex Hello World
String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
};
//Count the x's and o'x in the string to return true or false if amount is equal
function XO(str) {
  str = str.toLowerCase()
  let x = 0
  let o = 0
  for (let i=0; i<= str.length; i++) {
    if (str[i] === 'x') {
      x++    
    }
    if (str[i] === 'o') {
      o++
    }
  }
 return x === o
}//Simple, readable solution from codewars below 
function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
} 
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
// Write a function that will produce this example: accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
function accum(s) {
  return s.split('').map((element, index) => element.toUpperCase() + element.toLowerCase().repeat(index)).join('-')
}
//Given a string of words, return the length of the shortest word.
function findShort(s){
  let arrOfStr = s.split(' ').map(word => word.length)
  return Math.min(...arrOfStr)
  }
//Sum of the two lowest integers in an array
function sumTwoSmallestNumbers(numbers) {  
  const sorted = numbers.sort((a,b) => a-b)
  return sorted[0] + sorted[1]
}
//Return the middle char of the string. Even s.length should include 2 chars, odd include 1 char.
function getMiddle(s){
  if (s.length % 2 === 0) {
    return s.slice(s.length/2 -1, s.length/2 +1)
  } else {
    return s.slice(s.length/2, s.length/2 +1 )
  }  
}
//Return true/false whether str is isogram(no repeating letters), case sensitive
function isIsogram(str){
  let letters = str.toLowerCase().split('')
  let newSet = [...new Set(letters)]
    return letters.length === newSet.length
}
//same as
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
//Find the sum of all int, positive and negative
function getSum(...values)//turned params (a,b) into (...values) to include use Math.min/max in for loop
{
  let array = []
  for (let i=Math.min(...values); i<=Math.max(...values); i++){
    array.push(i)
  }
    return array.reduce((total, value) => total + value, 0)
}
//Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index.
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))
//also like this solution
function leastLarger(a, i) {
  const targetVal = a[i]
  const largerVals = a.filter(num => num > targetVal)
  const leastLargeVal = Math.min(...largerVals)
  
  return a.findIndex(num => num === leastLargeVal)
} //findIndex returns -1 if not found

//Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  if (cc.length <= 4) 
    return cc

  let masked = cc.split('').slice(0,-4).map(num => '#').join('')
    return masked + cc.slice(-4)                              
}
//ALSO done with a for loop
function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}
cc = cc.join("");
return cc
}
//.padStart exists for this scenario
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}

//Reverse the words in the sentence, preserve the spacing.
function reverseWords(str) {
  let reverseWords;
  if (str.includes('  ')) {
   reverseWords = str.split('  ')
  } else {
    reverseWords = str.split(' ')
  }
  
   reverseWords = reverseWords.map(word => word.split('').reverse().join(''))
  
  if (str.includes('  ')) {
    return reverseWords.join('  ')
  } else {
    return reverseWords.join(' ')
  }
}
//split() and join() preserve the extra space automatically, split would create an empty ' ' in the array.
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

//Largest 5 digit number in a series of nums in a string.
function solution(digits){
  let testingArr = []
  
  for (let i = 0; i< digits.length ; i++) {
    testingArr.push(digits.slice(i, i+5))
  }
  return Number(Math.max(...testingArr))
}
//Return an array of names whose length is only 4 characters.
function friend(friends){
  return friends.filter(name => name.length === 4)
}
//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, no repeating letters, taken from s1 + s2.
function longest(...strings) {
  return [...new Set(strings.join(''))].sort().join('')
}//strings.join('') within new Set combines the array of two string into an array of no repeating letters.
//Remove the minimum value without mutating the array
function removeSmallest(numbers) {
  if (numbers.length === 0  || numbers === undefined) {
    return []
  }

  let min = numbers.indexOf(Math.min(...numbers))
  console.log(min)
  return numbers.filter(function(number, index) {
    if (index !== min) {
      return number
    }
  })
}
//Categorize new member by comparing input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
function openOrSenior(data){
  return data.map(function([age, handicap]) { //use destructuring assignment to unpack each variable in each pair of array
    if (age >= 55 && handicap > 7) {
      return 'Senior'
    } else {
      return 'Open'
    }
  })
}
//Return the amount of pairs of gloves in an array.
function numberOfPairs(gloves){
  let pairsOfGloves = 0
  let objHoldingGloves = {}

  for (let i=0; i< gloves.length; i++) {
    if (!objHoldingGloves[gloves[i]] ) { //checks if objHoldingGloves key exists
      objHoldingGloves[gloves[i]] = 1   //assigns that particular glove [key] to value of 1
    } else {
      objHoldingGloves[gloves[i]] += 1 //if glove color already exists in object, add + 1 to it
    }
   
    if(objHoldingGloves[gloves[i]] === 2){ //if glove color pair exists 
      objHoldingGloves[gloves[i]] = 0 //empty the key
      pairsOfGloves += 1  //add to counter
    }
  }
  return pairsOfGloves
}
//Return true/false if str ends with endings params.
function solution(str, ending){
  return str.endsWith(ending)
}
//the toString function has been disabled. Return bool, string, num, and arrays into string form. 
String.prototype.toString = function(){ 
  return `${this}` //error I was making in code was function syntax and missing this keyword
}
//The coupon code: return if a coupon code is expired based on valid date and coupon code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}//two great solutions better than my nested If statement
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
}
//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
function sumDigits(number) {
  let absole = Math.abs(number)
  let stringNumToArr = String(absole).split('').map(value => +value)
  return stringNumToArr.reduce((total, num) => total + num, 0)
}
//Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
function flattenAndSort(array) {
  return array.flat().sort((a,b) => a-b)
}

//In a press that includes letters up to m, return the amount of errors to str length.
function printerError(s) {
  let printerLetters = 'abcdefghijklm'
  let errorMarks = s.split('').filter(letter => !printerLetters.includes(letter))
  return `${errorMarks.length}/${s.length}`
}

// Sort the numbers in an array, account for empty or null.
function solution(nums){
  return nums === null ? [] : nums.sort((a,b)=> a-b)
}

// Create a function that determines if the integers provided form a triangle.
function isTriangle(...nums){
  let sorted = [...nums].sort((a,b)=> a-b) 
  return sorted[0] + sorted[1]  > sorted[2]
}
// Factorial factory. Create a function that multiplies all the ints up to n.
function factorial (n) {
  let factorialArr = []
  if (n < 0) {
    return null
  }
  for (let i=1; i<=n; i++) {
    factorialArr.push(i)
  }
  return factorialArr.reduce((total, value)=> total * value, 1)
}

// Create a function that filters out all odd numbers.
function getEvenNumbers(numbersArray){
  return numbersArray.filter(value => value % 2 === 0)
}

//Fix string case by which has greater occurance of specific case
function solve(s){
  let upperCase = 0
  let lowerCase = 0
  for(let i=0; i< s.length; i++){
    if(s[i] === s[i].toUpperCase()) {
      upperCase += 1
    } else {
      lowerCase += 1
    }
  }
return upperCase > lowerCase ? s.toUpperCase() : s.toLowerCase()
}

// Create a function that cleans a str from '#' and chars that preceeded '#'
function cleanString(s) {
  let newArr = []
  //loop thru str and push char if not #, when confronted with # in str, remove val from arr.
  for(let i=0; i<s.length; i++){
    if (s[i] == '#'){
      if (newArr.length > 0) { 
        newArr.pop() 
      }
    } else { 
      newArr.push(s[i])
    }
  }
  return newArr.join('')
}
//Anagram detection
var isAnagram = function(test, original) {
  let sortedTest = test.toLowerCase().split('').sort().join('')
  let sortedOr = original.toLowerCase().split('').sort().join('')
  return sortedTest === sortedOr
};

// Create a function that returns an array of indices of capital letters in a string.
var capitals = function (word) {
  let newArr = []
  for (let i=0; i< word.length; i++){
    if (word[i] === word[i].toUpperCase()) {
      newArr.push(i)
    }
  }
  return newArr
};

// Alternate capitalization
function capitalize(s){
  let startUpperCase = ''
  let startLowerCase = ''
  
  for (let i=0; i<s.length; i++) {
    if (i % 2 === 0){
      startUpperCase += s[i].toUpperCase()
      startLowerCase += s[i].toLowerCase()
    } else {
      startUpperCase += s[i].toLowerCase()
      startLowerCase += s[i].toUpperCase()
    }

  }
  return [startUpperCase, startLowerCase]
};

// Remove duplicate words from a string
function removeDuplicateWords (s) {
  let newWords = s.split(' ')
  return [...new Set(newWords)].join(' ')
 }// return Array.from(set).join(' '); is same as ^^^

 // Create a custom greeting function
 var greet = function(name) {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
};

// Create a function that counts n of bumps in string.
function bump(x){
  let bumpIts = 0
  for (let i=0; i<x.length; i++){
    if (x[i] === 'n') {
      bumpIts += 1
    }
  }
  return bumpIts > 15 ? 'Car Dead' : 'Woohoo!'
}
// Clever one liner using split by n
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

// Remove everything after the # in the url.
function removeUrlAnchor(url){
  if (url.includes('#')) {
    let octoIndex = url.indexOf('#')
    return url.slice(0, octoIndex)
  } else {
    return url
  }  
} // return url.split('#')[0] also works

// Sort gift code in alphabetical order
function sortGiftCode(code){
  return code.split('').sort().join('')
}
//sort((a-b)=> a-b) for numbers and sort() for letters

// Collatz conjecture function performs operation on n to reduce down to 1. Return the length
function collatz(n) {
  let counter = 1
  while (n > 1) {
    counter ++
    n = n % 2 === 0 ? n / 2 : (n * 3) + 1
  }
  return counter 
}

// Create a function that returns the first longest digit int in an array
function findLongest(array){
  let numberLength = array.map(value => value.toString().length)

  let longestLength = Math.max(...numberLength)

  let resultIndex = numberLength.indexOf(longestLength)

  return array[resultIndex]    
}

// Return if the sum of all ints in the array is even or odd
function oddOrEven(array) {
  return array.reduce((total, value) => total + value, 0) % 2 === 0 ? 'even' : 'odd'
}

// Return the min and max of ints in an array as an array
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}
// Create a function that counts all the integers from start - end without fives
function dontGiveMeFive(start, end) {
  let newArr = []
  for (let i=start; i<=end; i++){
      newArr.push(i.toString())
  }
  newArr = newArr.filter(value => value.split('').includes('5') ? '' : value)
  return newArr.length
}
// ALTERNATIVE SOLUTION 
function dontGiveMeFive(start, end){
  let res = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) res.push(i);
  }
  return res.length;
}

// Return the two oldest ages in an array
function twoOldestAges(ages){
  let sortedAges = ages.sort((a,b) => b-a)
  return [sortedAges[1], sortedAges[0]]
}

// Create a function that returns true/false if ever value is below given limit
function smallEnough(a, limit){
  let belowLimit = (value) => value <= limit
  return a.every(belowLimit)
  // return a.every(value => value <= limit)
 } 

// Return the index of the middle number in a triplet array
function gimme (triplet) {
  let tripletCopy = triplet.slice()
  tripletCopy = tripletCopy.sort((a,b) => a-b)
  let middleNum = tripletCopy[1]
  return triplet.indexOf(middleNum)
}

// Create a function that returns the values in an array as an object key value pairs in array
var number=function(array){
  if (array.length === 0) {
    return []
    }
  return array.map((element, index)=> `${index +1}: ${element}`)
}

//Fizzbuzz
function fizzbuzz(n){
 let fizzBuzzArray = []
 for (let i=1; i<=n; i++){
   if (i % 3 === 0 && i % 5 === 0){
     fizzBuzzArray.push('FizzBuzz')
   } else if (i % 5 === 0){
     fizzBuzzArray.push('Buzz')
   } else if (i % 3 === 0){
     fizzBuzzArray.push('Fizz')
   } else {
     fizzBuzzArray.push(i)
   }
 }
  return fizzBuzzArray
} 
// Row weights
function rowWeights(array){
  let teamTwo = []
  let teamOne = []
  array.map(function(value, index){
    if (index % 2 !== 0) {
      teamTwo.push(value)
    } else {
      teamOne.push(value)
    } 
  })
  return [teamOne.reduce((total, value)=> total + value, 0),teamTwo.reduce((total, value)=> total + value, 0)]
}
// Solution on one loop
function rowWeights(array){
  let teamOne = 0
  let teamTwo = 0
  for (let i=0; i< array.length; i++){
    if (i % 2 !== 0){
      teamTwo += array[i]
    } else {
      teamOne += array[i]
    }
  }
  return [teamOne, teamTwo]
}

// Sort in lexicographical order
sortme = function(names){
  return names.sort()
}

// Create a function that returns the maximum product of two consecutive integers in an array
function adjacentElementsProduct(array) {
  let productArr = []
  for (let i=0; i<array.length-1; i++){
    let product = array[i] * array[i+1]
    productArr.push(product)
  }
  return Math.max(...productArr)
}

// Create four functions that return different sections and indices in an array 
const head = (array) => {
  return array[0]
}

const tail = (array) => {
  return array.slice(1)
}

const init = (array) => {
  return array.slice(0, -1)
}

const last = (array) => {
    return array[array.length -1]
}

// Create a function that sorts language test results of an object into an array with highest scoring languages
function myLanguages(results) {
  let lanArr = []
  //objects cannot be sorted, so Object.entries returns an array of array key,value pairs which can then be sorted by their index
  for (const [key, value] of Object.entries(results)){
    if (value >= 60) {
      lanArr.push([key,value])
    }
  } 
  lanArr.sort((a,b)=> b[1] - a[1])
  return lanArr.map(value => value[0])
}

// Create a function that totals str ints and num ints and returns the result from subtracting the two totals.
function divCon(x){
  let strInt = 0
  let intType = 0
  x.map(value => {
    if (typeof value === 'string') {
      strInt += +value
    } else {
      intType += value
    }
  })
  
  return intType - strInt
}

// Write a function that returns whether a number is balanced or unbalanced
function balancedNum(number){
  if (String(number).length < 3) {
    return 'Balanced'
  } 
 let head = ''
 let tail = ''
  if (String(number).length % 2 === 0) {
    head = String(number).slice(0, (String(number).length / 2) -1 )
    tail = String(number).slice((String(number).length / 2) + 1 )
  } else {
    head = String(number).slice(0, (String(number).length / 2) )
    tail = String(number).slice((String(number).length / 2) + 1 )
  }

  return head.split('').reduce((total, current)=> total + +current, 0) === 
          tail.split('').reduce((total, current)=> total + +current, 0) ? 'Balanced' : 'Not Balanced'
}

// Write a function that returns the total amount of people left over from a bus in an array of array pairs --> [10,0], [3,4], [5,6]

var number = function(busStops){
  let total = 0
  for (let key in busStops){
    total += busStops[key][0]
    total -= busStops[key][1]
  }
  return total
}

// Create a function that returns the sum of the values that only appear once in the array
function repeats(array) {
	let intMap = {}
	for (let value of array) {
		if (!intMap.hasOwnProperty(value)) {
			intMap[value] = 1
		} else {
			intMap[value] += 1
		}
	}
	let valuesArr = []
	for (let [key,value] of Object.entries(intMap)){
			if (value === 1) {
				valuesArr.push(+key)
			}
		}
	return valuesArr.reduce((total, value) => total + value, 0)
}


function repeats(array){
	return array.filter(value => array.indexOf(value) === array.lastIndexOf(value)).reduce((total, value)=> total + value, 0)
	
}

// Even numbers in an array
function evenNumbers(array, number) {
  let onlyEvens = array.filter(value => value % 2 === 0)
  return onlyEvens.slice(onlyEvens.length -number)
}

//Create a function that returns an array with array subsets of the given size
function chunkArray(array, size) {
	let newChunk = []
	for (let i = 0; i < array.length; i += size) {
		newChunk.push(array.slice(i, i + size))
	}
			return newChunk
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))

// Create own filter function
function arrayFilter(arr, func) {
  for (let elem of arr) {
    if (func(elem)) {
      return elem
    }
  }
  return undefined
}

function arrayFilter(arr, func) {
  let filteredArray = arr.filter(func);
  return filteredArray[0] ? filteredArray[0] : undefined;
}

function arrayFilter(arr, func) {
  return arr.find(func)
} // or returns undefined

// Reverses a string
function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, '')
}

// Reverses an integer
function reverseInteger(num) {
  let reversedNumber = parseInt(reverseString(num.toString()))
  //parseInt() will parse up to the first non-digit character, Number() will try to convert the entire string.
  // Number('123-') --> NaN vs parseInt('123-') --> 123
  return (reversedNumber * Math.sign(num))
  //(123 * -1 = -123)
  // Math.sign() returns 1 if positve num is passed, -1 if negative
}

// Implement a recursive factorial function
function factorial(n) {
	if (n === 0) {
		return 1
	} else {
		return n * factorial(n - 1)
	}
}

console.log(factorial(5))

// Implement bubble sort
// [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr){
  for (let i=0; i<arr.length; i++){
    for (let b=0; b<arr.length; b++){
      if (arr[b] > arr[b+1]) {
        let temp = arr[b]
        arr[b] = arr[b+1]
        arr[b+1] = temp
      }
    }
  }
  return arr
}

// Return the nth minimun value in an array

function nthSmallest(array, num) {
	let arrayCopy = [...array]
	arrayCopy.sort((a, b) => b - a)
	return arrayCopy[arrayCopy.length - num]
}

const nthSmallest = (array, num) => array.sort((a, b) => a -b)[num -1] 

// Write a function that returns a str of open and closing parenthesis if the character appears once, or duplicate amount of times

function parens(str){
  return str.toLowerCase().split('').map((value, index, arr) => arr.indexOf(value) === arr.lastIndexOf(value) ? '(' : ')').join('')
}

function parens(str) {

	let cache = {}
	for (let letter of str.toLowerCase()) {
		(!cache.hasOwnProperty(letter)) ? cache[letter] = 1 : cache[letter] += 1
	}

	let newStr = ''

	for (let letter of str.toLowerCase()) {
		cache[letter] <= 1 ? newStr += '(' : newStr += ')'
	}
	return newStr
}

// Return true or false if the str provided is repeating the same character w/o any loops!
function hasOneChar(s) {
    return s[0].repeat(s.length) === s
}

// Return the factorial of n
const factorial = n => {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n -1)
  }
};

// Sort into an array by the last character in the word
function last(x){
  return x.split(' ').sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
} 
//also .sort((a,b) => a[a.length-1].localeCompare(b[b.length-1)

// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25

function makeChange(input) {
	//input integer only positive whole number
	//result is an integer, least number of coins to sum input
	// assign coin values to array
	// assign a coin counter
	//while input > 0 iterate through coin values subtracting from input
	let counter = 0

	while (input > 0){
		if (input >= 25) {
			input = input - 25
			counter ++
		} else if (input >= 10) {
			input = input - 10
			counter ++
		} else {
			input = input - 5
			counter ++
		}
	}
	return counter
}

// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
function findDeletedNumber(sortArr, mixArr) {
	if (sortArr.length === 0 || sortArr.length === mixArr.length) return 0;

	let arrSum = sortArr.reduce((total, value)=> total + value, 0) 
		let arrSum2 = mixArr.reduce((total, value)=> total + value, 0)
	return arrSum - arrSum2
} // linear solution, best choice first time around

function findDeletedNumber(sortArr, mixArr) {
	if (sortArr.length === 0) return 0;
	let newArr = sortArr.filter(value => !mixArr.includes(value))
	return newArr.length === 0 ? 0 : newArr[0]
} // O(n^2) includes is linear inside of a looping method like filter


function findDeletedNumber(sortArr, mixArr) {
	if (sortArr.length === 0 || sortArr.length === mixArr.length) return 0;
	let mixSet = new Set(mixArr)
	return sortArr.filter(value => !mixSet.has(value))[0]
}// O(n) creates a new Set which uses more memory, but checking value of mixSet is O(1) instead of O(n) eliminating nested loop

// Create a function that takes an average length from an arr and returns a new arr w/ each values length as the average
function averageLength(arr) { 
  let arrAvg = Math.round(arr.reduce((total, value) => total + value.length, 0) / arr.length)
  return arr.map(value => value.slice(0,1).repeat(arrAvg))
}

function averageLength(arr) { 
  let arrAvg = Math.round(arr.reduce((total, value) => total + value.length, 0) / arr.length)
  return arr.map(value => value[0].repeat(arrAvg))
}
