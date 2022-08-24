//Create a function w/two arguments that return an array of the first n multiples of x.
//count starts at 1, so that 0 isn't multiplied.
//x is multiplied by the amount of times the function loops(n)
function countBy(x, n) {
    let z = [];
    for (let i=1; i<=n; i++) {
      z.push(i * x)
    }
    return z;
  }
//write a function that takes a salary(num) and a bonus(boolean) and returns a bonus if the boolean is true.
  function bonusTime(salary, bonus) {
     if (bonus) {
       return '£' + salary * 10
       } else {
         return '£' + salary
       }
     }
//one liner option below
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`
}

//Take in a 2D array [[1,2],[3,4],[5,6]] and place into new array, sorted in descending order with > inbetween each integer.
function bigToSmall(arr){
  let newArr = [].concat(...arr).sort((a, b) => b-a).join('>')
  return newArr
}
//Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
/*
if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
*/
function points(games) {
  let result = 0
  games.map(game => {
    if (game[0]===game[2]) {
      result += 1
     } else if (game[0]>game[2]) {
        result += 3
      }
      })
  return result
}
//Return the area or perimeter of the shape depending on the sides
const areaOrPerimeter = function(l , w) {
  if ( l === w) {
    return l * w
  } else {
    return (l + w) * 2
  }
   //also return l == w ? l*w : 2*(l + w)
 };

 //Remove exclamation marks frin string
 function removeExclamationMarks(s) {
  let emptyStr = ''
  for (let i=0; i< s.length; i++) {
    s[i].includes('!') ? s[i] = emptyStr : emptyStr += s[i]
  }
  return emptyStr
  //return s.split('!').join('')
}   
//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
  let newArr = []
  for (let i = a; i<=b; i++) {
    newArr.push(i)
  }
  return newArr
}
//Sum without highest and lowest number. Take into account input validation.
function sumArray(array) {
  let newArr;
  if (array === null || array === undefined || array.length === 0) {
    return 0
  } else {
  return newArr = array.sort((a, b) => a-b).slice(1, -1).reduce((total, x) => total + x  ,0)
  }
}

//Define a card suit from preloaded deck, ex: ('3♣') -> return 'clubs'
function defineSuit(card) {
  let suit = card.length > 2 ? card[2] : card[1]
  //switch (card.slice(-1)){
  switch (suit) {
      case '♣':
        return 'clubs'
        break;
      case '♦':
        return 'diamonds'
        break;
      case '♥':
        return 'hearts'
        break;
      case '♠':
        return 'spades'  
    }
}
//Is integer a and b divisible by given number?
function isDivideBy(num, a, b) {
  return num % a === 0 && num % b === 0 ? true : false
}
//Find the first non-consecutive number, if sequential or empty return null
function firstNonConsecutive (arr) {
  for (let i =0; i< arr.length-1; i++) {
       if (arr[i+1] - arr[i] !== 1) {
       return arr[i+1]
        }
        }
    return null
      }
//Return an array if the number has an integer square root, take this, otherwise square the number.
function squareOrSquareRoot(array) {
  let newArr = []
  for (let i=0; i< array.length; i++) {
    if (Number.isInteger(array[i]**.5)) {
      newArr.push(array[i]**.5)
    } else {
      newArr.push(array[i]**2)
    }
  }
  return newArr
}
//write a simple helper function to capitalize a string.
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
function stringy(size) {
  let str = ''
  for (let i=1; i <= size; i++) {
    str += 1
    i++
    if (str.length < size) {
      str += 0
    }
  }
  return str   
}
//Create a function with a str variable that says 'Hello World!' and console log it.
function helloWorld() {
  let str = 'Hello World!'
  console.log(str)
}
//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//You need a function to handle each change from green, to yellow, to red, and then to green again.
function updateLight(current) {
  switch (current) {
      case 'green': return 'yellow'
      case 'yellow' : return 'red'
      case 'red' : return 'green'
  }
}
//Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
  const phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  return phrase[(nbPetals -1) % phrase.length]
  //remainder is 4, so the index is phrase[4] == 'madly'
}
console.log(howMuchILoveYou(35))
//Calculate km per hour to cm per second as the speed of a cockaroach
function cockroachSpeed(s) {
  return Math.floor(s * 27.778)
}//literal google conversion numbers
//Calculate the sum of Messi's goals in all three leagues
function goals (...golazos) {
  return golazos.reduce((total, leagueGoals ) => total + leagueGoals, 0)
}
//Return a str where every char in the str is doubled
function doubleChar(str) {
  let newStr = ''
  for (let i=0;i<str.length; i++) {
    newStr += str[i] + str[i]
  }
  return newStr
}
//Return int as age from a given string where it's always 'x years old'
function getAge(inputString){
  return +inputString[0]
 }
//Return the age when dad was twice as old as the son
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return  dadYearsOld - (sonYearsOld * 2) > 0 ? dadYearsOld - (sonYearsOld * 2) : -(dadYearsOld - (sonYearsOld * 2))
}
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}//Math.abs() returns the absolute of a number. If negative, returns positive and vice versa

//Write a function that returns true or false if the beast's first and last character is the same for the dish.
function feast(beast, dish) {
  return beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length-1])
}
//Write a function that takes 3 parameters and returns 0 if enough room on the bus otherwise the amount that can't fit capacity
function enough(cap, on, wait) {
  return wait + on <= cap ? 0 : Math.abs(cap - (wait + on))
}
//Return the string written number of integer number. Logging for clever solution over switch case
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
//Return which quarter of the year we're in
const quarterOf = (month) => {
  if (month < 4) {
    return 1
  } else if (month < 7) {
    return 2
  } else if (month < 10) {
    return 3
  } else {
    return 4
  }
}// clever solution below
const quarterOf = m => Math.ceil(m/3);
//Given 3 ints, return the highest maximun int obtained from combination of operations.
function expressionMatter(a, b, c) {
  let newArr = []
  newArr.push(a * (b + c))
  newArr.push(a * b * c)
  newArr.push(a + b * c)
  newArr.push((a + b) * c)
  newArr.push(a + b + c)
  return Math.max(...newArr)
}//also could return Math.max(*....*)
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}
//Create a function that alternates case on a string
String.prototype.toAlternatingCase = function () {
  let newStr = ''
  for (let i=0; i< this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      newStr += this[i].toLowerCase()
    } else if (this[i] === this[i].toLowerCase()) {
      newStr += this[i].toUpperCase()
    } else {
      newStr += this[i]
    }
  }
  return newStr
}
String.prototype.toAlternatingCase = function () {
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
} //beautiful one liner, still easy to read imo

//Remove every other element, skipping the first.
function removeEveryOther(arr){
  for (let i=1; i<arr.length; i++) {
     arr.splice(i,1)
  }
    return arr
}
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}
//FIXME: Replace all the dots in the string with - w/o using .replaceAll()
var replaceDots = function(str) {
  return str.split('.').join('-')
}
//Check for uppercase. Return true only if all chars are uppercase.
String.prototype.isUpperCase = function() {
  let newArr = this.split('')
  let isUpperCase = (value) => value == value.toUpperCase()
  return newArr.every(isUpperCase)
}
//Better solution
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

//Calculate the number of grades based on the specific conditions stated.
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100
  } else if (exam > 75 && projects >= 5) {
    return 90
  } else if (exam > 50 && projects >= 2) {
    return 75
  } else {
    return 0
  }
}
//Create a function that arranges the array of in the correct order.
function fixTheMeerkat(arr) {
  return arr.reverse()
}
//Find the difference of the volume of cuboids.
function findDifference(a, b) {
  return Math.abs((a.reduce((total, num) => total * num, 1)) - (b.reduce((total, num) => total * num, 1)))
 }
 //Correct the mistakes of the character recognition software.
 function correct(string) {//Tricky part was testing for numbers as str, not as nums
  let correctedString = ''
  for (let i=0; i<string.length; i++){
    if (string[i] == '0') {
      correctedString += 'O'
    } else if (string[i] == '5') {
      correctedString += 'S' 
    } else if (string[i] == '1') {
      correctedString += 'I'
    } else {
      correctedString += string[i]
    }
  }
  return correctedString
}
//How many stairs will Suzuki climb in 20 years using an array of nested arrays.
function stairsIn20(s){
  let singleArr = s.reduce((total, value) => total.concat(value), [])
  return singleArr.reduce((total, value) => total + value, 0) * 20
}
//Return an array with a range of numbers when provided with min, max and step
function generateRange(min, max, step){
  let range = []
  for (let i=min; i<= max; i += step) {
    range.push(i)
  }
  return range
}
//Return an array with every number until given (n) all powers of two.
function powersOfTwo(n){
  let newArr = []
  for (let i=0; i<=n; i++){
    newArr.push(2**i) //Math.pow(2, i)
  }
  return newArr
}
//Return a decision on whether the book contains good enough ideas displayed in an array
function well(x){
  if (x.filter(ideas => ideas === 'good').length > 2) {
    return 'I smell a series!'
  } else if (x.filter(ideas => ideas === 'good').length > 0) {
    return 'Publish!'
  } else {
    return 'Fail!'
  }
}
//Return the power of a number within the array by finding its index, check if the index given (n) exists in array.
function index(array, n){
  for (let i=0;i< array.length; i++) {
    if (i === n) {
     return Math.pow(array[i], n)
    }
    if (array[n] === undefined) {
      return -1
    }
  }
} // Readable one liner below, not my solution
const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

//Convert the american elevator floor number system to european.
function getRealFloor(n) {
  if (n === 15 || n > 13) {
    return n - 2
  } else if (n > 0 && n < 13) {
    return n - 1
  } else {
    return n
  }
}
//Return the correct prompt with no typos or alternating cases in the name.
function hello(name) {
  return name ? `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!` : `Hello, World!`
}

//Return a string with all the vowels removed.
function shortcut (string) {
  let vowels = ['a','e','i','o','u']
  return string.split('').filter(letter => !vowels.includes(letter)).join('')
}
//Return the Nth even number.
function nthEven(n){
  return (n-1)*2;
}//return (n * 2) - 2;

//Compare within margin. 
function closeCompare(a, b, margin = 0){//gave margin a default value of 0 in params incase value was ommited
  if (margin >= Math.abs(a-b)) {
    return 0
  }
   else if (a < b) {
    return -1
  } else {
    return 1
  }
}
//Take the first N elements
function take(arr, n) {
  return arr.slice(0, n)
}

//Remove the exclamation ! at the end of the string
function remove (string) {
  return string.endsWith('!') ? string.slice(0, -1) : string
}
//Remove all the zeros at the end of the number.
function noBoringZeros(n) {
  let stringy = String(n)
  while (stringy.endsWith('0')) {
    stringy = stringy.slice(0,-1)
    console.log(stringy)
  }
  return +stringy
}
//Check if the given value is not a number, else do the equation with x
function problem(x){
  return typeof x === 'string' ? 'Error' : (x * 50) + 6
}
//Find the remainder. Return NaN if one of the values is 0.
function remainder(...ints){ //originally was 2 params(a, b), used the spread syntax to use math.max/min
  return Math.max(...ints) % Math.min(...ints)
} //modulo automatically returns NaN if value is = 0

//Implement a Cube class,with a constructor. One taking an integer and one handling no given arguments!
class Cube {
  constructor(side = 0){
    this.side = side
  }
  getSide() {
    return this.side = Math.abs(this.side) 
  }
  setSide(n) {
    this.side = n;
  }
}

class Cube {
  constructor(side) {
    this.setSide(side)
  }

  getSide() {
    return this.side
  }
  
  setSide(side = 0) {
    this.side = Math.abs(side)
  }
}
//Color ghost. Return a random color assigned to new Ghost object.
class Ghost {
  constructor(color){
    let colorsArr = ['white', 'yellow', 'purple', 'red']   return this.color = colorsArr[Math.floor(Math.random() * colorsArr.length)]
  }
}
//Replace all the vowels with exclamation marks!
function replace(s){
  let vowels = ['a','e','i','o','u','A','E','I','O','U']
  return s.split('').map(letter => vowels.includes(letter) ? '!' : letter ).join('')
}
//clever one liner
const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');

//Create a function that returns 5 without using any numbers 0-9
function unusualFive() {
  let countArr = ['red','orange','yellow', 'green', 'blue', 'purple']
    return countArr.lastIndexOf('purple')
}//SPICY SOLUTION BELOW
function unusualFive() {
  return 'fucku'.length
}
//Return the correct welcome prompt based on params even when name is an array of separate names.
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }

//Take the derivative
function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}

//Remove the first and last character
function array(str){
  str = str.split(',')
  return str.length === 0 || str.length <= 2 ? null : str.slice(1,-1).join(' ')
}

// Create a function that combines one letter at a time from three str inputs to form one new str.
function tripleTrouble(one, two, three){
  let finalWords = ''
  for (let i=0;i<one.length; i++){
    finalWords += one[i]
    finalWords += two[i]
    finalWords += three[i]
  }
  return finalWords
 }

 // Create a function that returns an array of the str with the length added to each word.
 function addLength(str) {
  return str.split(' ').map(word => word + ' ' + word.length)
}

// Multiple of index. Create a function that returns a new array of only the integers that are multiples of their index
function multipleOfIndex(array) {
  return array.filter((value, index)=> Number.isInteger(value/index))
}

// Return the youngest, oldest, and difference between the two ages in an array
function differenceInAges(ages){
  let sortedAges = ages.sort((a,b)=> a-b)
  return [sortedAges[0], sortedAges[sortedAges.length -1], sortedAges[sortedAges.length -1]-sortedAges[0] ]
}//alternative to Math.min() and Math.max()

// Create a function that returns the player's health - damage received. Player's health cannot go below 0
function combat(health, damage) {
  return health < damage ? 0 : health - damage
}
// Create a function that converts USD to Chinese Yuan as a string with fixed decimal place
function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}
// Populate an array with 'codewars' 1000 times
var websites = []
function arrayPopulator () { //did not need the function, a while loop would have sufficed
  while (websites.length !== 1000) {
    websites.push('codewars')
  }
}

arrayPopulator()
// Array method .fill will populate an array with a value
var websites = new Array(1000).fill("codewars");

// Create a function that determines whether the sentence includes the word 'english'
function spEng(sentence){
  return sentence.toLowerCase().includes('english')
}

//Create a function that combines two params as one string
function combineNames(first, last){
  return `${first} ${last}`
}

//Create a function using template string to return full sentence
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}

// Create a function that fills an entire text str with the given char
function contamination(text, char){
  let aiContam = ''
    for (let i=0; i<text.length; i++){
       aiContam += char
    }
  return aiContam
}
// clever codewars solution
function contamination(text, char){
  return char.repeat(text.length)
}