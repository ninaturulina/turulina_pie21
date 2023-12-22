function calculate(operator) {
  let first_number = parseFloat(document.getElementById("first_number").value);
  let second_number = parseFloat(document.getElementById("second_number").value);
  switch(operator) {
    case "+":
     result = first_number + second_number;
     break;
    case "-":
     result = first_number - second_number;
     break;
    case "*":
     result = first_number * second_number;
     break;
    case "/":
     result = first_number / second_number;
     break;
    case "%":
     result = first_number % second_number;
     break;
    default:
     result = "Ошибка";
     break;
   }
    
  document.getElementById("result").innerText = result;
 }