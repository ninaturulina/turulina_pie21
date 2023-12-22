function findVertex() {
    let x1 = Number(document.getElementById("x1").value);
    let x2 = Number(document.getElementById("x2").value);
    let x3 = Number(document.getElementById("x3").value);
    let y1 = Number(document.getElementById("y1").value);
    let y2 = Number(document.getElementById("y2").value);
    let y3 = Number(document.getElementById("y3").value);
    let x4, y4;
    if (x1 === x2) {
        x4 = x3;
    } else if (x1 === x3) {
        x4 = x2;
    } else if (x1 != x2 && x1 != x3) {
        x4 = x1;
    }
    else {
        x4 = null
    }

    if (y1 === y2) {
        y4 = y3;
    } else if (y1 === y3) {
        y4 = y2;
    } else if (y1 != y2 && y1 != y3) {
        y4 = y1;
    }
    else {
        y4 = null
    }

    if (x4 && y4) {
        document.getElementById("result").innerHTML = "Координаты четвертой вершины: (" + x4 + ", " + y4 + ")";
    }
    else {
        document.getElementById("result").innerHTML = "Данные координаты не образуют прямоугольник";
    }

    
}
