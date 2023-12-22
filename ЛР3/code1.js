function factorial() {
    let x = parseFloat(document.getElementById("x").value);
    let N = parseInt(document.getElementById("N").value);
  
    if (N <= 0) {
      alert("Введите число больше 0");
      return;
    }
  
    let result = x;
    let sign = -1;
    let factorial = 1;
  
    for (let i = 1; i <= N; i++) {
      factorial *= 2 * i * (2 * i + 1);
      result += sign * (Math.pow(x, 2 * i + 1)) / factorial
      sign *= -1;
    }
  
    document.getElementById("result").innerHTML = "Результат: " + result.toFixed(5) + "<br>";

  }