const students = [
    {id: 21, name: 'Omur sunny'},
    {id: 31, name:'Mannaaaa'},
    {id: 42, name:"Mousumi"},
    {id: 45, name:'Deepjol'}
] 
// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const {name} = element;
//     output.push(name);
    
// }
// console.log(output);

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);