//const { arrayBuffer } = require("stream/consumers");



function itterateArr(arr) {
  let emptycells = []; 
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[r].length; c++) {
   
      if (!arr[r][c]) {
        emptycells.push([r,c]); 
      } 
    }
   
  }
  return emptycells; // ввыодит многомерный массив с координатами пустых ячеек 
}

  const puzzle = [
    [0, 3, 0], 
    [3, 1, 0], 
    [0, 0, 3]
  ];
  

console.log(itterateArr(puzzle));

