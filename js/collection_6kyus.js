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