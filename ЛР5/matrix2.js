function zeroDiagonalMatrix(){
    let matrix = [];
    let M = parseInt(prompt('Введите порядок матрицы'));
    if (M <= 0 || M > 10) {
        alert("Неверный ввод. Порядок матрицы должен быть больше 0 и не больше 10.");
        return;
      }
    else {
        for (let i = 0; i < M; i++) {
            matrix[i] = [];
            for (let j = 0; j < M; j++) {
              matrix[i][j] = parseInt(prompt('Введите элемент ' + j + ' столбца ' + i + ' строки'));
            }
          }
        for (let i = 0; i < M; i++) {
          for (let j = M - i; j < M; j++) {
              matrix[i][j] *= (i >= j);
            }
        
    }
    return matrix;
}
}

let myMatrix = zeroDiagonalMatrix();
let matrixString = '';
for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      matrixString += myMatrix[i][j] + '   ';
    }
    matrixString += "\n";
  }

  alert(matrixString);