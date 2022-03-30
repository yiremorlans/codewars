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