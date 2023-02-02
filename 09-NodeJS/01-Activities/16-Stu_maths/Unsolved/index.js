// TODO: Import `maths.js`
const maths = require('./maths');
console.log(maths)
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
let operation = [process.argv[2]];
let numOne = [process.argv[3]];
let numTwo = [process.argv[4]];

console.log(operation, numOne, numTwo);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`


switch(operation) {
    case 'sum':
        console.log(maths.sum(numOne, numTwo));
        break;

    case 'difference':
        console.log(maths.difference(numOne, numTwo));
        break;

    case 'product':
        console.log(maths.product(numOne, numTwo));
        break;

    case 'quotient':
        maths.quotient(numOne, numTwo);
        break;

    default:
        console.log('you done messed up');
}