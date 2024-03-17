// Creati un closure in care sa aveti urmatoarele metode. // 
// 1.returnarea unui array de cifre ex [1,2,3,4,5,6] // 
// 2.returnarea unui array cu doar cifrele pare // 
// 3.returnarea unui array cu doar cifre impare // 
// 4.returnarea sumei cifrelor din array( for loop va poate ajuta) // 
// 5. adaugarea in array a unei cifre noi // 
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

operations.addNumber(1);
operations.addNumber(2);
operations.addNumber(3);
operations.addNumber(4);
operations.addNumber(5);
operations.addNumber(6);

console.log("Toate numerele:", operations.getAllNumbers()); 
console.log("Numerele pare:", operations.getEvenNumbers()); 
console.log("Numerele impare:", operations.getOddNumbers()); 
console.log("Suma numerelor:", operations.getSum());