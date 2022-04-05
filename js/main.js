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