// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.

const { solution } = require("./itteratePuzzle");

// How you represent your board is up to you!
const { replacer } = require('./pars.js')
const { replaceNumber } = require('./replaceNum')
const {
  checkNum,
  checkInRow,
  checkInColumn,
  checkInBox
} = require('./unikNumber')

function solve(boardString) {
  replacer(boardString)
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
console.table(board);
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
