const numbers = [3, 4, 5, 7, 9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element ;
//     output.push(result);
// }

// const result = numbers.map(function(element){
//     return element * element;
// })

const result = numbers.map(x => x * x);
console.log(result);