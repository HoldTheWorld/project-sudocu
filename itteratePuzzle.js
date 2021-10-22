//const { arrayBuffer } = require("stream/consumers");

const { isModuleNamespaceObject } = require("util/types");

// const puzzle = [
//   [2, 1, 9, 0, 4, 6, 0 ,3, 0], 
//   [0, 0, 5, 1, 0, 0, 0, 0, 0], 
//   [0, 3, 4, 0, 0, 0, 2, 6, 0],
//   [0, 2, 6, 0, 0, 7, 5, 0, 3],
//   [0, 0, 1, 0, 9, 0, 0, 0, 7],
//   [4, 7, 3, 0, 6, 5, 0, 0, 8],
//   [0, 6, 0, 4, 0, 2, 3, 1, 0],
//   [3, 4, 0, 0, 0, 0, 7, 8, 0],
//   [1, 0, 0, 0, 0, 0, 4, 5, 0]
 
// ];

const solution = function(arr) {

  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[r].length; c++) {
      if (!arr[r][c]) {
       return arr; 
      } 
      for (let n = 1; n < 9; n++ ) {
        if (checkNum(arr, n)){
        replaceNumber(arr, n, r, c); 
        return solution(replaceNumber(arr, n, r, c)); 
        } 
      }
    }
  }
}

// console.log(solution(puzzle));

module.exports = {
  solution,
};
