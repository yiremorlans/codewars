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

    