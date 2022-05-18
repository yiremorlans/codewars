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

//Implement the array.prototype.filter() from scratch.
Array.prototype.filter = function(fn){
  var res = [];
  for (var i = 0; i<this.length; i++){ //this keyword to reference param passed from fn
    if (fn(this[i])){ 
      res.push(this[i]);
    }
  }
  return res;
}

//Jenny's secret message consists of a function that greets with a secret message only if the user's name is Johnny.
function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!"
    } else {
      return "Hello, " + name + "!";
    }
}

//Check same case (8kyu, but might as well be 7kyu)
/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0 */

function sameCase(a, b){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
  
  const checkCase = x => {
    if(x === x.toLowerCase()) return 'lower'
    if(x === x.toUpperCase()) return 'upper'
  }

  return checkCase(a) === checkCase(b) ? 1 : 0
}
/*Create a method all which takes two params:
a sequence
a function
and returns true if the function in the params returns true for every element in the sequence. */

function all( arr, fun ) { //function contains the test that will run on the elements.
  return arr.every(fun) ? true : false
} // every() returns a boolean that checks if the arr passes the tests in the fun

//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside
function solution(a, b){
  if (a.length > b.length) {
    return b.concat(a) + b
  } else {
    return a.concat(b) + a
  }
}
//Ternary version for the above solution ^^^
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}
//Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
//OR 
function sumOfDifferences(arr) {
  arr.sort((a,b)=>b-a) 
  let final = 0 
  for(let i = 0;i<arr.length-1;i++){ 
    final = final + arr[i] - arr[i+1]  
  }
  return final 
}

//Convert a boolean into a string of its value:
function booleanToString(b){
  return b ? 'true' : 'false';
}

/* Given a list of the times you need to brew each coffee, return the minimum total waiting time.
 but you need 2 additional minutes to clean the coffee machine after each coffee you make. */
 function barista(coffees){
  //TODO: Maths are cool!
  
  // 0 + 2 + 4 + 6 + 8
  // 0 + 2(1) + 2(2) + 2(3) + 2(4)
  
  var sum = 0;
  var coffees = coffees.sort(function(a, b) {return a - b;});
  console.log(coffees);
  coffees.reduce(
    (previousValue, currentValue, currentIndex) => {
      var waitTime = currentIndex < 1 ? currentValue : previousValue + currentValue + 2;
      console.log(waitTime);
      sum += waitTime;
      return waitTime;
    }, 0);
  return sum;
}

//Invert values 
function invert(array) {
  return array.map(nums => -nums)
} //OR function arrow expression
const invert = array => array.map(num => -num)

//Create a function that does basic maths
function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+': return value1 + value2
      break;
      case '-': return value1 - value2
      break;
      case '/': return value1 / value2
      break;
      case '*': return value1 * value2
      break;
      default: return false
  }
}

//Create a function that returns the milliseconds of time past midnight.
function past(h, m, s){
  return (s * 1000) + (m * 60000) + (h * 3600000)
}

//Count of positives and sum of negatives. Return an array with [count, sum]
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  
  let positive = 0;
  let negative = 0;
  
  for (let i=0; i< input.length; i++)
  {
    if (input[i] > 0)
      positive++;
    else
      negative += input[i];
  }
  
  return [positive, negative];
}

//Return true or false whether there are two bullets for every dragon.
function hero(bullets, dragons){
  if (dragons * 2 <= bullets) {
    return true
  } else if (bullets == 0){
    return false
  } else {
    return false
  }
 }
 

 //Return a string of whether or not the name that starts with 'R' or 'r' plays the banjo.
 function areYouPlayingBanjo(name) {
  if (name.startsWith('R') === true || name.startsWith('r') === true) {
    return `${name} plays banjo`
    } else {
     return `${name} does not play banjo`
    }
  }
  // OR 
  function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
  }
 
//String cleaning: remove any numbers from a string. Not my solution, but it's readable, and it's not regex bullsh*t.
function stringClean(s){
  while(s.indexOf(0) >= 0) {s = s.replace(0, '')}
    while(s.indexOf(1) >= 0) {s = s.replace(1, '')}
      while(s.indexOf(2) >= 0)  {s = s.replace(2, '')}
        while(s.indexOf(3) >= 0)  {s = s.replace(3, '')}
           while(s.indexOf(4) >= 0)  {s = s.replace(4, '')}
              while(s.indexOf(5) >= 0)  {s = s.replace(5, '')}
                 while (s.indexOf(6) >= 0)  {s = s.replace(6, '')}
                    while (s.indexOf(7) >= 0)  {s = s.replace(7, '')}
                       while (s.indexOf(8) >= 0)  {s = s.replace(8, '')}
                          while (s.indexOf(9) >= 0)  {s = s.replace(9, '')}
  return s
 }
// Function will return the cleaned string
 function stringClean(s){
let result = '';
for(let i=0;i<s.length;i++) {
  if(isNaN(s[i])||s[i]==' ') {
  result+=s[i]; 
  }
}
return result;
}
//Build a function that returns an array of integers from n to 1 where n>0. Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
  let newArr = []
  for (let i=1; i<=n; i++) {
    newArr.push(i)
  }
  return newArr.reverse()
};
//MY SOLUTION ABOVE ^^^^^
const reverseSeq = n => {
  let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
  };


//Convert DNA string to RNA string by replacing all instances of 'T' with 'U'
function DNAtoRNA(dna) {
  let str = ''
for (let i=0; i< dna.length; i++) {
  if (dna[i] === 'T') {
    str += 'U'
  } else {
    str += dna[i]
  }
}
  return str
}

//Alternatively 
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower2 % 2 === 0 && flower1 % 2 !== 0) {
    return true;
  } else {
    return false
  }
}
//You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. 
//Considering these factors, write a function that tells you if it is possible to get to the pump or not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {
    return true
  } else {
    return false
  }
};
// ALSO 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump
};

//You are given a string of space separated numbers, and have to return the highest and lowest number with a space in between.
function highAndLow(numbers){
  let arr = numbers.split(' ').sort((a,b) => b-a)
  return `${arr[0]} ${arr[arr.length -1]}`
}

//Simple multiplication if number is even, multiply by 8, else, multiply by 9.
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9
}

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
  return x.reduce((total, x) => total * x, 1)
} // accumulator set to 1 instead of 0 allows for multiplying through the array without giving 0.

//Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
  let arr = []
  for (let i=1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

//Given an array of words, return a str as a sentence without space in the beginning and end.
function smash (words) {
  return words.join(' ').trim()
};

//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
function rentalCarCost(d) {
  if (d >= 7) {
    return (d * 40) - 50
  } else if (d >= 3) {
    return (d * 40) - 20
  } else {
    return d * 40
  }
}
//Square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
function squareDigits(num){
  let str = String(num)
  let squared = ''
  for (let i=0; i< str.length; i++) {
    squared += str[i]**2 
  }
  return +squared
}

//Return dog and cat years to human years if: 15 cat years for first year, +9 cat years for second year, +4 cat years for each year after that
//15 dog years for first year, +9 dog years for second year, +5 dog years for each year after that.

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}
//My solution below. I'm a baddie, I write bad code.
var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 15
  let dogYears = 15
  if (humanYears == 1) {
    return [humanYears,catYears,dogYears]
  } else if (humanYears == 2) {
    return [humanYears,catYears+9,dogYears+9]
  } else {
      let catYears = 24
      let dogYears = 24
    for (let i=3; i<=humanYears; catYears+= 4, dogYears+=5) {
      i++
    }
    return [humanYears,catYears,dogYears]
  }
}
//Refacter this bit of code to 85 chars or less.
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}
//My solution below.
function find(ar, x) {
  return ar.indexOf(x) == -1 ? 'Not found' : ar.indexOf(x)
}
//Refactored further
const find = (arr, x) => arr.indexOf(x) >= 0 ? arr.indexOf(x) : 'Not found'

//Shuffle the string where you return the last name, first name from first, last.
function nameShuffler(str){
  let arr = str.split(' ')
  return `${arr[1]} ${arr[0]}`
}

// alternative easy answer
function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}


//Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
/*
if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
*/
const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

//OR 
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

//Return a customized solution if name equals owner return Hello boss otherwise, Hello guest
function greet (name, owner) {
  if (name === owner) {
    return `Hello boss`
  } else {
    return `Hello guest`
  }
 }
//also
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}

