const replacer = (rawBoard) => {
  const fs = require('fs')
  let string = rawBoard.replace(/-/gi, '0')

  const board = []

  for (let i = 0; i < string.length; i += 9) {
    board.push(string.slice(i, i + 9).split('').map(Number))
  }
  return board
}

module.exports = {
  replacer
}
