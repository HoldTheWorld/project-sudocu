let mySudoku = [
  [0, 4, 0, 2],
  [3, 0, 1, 4],
  [2, 1, 0 ,0],
  [0, 3, 2, 1]  
]
let sudokuLength = mySudoku[0].length
let boxSize = Math.sqrt(sudokuLength)

function checkInColumn (array, num) {
  for (let i = 0; i < sudokuLength; i++) {
    if (num == mySudoku[i][c] && i !== c) return false
  }
  return true
}

function checkInRow (array, num) {
  for (let i = 0; i < sudokuLength; i++) {
    if (num == mySudoku[r][i] && i !== r) return false
  }
  return true
}


// //нужно вычислить координату верхнего угла бокса и от неё вычислить с какого по какой индесы проходиться по ячейке 

// let boxCornerColumn = Math.floor(c/boxSize) * boxSize
// let boxCornerRow = Math.floor(r/boxSize) * boxSize

// // вычисление координаты работает
