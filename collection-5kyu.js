//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str){
    let punctuation = ['!', '.', '?', '"', ',']
    return str.split(' ').map(word => word.slice(1) + word[0] + (punctuation.includes(word) ? '' : 'ay')).join(' ')
  }
  