let N = parseInt(prompt("Введите размер массива:"));
let arr = [];
let num = prompt("Вы хотите генерировать числа в массиве от 0 до:");

if (N <= 10 && N > 0) {
    if (num > 0) {
        num = parseInt(num);
        let count = 1;
        let position = 0;
        for (let i = 0; i < N; i++) {
            arr.push(Math.floor(Math.random() * num));
        }
        alert('Ваш массив до: ' + arr)
        for (let i = 0; i < num; i++) {
            count = 1;
            position = 0;
            for (let j = 0; j < arr.length; j++) {
              if (arr[j] == i) {
                if (count > 1) {
                  arr.splice(j, 1);
                  i--;
                } else {
                  count = count + 1;
                  position = j;
                }
              }
            }
          }
        alert(' И после: ' + arr)
    }
    else {
        alert('Введите положительное число');
    }


}
else {
    alert('Введите число от 1 до 10');
}
