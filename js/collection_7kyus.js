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