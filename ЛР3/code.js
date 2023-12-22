function sawArray() {
  let N = document.getElementById("N").value;
  if (N <= 2) {
    alert("Введите число больше 2");
    return;
  }
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(Math.floor(Math.random() * 100));
   }
  let condition = 0;

  result.innerHTML = "Массив: " + arr.join(" ") + "<br>";

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1] || arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      condition += 1;
    } else {
      condition = 0;
      result.innerHTML += "Первый элемент, не подходящий условию: " + arr[i] + " (индекс " + i + ")";
      return;
    }
  }

  if (condition != 0) {
    result.innerHTML += '0';
  }
}

   
   