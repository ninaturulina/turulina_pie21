function createMatrix() {
    let matrix = [];
    let N = parseInt(prompt('Введите количество строк матрицы:'));
    if (N < 0 || N > 10) {
        alert('Введите N от 0 до 10');
        return;
    }
    else {
        let M = parseInt(prompt('Введите количество столбцов матрицы:'));
        if (M < 0 || M > 10) {
            alert('Введите M от 0 или 10');
            return;
        }
        else {
            for (let i = 0; i < N; i++) {
                matrix[i] = [];
                for (let j = 0; j < M; j++) {
                    matrix[i][j] = parseInt(prompt('Введите элемент ' + j + ' столбца ' + i + ' строки'))
                }
            }
        }
    }

    return matrix;
}

function averageValue(matrix) {
    let sum_elem = 0;
    let aver_val = 0;
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum_elem += Math.abs(matrix[i][j]);
            count += 1;
        }
    }
    aver_val = sum_elem / count;
    return aver_val;
}

function matrixAverageValue(matrix, value) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === Math.round(value)) {
                let ans = 'элемент ' + i + ' ' + j;
                return ans;
            }
        }
    }
}

let myMatrix = createMatrix();
let matrixString = '';
for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      matrixString += myMatrix[i][j] + '   ';
    }
    matrixString += "\n";
  }
alert(matrixString);
let myValue = averageValue(myMatrix);
alert(myValue);
let result = matrixAverageValue(myMatrix, myValue);
alert(result);
