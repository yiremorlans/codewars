//day 1 function formats a string broken up by line and double lines into an array with subarrays. Proceed to return the last 3 max values of sum of calories.
function hungryElfWithMostCalories(input) {
	let arrOfElves = input.split('\n\n')
	let newArrOfElves = arrOfElves.map(value => value.split('\n'))

	let maxCalories = []
	for (let i = 0; i < newArrOfElves.length; i++) {
		let total = newArrOfElves[i].reduce((total, value) => +total + +value, 0)
		maxCalories.push(total)
	}
	return maxCalories.sort((a, b) => b - a).slice(0, 3).reduce((total, value) => total + value, 0)
}

// day 2 formats a string of secret code and converts it into numbers designated for rock, paper, scissors. Calculates final score as defined by secret instructions.
function rockPaperScissors(input) {
    let scoreArr = input.split('\n').map(value => {
      let rounds = value.split(' ')
          return rounds.map(
          value => value === 'A' || value === 'X' ? 1 : 
          value === 'B' || value === 'Y' ? 2 : 3)
    })
  
  
    scoreArr = scoreArr.map(round => {
          // draw
      if (round[1] === 2) return 3 + round[0]
          // lose
        if (round[1] === 1 && round[0] === 1) return 3
          if (round[1] === 1 && round[0] === 2) return 1
          if (round[1] === 1 && round[0] === 3) return 2
          // win
          if (round[1] === 3 && round[0] === 1) return 6 + 2
          if (round[1] === 3 && round[0] === 2) return 6 + 3
          if (round[1] === 3 && round[0] === 3) return 6 + 1
    })
  
    return scoreArr.reduce((total, value) => total + value, 0)
  }