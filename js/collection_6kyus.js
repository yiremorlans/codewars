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