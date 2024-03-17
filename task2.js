// Folositi metodele din closure in afara la closure si atribuitile fiecare unei constante aparte. //
function operateOnNumbers() {
    let numbers = [];

    return {
        addNumber: function(number) {
            if (Number.isInteger(number)) {
                numbers.push(number);
            } else {
                console.log("Input is not a number.");
            }
        },
        getAllNumbers: function() {
            return numbers;
        },
        getEvenNumbers: function() {
            return numbers.filter(num => num % 2 === 0);
        },
        getOddNumbers: function() {
            return numbers.filter(num => num % 2 !== 0);
        },
        getSum: function() {
            let sum = 0;
            for (let num of numbers) {
                sum += num;
            }
            return sum;
        }
    };
}

const operations = operateOnNumbers();

const addNumberMethod = operations.addNumber;
const getAllNumbersMethod = operations.getAllNumbers;
const getEvenNumbersMethod = operations.getEvenNumbers;
const getOddNumbersMethod = operations.getOddNumbers;
const getSumMethod = operations.getSum;

addNumberMethod(1);
addNumberMethod(2);
addNumberMethod(3);
addNumberMethod(4);
addNumberMethod(5);
addNumberMethod(6);

console.log("Toate numerele:", getAllNumbersMethod()); 
console.log("Numerele pare:", getEvenNumbersMethod()); 
console.log("Numerele impare:", getOddNumbersMethod());
console.log("Suma numerelor:", getSumMethod()); 
