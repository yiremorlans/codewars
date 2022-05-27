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