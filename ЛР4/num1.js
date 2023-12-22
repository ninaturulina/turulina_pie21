let N = parseInt(prompt("Введите размер массива:"));
let arr = [];

if (N <= 10 && N > 0) {
    for (let i = 0; i < N; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    let count = 0;
    let prev = arr[0];
    let sub_arr = 1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > prev) {
            sub_arr += 1;
        } 
        else {
            if (sub_arr > 1) {
                count = count + 1;
                sub_arr = 1;
            }
            
        }
        prev = arr[i];
    }
    
    count += sub_arr > 1;
    alert("Массив: " + arr + " Количество участков с возрастающими элементами: " + count);
}
else {
    alert('Введите число от 1 до 10');
}