let mySudoku = [
  [2, 1, 9, 0, 4, 6, 0 ,3, 0],
  [0, 0, 5, 1, 0, 0, 0, 0, 0],
  [0, 3, 4, 0, 0, 0, 2, 6, 0],
  [0, 2, 6, 0, 0, 7, 5, 0, 3],
  [0, 0, 1, 0, 9, 0, 0, 0, 7],
  [4, 7, 3, 0, 6, 5, 0, 0, 8],
  [0, 6, 0, 4, 0, 2, 3, 1, 0],
  [3, 4, 0, 0, 0, 0, 7, 8, 0],
  [1, 0, 0, 0, 0, 0, 4, 5, 0]
];
let sudokuLength = mySudoku[0].length
let boxSize = Math.sqrt(sudokuLength)


function checkInRow (array, num) {
  for (let i = 0; i < sudokuLength; i++) {
    if (mySudoku[i][c] == num && i !== r) return false
  }
  return true
}

function checkInColumn (array, num) {
  for (let i = 0; i < sudokuLength; i++) {
    if (mySudoku[r][i] == num && i !== c) return false
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
      if (mySudoku[i][j] === num && i !== r && j !== c) return false
    }    
  }
  return true  
}


