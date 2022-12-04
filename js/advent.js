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