const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.getElementById('equal');
const dot = document.getElementById('dot');
const c = document.getElementById('c');
const ce = document.getElementById('ce');
const result = document.getElementById('result');
const currentNumber = document.getElementById('currentNumber');
const expression = document.getElementById('expression');

let arr = [];
let checker = true;
let dotChecker = true;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        arr.push(number.innerHTML);
        checker = true;
        console.log(arr);
        currentNumber.innerHTML = 'current number: ' + number.innerHTML;
        expression.innerHTML = 'expresion: ' + arr.join('');
    });
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if(checker) {
            arr.push(operation.innerHTML);
            checker = false;
            dotChecker = true;
            console.log(arr);
            expression.innerHTML = 'expresion: ' + arr.join('');
        }        
    });
});

dot.addEventListener('click', () => {
    if(dotChecker) {
        arr.push(dot.innerHTML);
        dotChecker = false;
        console.log(arr);
    }
});

equal.addEventListener('click', () => {  
    if(!isNaN(arr[arr.length-1])) {
        arr = arr.join('');
        result.innerHTML = 'result: ' + eval(arr);
        currentNumber.innerHTML = 'current number: ' + eval(arr);
        expression.innerHTML = 'expresion: ' + 0;
        arr = [eval(arr)];
    }    
});