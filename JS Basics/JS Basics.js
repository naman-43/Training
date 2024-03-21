let a=63, b=32;
let c = a;
a = b;
b = c;
console.log(a, b, a*b, b/a);
// let d="ab23";
//
// print fns
// console.log(typeof(d));
// var str="i have to go to new york.";
// console.log(str.indexOf("to"));
// console.log(str.lastIndexOf("to"));
// console.log(str.indexOf("e" , 4));
// console.log(str.indexOf("MUMBAI"));
//  var l=4;
//  for (var i =1; i<=l; i++){
//     var x= "";
//     for (var j=1; j <= i; j++ )
//     x +="*";
//      console.log(x);
//  }
//
// sets and map
//  var str="abababababcd";
//  var out =""
//  for (var i= str.length-1;i >=0; i--) out += str[i];
//  console.log(out);
//  const mySet = new Set();
//  mySet.add('a');
//  mySet.add('b');
//  console.log(mySet);
//  const myMap = new Map();
//  myMap.set('name' , 'Naman');
//  myMap.set('age' , '22');
// console.log(myMap);
// const arr=["apple", "apple", "orange", "apple", "kiwi"];
// const f = new Set(arr);
// console.log(a);
//
// timeout delay fn
// console.log("HELLO");
// setTimeout(() => { 
//     for (let i = 0; i<10; i++) {
//     console.log("BCD");}},3000)
//     console.log("Morning")
//
// sync fn
// function fetchDatawithCallback(callback) {
//     setTimeout(() => {
//         const data = 'ABC'; callback(data)
//     }, 2000);
// }
// function processData(data) {
//     console.log(data);
// }
// fetchDatawithCallback(processData);
//
// array of objects
// const arr= [ 
// {name:"naman", course :"HR", age: 22},
// {name:"abhishek", course :"ECE", age: 21},
// {name:"akshay", course :"CSE", age:27},
// {name:"addy", course :"IT", age:26},
// {name:"lovedeep", course :"MECH", age:25}
// ];
// const agefilter = arr.filter(arr => arr.age>25 );
// const deptfilter = arr.filter(arr => arr.course == "HR");
// console.log(agefilter);
// console.log(deptfilter);
// arr.forEach( i => {
//     arr.push({section:"b"})
// });
// console.log(arr);
//
// async array
// function getuserdata() {
//     const students = [
//         ["A","A@gmail.com","20","HR"],
//         ["B","B@gmail.com","19","IT"],
//         ["C","C@gmail.com","22","HR"],
//     ];
//     return students;
// }
//
// odd even and greater than a no. and filtering etc
// const num = [1,2,32,10,20,30,45,15]
// const evenNo = num.filter(num => num %2=== 0);
// console.log(evenNo);
// const greaterNo = num.filter( num => num>15);
// console.log(greaterNo);
//
//let const var is globally scoped if it is declared at top of code 
// and locally scoped if its limited to a particular part of code

// function add() {
//     let counter=0;
//     counter +=1;
//     return counter;
// };
//  add();
// add();
// add();
//
  
// const fs = require('fs');
// fs.readFile('abc.json', 'utf8',(err, data)=> {
//     if(err)
// })
// async function fetchDataUsingFs () {
//     try {
//         const data = fs.readFileSync(package.json, 'utf8');
//         function pull (users) {
            
//         }
//         console.log(data);
//     }
//     catch(error){
//         console.error('error fetching data:', error.message);
//     }
// }
// const express = require ('express');
// const port = 3000;
// const app = express();
// app.use(express.json());

// app.post('/apl/user', async (req, res) =>{
//     console.log(req.body);
//     const data = req.body;
//     const product = data.num1 * data.num2;
//     console.log(product);
//     return res.json(product);
// });
// console.log("testing...");
// app.listen(port, () => {
//     console.log("listening..", port);
// });
console.log ("s"+5);