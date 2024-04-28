const userNum = +prompt('Введите первое число')

const operator = prompt('Введите оператор "+" "-" "*""/"')

const userNum1 = +prompt('Введите второе число')

if (isNaN(userNum) && isNaN(userNum1)) {
    console.error('Error - неправильные числа');
} 
else {
    if (operator == '+') {
        console.log(`${userNum} ${operator} ${userNum1} = ${userNum+userNum1}`);
        
    } else if (operator == '-') {
        console.log(`${userNum} ${operator} ${userNum1} = ${userNum-userNum1}`);
    }
    
    else if (operator == '/') {
        console.log(`${userNum} ${operator} ${userNum1} = ${userNum/userNum1}`);
    }
    
    else if (operator == '*') {
        console.log(`${userNum} ${operator} ${userNum1} = ${userNum-userNum1}`);
    }else {
        console.error('Error - неправильное действие');
    }
}