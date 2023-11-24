function f(x) {
    let a = Math.sqrt(x);
    if (a * a === x) {
        return 'Да, это число является квадратом числа ' + a;
    }
    else {
        return 'Нет, это число не является квадратом';
    }
}

let myX = prompt('Введите x:');
if (!isNaN(parseInt(myX))) {
    myX = parseInt(myX);
    if (myX < 0) {
        alert('Квадрат из отрицательного числа не извлекается');
    }
    else{
        let check = f(myX);
        alert(check);
    }

}
