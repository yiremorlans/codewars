//Create an animal factory function that returns a string.
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }

  
//Check if two given characters are the same case. Take '?' ' ' into account.
function sameCase(a, b){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
  
  const checkCase = x => {
    if(x === x.toLowerCase()) return 'lower'
    if(x === x.toUpperCase()) return 'upper'
  }

  return checkCase(a) === checkCase(b) ? 1 : 0
}

