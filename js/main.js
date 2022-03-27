// get the sum of two arrays...actually the sum of all their elements. 
function arrayPlusArray(arr1, arr2) {
    let sumOfArr1 = arr1.reduce((total, element) => total + element, 0)
    let sumOfArr2 = arr2.reduce((total, element) => total + element, 0)
    return sumOfArr1 + sumOfArr2;
  }