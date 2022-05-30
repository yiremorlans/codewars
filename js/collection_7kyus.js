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