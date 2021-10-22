const fs = require('fs')

let string = fs.readFileSync('./sudoku-puzzles.txt', 'utf8').split('\n')[0]

const board = []


let stringOneChange = string.replace(/-/gi, '0')
console.log(stringOneChange);


for (let i = 0; i < stringOneChange.length; i += 9) {
  board.push(stringOneChange.slice(i, i + 9).split('').map(Number))
}

console.log(board)






