function checkPoint() {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
    if (y < 0) {
        if (x > 0) {
            document.getElementById("result").innerHTML = "Точка с координатами (" + x + ", " + y + ") лежит в четвертой четверти.";
        }
        if (x < 0) {
            document.getElementById("result").innerHTML = "Точка с координатами (" + x + ", " + y + ") лежит в третьей четверти.";
        }
     
    }
    else {
        document.getElementById("result").innerHTML = "Точка с координатами (" + x + ", " + y + ") не лежит ни в четвертой, ни в третьей четверти.";  
    }
   }