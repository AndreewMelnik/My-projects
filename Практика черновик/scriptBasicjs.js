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

// const soldier = {
//     health:400,
//     armor:100,
//     sayHello: function () {
//         console.log("Hello");
//     }
// };
 
// const John = Object.create(soldier);


// // const John ={
// //     health:100,
// //     }; 

// Object.setPrototypeOf(John,soldier);
// John.sayHello();

// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
// To String
//1
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));
// //2 
// console.log(typeof(null + ''));

// const num=5;
// console.log("https://www.vk.com/catalog/" + num); //url строка+номер каталога

// const fontSize = 26 + "px"; //числовое значение + единица измерения

// //To Number
// //1)
// console.log(typeof(Number('4')));

// //2)
// console.log(typeof(+'4')); //унарный плюс

// //3)
// console.log(typeof(parseInt('15px', 10)));

// let answer = +prompt("Hello", "");//перевод вводимых данных в число

// //To Boolean

// // 0, '', null, undefined, NaN;
// //1
// let switcher = null;

// if (switcher){
//     console.log('Working...');
// }
// switcher = 1;
// if (switcher){
//     console.log('Working...');
// }
// //2 
// console.log(typeof(Boolean('4')));

// //3 
// console.log(typeof(!!('4')));

//СОБЫТИЯ И ИХ ОБРАБОТЧИКИ

//НАВИГАЦИЯ ПО DOM ЭЛЕМЕНТАМ

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current ="3"]').previousElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName=='#text'){
//         continue;
//     }
//     console.log(node);
// }

// события на мобильных устройствах
//на мобильных устройствах нет кликов, есть только тачи,нажатия на экран

//touchstart - при касании эл-та
//touchmove - при касании эл-та палец движется по эл-ту
//touchend
//touchenter - как только палец зашел на площадь какого то эл-та
//touchleave 
//touchcancel

// window.addEventListener('DOMContentLoaded',()=>{
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart' ,(e)=>{
//         e.preventDefault();

//         console.log("Start"); 
//     });
// });

//touches -список всех пальцев которые сейчас на экране
//targetTouches
//changedTouches


