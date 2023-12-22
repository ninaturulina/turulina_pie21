function solveEquation() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let x = parseFloat(document.getElementById("x").value);
    let result = document.getElementById("result");
   
    switch (x) {
     case 5:
      result.innerHTML = "x = " + Math.pow(Math.sin(Math.sqrt(a + Math.abs(x))), 2);
      break;
     case -3:
      result.innerHTML = "x = " + (Math.exp(b/x) + 1);
      break;
     case 4:
      result.innerHTML = "x = " + Math.pow((x**2 + a * b**3), 0.5);
      break;
     default:
      result.innerHTML = "Система не имеет решения";
    }
   }