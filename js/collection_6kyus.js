//Fizzbuzz with a twist
function solution(number){
    let newArr = []
    for (let i=0;i< number; i++){
      newArr.push(i)
    }
    return newArr.filter(number => number % 3 === 0 || number % 5 === 0 || number % 15 === 0)
                 .reduce((total, num) => total + num, 0)
    }
// Cleaner solution
function solution(number){
    var sum = 0;
    for (var i = 3; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
  }
//Create a str in phone number format from an array of numbers up to 9.
function createPhoneNumber(numbers){
    let areaCode = ''
    let digits = ''
    numbers.splice(6,0, '-')
    for (let i=0;i<numbers.length;i++) {
      if (i <3) areaCode += numbers[i] 
      else digits += numbers[i]
    }
    return `(${areaCode}) ${digits}` 
  }
  //clever solution using reduce to return string
  function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
 }
 //good traditional for loop, readability
 function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";   
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }  
    return format;
  }

//Implement a function that returns an array of the elements in the same order, without repeating chars or nums.
var uniqueInOrder=function(iterable){
  let newArr = []
  for(let i=0; i< iterable.length; i++){
    if (iterable[i] !== iterable[i+1]) {
      newArr.push(iterable[i])
    }
  }
  return newArr
}
//Find the odd int, return the int that appears odd amount of times.
function findOdd(A) {
  let objHoldingNums = {}
  
  for (let i=0; i< A.length; i++){ 
    if (!objHoldingNums[A[i]]) {
      objHoldingNums[A[i]] = 1
    } else {
      objHoldingNums[A[i]] += 1
    }
  }//goes through array and stores int with its iterations as values
  
  for (const [key, value] of Object.entries(objHoldingNums)) { //deconstructuring params to access both key/value
    if (value % 2 !== 0) {
      return +key //key is stored as string when placed in obj, so it must be returned as int
    }
  }//order of the array returned by Object.entries() is the same as that provided by a for in loop 
}
//Array method solutions
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
//Implement the function which takes an array containing the names of people that like an item. 
function likes(names) {
  switch (names.length) {
    case 0 : return `no one likes this`
    case 1 : return `${names} likes this`
    case 2 : return `${names[0]} and ${names[1]} like this`
    case 3 : return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default : return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
    }
}

//Count characters in your string and return them as an object.
function count (string) {  
  let storageObj = {}
  
  if (string.length === 0) {
    return {}
  }

  for (let i=0;i<string.length; i++){
    if (!storageObj[string[i]]) {
      storageObj[string[i]] = 1
    } else {
      storageObj[string[i]] += 1
    }
  }
return storageObj
}
// great solution using reduce
function count (string) {  
  if (!string) return {};
  return string.split('').reduce( function (tally, letter) {
    tally[letter] = (tally[letter] || 0) + 1; //if tally[letter] exists +1, else create w/value of 0 + 1
    return tally;
  }, {});//return object value
}
//also good forEach solution with ternary
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
//Implement a function which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order.
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
// Sum of Digits / Digital root is the recursive sum of all the digits in a number. EX:
//  16  -->  1 + 6 = 7
//  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
function digital_root(n) {
  let reducedValue = String(n).split('').reduce((total, value) => +total + +value, 0)
  while (reducedValue.toString().length > 1) {
    reducedValue = String(reducedValue).split('').reduce((total, value) => +total + +value, 0)
  } 
  return reducedValue
}
//clever solution
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}
//Return a string where words greater than 4 chars in length are reversed.
function spinWords(string){
  return string.split(' ').map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ')
 }
 //Count the number of duplicates. Return the amount of chars that appear more than once.
 function duplicateCount(text){
  text = text.toLowerCase()
  
  let objHoldingValues = {}
  //if iterable value doesn't exist in obj, add it and assign 1, else += 1
  for (let i = 0; i<text.length; i++){ 
    if (!objHoldingValues[text[i]]) {
      objHoldingValues[text[i]] = 1
    } else {
      objHoldingValues[text[i]] += 1
    }
  }
  
  let newArr = []
  //iterate through keys in obj, if value was tallied more than once, add it to array
  for (const key in objHoldingValues){
    if (objHoldingValues[key] > 1) {
      newArr.push(key)
    }
  }
  //array will contain each instance that appeared more than once
  return newArr.length
}

// Write a function that takes a positive number and returns the amount of times its multiplicative persistance.
function persistence(num) {
  let countArr = []
  while (num > 9) {
    num = num.toString().split('').reduce((total, value)=> total * +value, 1)
    countArr.push(num)
  }
  return countArr.length
}

// Write a function that returns the only even or odd value in array full of even and odd integers.
function findOutlier(integers){
  let evenNums = []
  let oddNums = []
  integers.filter(value => value % 2 === 0 ? evenNums.push(value) : oddNums.push(value))
  return evenNums.length > oddNums.length ? oddNums[0] : evenNums[0]
}

// Write a function that returns true/false if the directions in arr ('n','s','e','w') takes exactly 10 minutes(each char takes 1 min) and leads back to start.
function isValidWalk(walk) {
    if (walk.length === 10) {
      return walk.join('').split('n').length === walk.join('').split('s').length && 
            walk.join('').split('w').length === walk.join('').split('e').length 
      } else {
        return false
      }
}
// Duplicate encoder. Create a function that encodes chars in str to '(' if appears once and ')' for more than once. Ignore the case difference.
function duplicateEncode(word){
  let map = new Map
  let returnStr = ''
  for (let i=0; i<word.length; i++) {
    if (!map[word[i].toLowerCase()]) { //ensures prop is written to hashmap as lowercase
      map[word[i].toLowerCase()] = 1
    } else {
      map[word[i].toLowerCase()] += 1
    }    
}
 for (let i=0; i<word.length; i++){ //writes encoding thru str.length
    if (map[word[i].toLowerCase()] > 1) { 
      returnStr += ')'
    } else {
      returnStr += '('
    }     
  }
  return returnStr  
}

// Title Case. Create a function that returns title case for a string, except for specific words
function titleCase(title, minorWords) {
  if (title.length === 0){
    return ''
  } //edge case for empty str
  if (minorWords === undefined){
    return title.toLowerCase().split(' ').map(value => value.split('')[0].toUpperCase() + value.slice(1)).join(' ')
  } //edge case for title passed, but no minorWords argument
  
  let titleArr = title.toLowerCase().split(' ')
    titleArr = titleArr.map(function(value,index) {
      if (index !== 0 && minorWords.toLowerCase().split(' ').includes(value)) {
        // array.prototype.includes() and string.prototype.includes() are different!! arr.includes() returns exact match
        //str.includes() scans the entire string for chars containing letter. Both are case-sensitive
        return value.toLowerCase()
       } else {
         return value.split('')[0].toUpperCase() + value.slice(1)
       }     
  })
  return titleArr.join(' ')
}

// Replace with alphabet position. Take case and punctuation into account
function alphabetPosition(text) {
  let alphabetStr = 'abcdefghijklmnopqrstuvwxyz'
  let sanitizedText = text.toLowerCase().split('').filter(value => alphabetStr.includes(value)).join('')
  let resultStr = ''

  
  for (let i=0; i<sanitizedText.length; i++){
    resultStr += alphabetStr.indexOf(sanitizedText[i]) + 1 + ' ' 
  }
  return resultStr.trim()
}

// Convert string to camelCase and remove separators
function toCamelCase(str){
  if (str.length === 0){
    return ''
  } 
  
  let allTogether = ''
  for (const letter of str){
    if (letter == '_' || letter == '-'){
     allTogether += ' '
    } else {
      allTogether += letter
    }
  }
  
  let casing = allTogether.split(' ').map((value, index) => {
  
    if (index === 0 && value[0].toUpperCase() == value[0]){
      return value
    } else if (index === 0) {
      return value.toLowerCase()
    } else {
     return value[0].toUpperCase() + value.slice(1).toLowerCase()
    }
  })
  
  return casing.join('')
}

//Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

//For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

//Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

function solve(arr) {
	let newArr = arr.map(value => [...new Set(value)])
	newArr = newArr.reduce((total, value) => total *= value.length, 1)
	return newArr
}

const solve = arr => arr.reduce((a, c) => a * new Set(c).size, 1)
// receiving a nested arr of int values, may include duplicates
// returning an int of the amount of arrays that can be formed pulling one unique value from each sub array

// search each subarry and remove any duplicate values
// iterate through first subarr index 0
solve([[1,2],[4],[5,6]]) // 4
solve([[1,2],[4,4],[5,6,6]])// 4)
solve([[1,2],[3,4],[5,6]])// 8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])// 72


// Create a function that swaps casing and reverses the words in a string, while preserving extra whitespace
function stringTransformer(str) {
	//split the str and reverse
	let newStr = str.split(' ').reverse()
	//map through each word and conditionally use toLowerCase() and apply trim()
	let newArr = newStr.map(value => {
		return value.split('').map(letter =>
			letter === letter.toUpperCase() ?
				letter.toLowerCase() :
				letter.toUpperCase()).join('')
	})
	return newArr.join(' ')

}
// O(2n) alternative solution vs O(n^2) solution
function transformStr(str) {
   let arr = str.split(' ').reverse().join(' ')
   return arr.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
}
// Create a function that takes two arrays and returns a new array w/ values from array b absent from the array a.
// base case is O(1) but solution goes into quadratic time, making it less ideal for large inputs
function arrayDiff(arrA, arrB){
	if (arrA.length === 0) return []
	if (arrB.length === 0) return arrA

	return arrA.filter(value => !arrB.includes(value))
}
// base case remains O(1) but w/ set there is memory used to make it a linear solution 
function arrayDiff(arrA, arrB){
	if (arrA.length === 0 || arrB.length === 0) return arrA

	const newArrB = new Set(arrB)
	return arrA.filter(value => !newArrB.has(value))
}

// Create a function that returns a new arr where only the odd integers are sorted, even left in place
function sortArray(array) {
  let arrCopy = array.slice()

  let oddNums = arrCopy.filter(value => value % 2).sort((a,b)=> a-b)
  return array.map(value => value % 2 ? oddNums.shift() : value)
}
// .pop instead of shift makes the return statement O(n) instead of O(n^2)
function sortArray(array) {
  let oddNums = array.filter(value => value % 2).sort((a,b)=> b-a)
  return array.map(value => value % 2 ? oddNums.pop() : value)
}

// Break the camelCase string into a new str with spaces between.
function solution(string) {
  
  let newStr = ''
  
  for (let i=0; i< string.length; i++){
    if (string[i] === string[i].toUpperCase()) {
      newStr += `,${string[i]}` + string.slice(i, string[i] === string[i].toUpperCase())
    } else {
      newStr += string[i]
    }
  }
 return newStr.split(',').join(' ')
}

// Create a function that returns the highest scoring word in a string if letters were points from their position in the alphabet 
function high(x){
  
  const hashmap = (word) => {
    const theHash = {}
    
    for (let i=0; i< word.length; i++){
      
      let alphabet = 'abcdefghijklmnopqrstuvwxyz'
      
      if (!theHash[word[i]]) {
        theHash[word[i]] = alphabet.indexOf(word[i]) + 1
      } else {
        theHash[word[i]] += alphabet.indexOf(word[i]) + 1 
      }
    }
    return theHash
  }
  
  let strArr = x.split(' ')
  let scoresArr = []
  
  for (let i=0; i< strArr.length; i++){
    let mapped = hashmap(strArr[i])
    
    let score = Object.values(mapped).reduce((total, value) => total + value, 0)
    scoresArr.push(score)

  }
  return strArr[scoresArr.indexOf(Math.max(...scoresArr))]
}

// Write a function that detects if a string is a pangram(contains every letter in the alphabet at least once)
function isPangram(string){
  
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  let sanitizedString = string.toLowerCase().split('').filter(value => alphabet.includes(value)).join('')
  
  const hashMap = {}
  
  for(let i=0; i< sanitizedString.length; i++){
    if (!hashMap.hasOwnProperty(sanitizedString[i])) {
      hashMap[sanitizedString[i]] = 1
    }

  }
  return Object.keys(hashMap).length === 26
}

// alternative solution using every
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

// Write a function that returns if value is a narcissistic number (each digit^number.length is equal to original value)
function narcissistic(value) {
  
  let accum = 0
  let strInt = value.toString()
  
  for (let i=0; i<strInt.length; i++){
    let newVal = +strInt[i]
    accum += Math.pow(newVal, strInt.length)
  }
  return accum === value
}
