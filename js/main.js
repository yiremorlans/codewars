// get the sum of two arrays...actually the sum of all their elements. 
function arrayPlusArray(arr1, arr2) {
    let sumOfArr1 = arr1.reduce((total, element) => total + element, 0)
    let sumOfArr2 = arr2.reduce((total, element) => total + element, 0)
    return sumOfArr1 + sumOfArr2;
  }
//If you can't sleep, count sheep! Return value with a string attached and a murmur
var countSheep = function (num){
  let str = ''
  for(let i = 1; i <= num; i++) {
    str+= `${i} sheep...`
  } return str
}
console.log(countSheep(4))

//Consider an array with integers as string and numbers, return the sum of all the values as if they were numbers.
function sumMix(x){
  return x.reduce((total, x) => total + +x, 0)
}

//You are given two sorted arrays that both only contain integers. Find a way to merge them into a single one, sorted in asc order, remove duplicated in the returned result.
function mergeArrays(arr1, arr2) {
  let arr3 = [...new Set([...arr1,...arr2])]//new Set() creates an object w/o duplicate integers.
  return arr3.sort((a,b) => a-b)
}

//javascript.info/object exercises

let user = {}

user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

//check for emptiness, return true if empty
let schedule = {};

function isEmpty (obj) {
  for (let key in obj) { 
    //for in loop starts only if there are keys in object
      return false
  }// if it finds keys in loop, it returns false, if it exits the loop, it was empty
  return true
}

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0
for (let key in salaries) {
  sum += salaries[key]
}

console.log(sum)

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
  let squared = numbers.map(nums => nums*nums)
    return squared.reduce((total, x) => total + x, 0)
}

console.log(squareSum([1,2]))
//If there is a wolf next up in the array, tell it to scram, if there is a sheep, warn it about the wolf.
function warnTheSheep(queue) {
  queue.forEach((element) => {
    if (element === 'sheep') {
      return `Oi! Sheep number ${element}! You are about to be eaten by a wolf!`
    } else {
      return `Pls go away and stop eating my sheep`
    }  
  })
}


function arr(arr) {
  let newArray = []
  for (let i =0; i < arr; i++) {
     newArray.push(i)
    }
  return newArray
}

//Repeat a string n times
function repeatStr (n, s) {
  return s.repeat(n);
}

//alternatively
function repeatStr (n, s) {
  let output = ''
  for (let i=0; i < n; i++) {
    output += s
  }
  return output;
}

//Return negative only if number is positive
function makeNegative(num) {
  if (num > 0) {
    return -(num)
  } else {
    return num
  }
}

//Remove first and last chars in str, return leftover portion
function removeChar(str){
  return str.substring(1,str.length -1)
};
//better alternative
function removeChar(str) {
  return str.slice(1, -1);
}

//Remove all whitespace between
function noSpace(x){
  return x.split(' ').join('')
 }
//Write a program that finds the summation of every number from 1 to num. 
 var summation = function (num) {
  let total = 0
  for (let i = 1; i <= num; i++) {
    total += i
  }
    return total
}

//Replace every given string with a different word
function toFreud(string) {
  if (string == '') {
    return ''
  } else {
    return string.split(' ').map(word => 'sex' ).join(' ')
  }
}

//Staying hydrated is important. Create a function that determines how many litres of water to drink by the hour if 0.5litres per hour is the rule of thumb.
function litres(time) {
  return Math.floor(time * 0.5);
}

//Given a year, return the century it is in.
function century(year) {
  return Math.floor((year + 99) / 100)
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function arrayMadness(a, b) {
  return a.reduce((total, x) => total + x**2, 0) > b.reduce((total, x) => total + x**3, 0)
}//No need to create conditional because the function evalutes true or false


//Instructions are self explanatory from function names
function getLength(arr){
  return arr.length;
}
function getFirst(arr){
  return arr[0];
}
function getLast(arr){
  return arr[arr.length-1];
} // return +arr.slice(-1)
function pushElement(arr){
  arr.push(1);
  return arr;
}
function popElement(arr){
  arr.pop()
  return arr;
}

//Push an object into an array, keep it simple
items = []
items.push({a: "b", c: "d"}) 
console.log(items)

//Is n divisible by x && y?
function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true : false;
}

//Return the count of all the vowels in a string
function getCount(str) {
  var vowelsCount = 0;
  
  let newArr = Array.from(str)
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].includes('a') ||
      newArr[i].includes('e') ||
      newArr[i].includes('i') ||
      newArr[i].includes('o') ||
      newArr[i].includes('u') == true) 
      vowelsCount++
    }
  return vowelsCount;
} 
// OR less verbose solution
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

//Given an array of integers, return a new array with each value doubled.
function maps(x){
  let newArr = x.map(nums => nums * 2)
  return newArr
}

//You receive an array with your peers' test scores. Now calculate the average and compare your score!
function betterThanAverage(classPoints, yourPoints) {
  let totalScore = classPoints.concat(yourPoints)
  totalScore = totalScore.reduce((total, x) => total + x, 0) / totalScore.length
  if (totalScore < yourPoints) {
    return true;
  } else {
    return false;
  }
}
//Check if two given characters are the same case. Take '?' ' ' into account.
function sameCase(a, b){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
  
  const checkCase = x => {
    if(x === x.toLowerCase()) return 'lower'
    if(x === x.toUpperCase()) return 'upper'
  }

  return checkCase(a) === checkCase(b) ? 1 : 0
}