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