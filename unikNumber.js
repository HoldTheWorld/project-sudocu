function checkNum (n) {
  if (checkInRow (board, n), checkInColumn(board, n), checkInBox(board, n))
  return true 
}

let sudokuLength = board[0].length
let boxSize = Math.sqrt(sudokuLength)


function checkInRow (array, n) {
  for (let i = 0; i < sudokuLength; i++) {
    if (array[i][c] == n && i !== r) return false
  }
  return true
}

function checkInColumn (array, n) {
  for (let i = 0; i < sudokuLength; i++) {
    if (array[r][i] == n && i !== c) return false
  }
  return true
}

let boxCornerRow = Math.floor(r/boxSize) * boxSize
let boxCornerColumn = Math.floor(c/boxSize) * boxSize


function checkInBox(array, n) {
  for (let i = boxCornerRow ; i < boxCornerRow + boxSize; i++) {
    for (let j = boxCornerColumn; j < boxCornerColumn + boxSize; j++) {
      if (array[i][j] === n && i !== r && j !== c) {return false}
    }    
  }
  return true  
}
