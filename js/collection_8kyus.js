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