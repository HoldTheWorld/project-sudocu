
let sudokuLength = board[0].length
let boxSize = Math.sqrt(sudokuLength)


function checkInRow (array, num) {
  for (let i = 0; i < sudokuLength; i++) {
    if (array[i][c] == num && i !== r) return false
  }
  return true
}

function checkInColumn (array, num) {
  for (let i = 0; i < sudokuLength; i++) {
    if (array[r][i] == num && i !== c) return false
  }
  return true
}


//нужно вычислить координату верхнего угла бокса и от неё вычислить с какого по какой индесы проходиться по ячейке 

let boxCornerRow = Math.floor(r/boxSize) * boxSize
let boxCornerColumn = Math.floor(c/boxSize) * boxSize


// вычисление координаты работает

function checkInBox(array, num) {
  for (let i = boxCornerRow ; i < boxCornerRow + boxSize; i++) {
    for (let j = boxCornerColumn; j < boxCornerColumn + boxSize; j++) {
      if (array[i][j] === num && i !== r && j !== c) {return false}
    }    
  }
  return true  
}

