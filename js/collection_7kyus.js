//Check if the number(n) is a perfect square!
var isSquare = function(n){
    //Take the floor()ed square root of the number.
      return Math.floor(n**.5) ** 2 === n 
    //Multiply the square root twice.
    //Use boolean equal operator to verify if the product of square root is equal to the number given.
    }
// ALSO Number.isInteger() method returns boolean if number is a whole integer
const isSquare = n => Number.isInteger(Math.sqrt(n));