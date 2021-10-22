const fs = require('fs')

let string = fs.readFileSync('./sudoku-puzzles.txt', 'utf8').split('\n')[0].replace(/-/gi, '0')

const board = []

for (let i = 0; i < string.length; i += 9) {
  board.push(string.slice(i, i + 9).split('').map(Number))
}
