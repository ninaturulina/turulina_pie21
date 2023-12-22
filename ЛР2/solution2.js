function solveEquation2() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let x = parseFloat(document.getElementById("x").value);
    let result = document.getElementById("result");
   
    if (x >= 5) {
      result.innerHTML = "x = " + Math.pow(Math.sin(Math.sqrt(a + Math.abs(x))), 2);
    }
      
    else if (x <= -3) {
      result.innerHTML = "x = " + (Math.exp(b/x) + 1);
    }
    else if (-3 < x < 5) {
      result.innerHTML = "x = " + Math.pow((x**2 + a * b**3), 0.5);
    }
     else {
      result.innerHTML = "Система не имеет решения";
     }
      
    }
   