// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);
//  // console.log(Object.keys(options).length);

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);

// const arr =[1,2,3,6,8];

// const str =prompt("", "");

// arr.forEach(function(item, index, arr) {
// console.log(`${index}: ${item} vnutri ${arr}`);
// });


// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++){

//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// let a = 5, b = a;

// b= b+5;

// console.log(b);
// // console.log(a);

// const obj ={
//     a:5,
//     b:1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObject) {
// let objCopy ={};

// let key;
// for (key in mainObject) {
//   objCopy[key] = mainObject[key];  
// }
// return objCopy;
// }

// const numbers = {
//     a:2,b:5,c:{
//         x:7,y:4
//     }
//     };

//     const newNumbers = copy(numbers);

//     newNumbers.a = 10;

//     console.log(newNumbers);

// console.log(numbers);


// const add = {
//     d:17,
//     e:20
// };

// const clone = (Object.assign({},add));

// clone.d = 20;

// console.log(clone);
// console.log(add);

// const oldArray = ["a", "b", "c", "d", "e"];
// const newArray = [oldArray.slice()];

// newArray[2] = "asdadsfas";
// console.log(newArray);
// console.log(oldArray);

// function log(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num =[2,5,7];

// log (...num);

// const array = ["a","b"];

// const newArray = [...array];

// const q ={
//     one:1,
//     two:2
// };

// const newObj = {...q};

const soldier = {
    health:400,
    armor:100,
    sayHello: function () {
        console.log("Hello");
    }
};
 
const John = Object.create(soldier);


// const John ={
//     health:100,
//     }; 

Object.setPrototypeOf(John,soldier);
John.sayHello();