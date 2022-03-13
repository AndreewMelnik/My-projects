'use strict';
//Classlist и делегирование событий

// const btns = document.querySelectorAll('button'),
//     wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(1));
//console.log(btns[0].classList.add('red', 'tthhht'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue')); //toggle- если этот класс есть на элементе, он будет убран, если нет, то будет добавлен.

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[0].addEventListener('click', () =>{
//     if (!btns[1].classList.contains('red')){
//         btns[1].classList.add('red');
//     } else{
//         btns[1].classList.remove('red');
//     }
//     //или:
//     btns[1].classList.toggle('red');
//}); // при нажатии на кнопку цвет ячейки меняется

// ДЕЛИГИРОВАНИЕ СОБЫТИЙ
// Выбираем родительский элемент для группы элементов,и назначаем обработчик события клика на родительский элемент, а потом уже разбираемся на что мы клинкнули внутри родителя.

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName === 'BUTTON'){
//        console.log("Hello");
//     }
// }); // задали обработчик событий на wrapper, который содержит внутри все BUTTON, в итоге console.log будет срабатывать при клике на любую BUTTON
// //или , более продвинутый способ:
// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.matches("button.red")){
//        console.log("Hello");
//     }
// }); 

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);
// // добавили красную кнопку

//SETTIMEOUT И SETINTERVAL

// const timer = setTimeout(function() {
//     console.log('hello');
// },2000); // 2000 milliseconds => 2 seconds

// function logger() {
//     console.log('hello');
// }
// const timer = setTimeout(logger,2000);

// const btn = document.querySelector('.btn');
// let timerId,
// i = 0;

// btn.addEventListener('click', ()=> {
//     timerId = setInterval(logger,500);
// });


// function logger() {
//     if (i===3){
//         clearInterval(timerId);
//     }
//     console.log('hello');
//     i++;
// }

// АНИМАЦИЯ
// const btn = document.querySelector('.btn');
// let timerID,
//     i = 0;

// function myAnimation(){
//     const elem = document.querySelector('.box');
//     let position = 0;

//     const id =setInterval(frame, 10);
//     function frame () {
//         if (position == 300){
//             clearInterval(id);
//         } else{
//         position++;
//         elem.style.top = position + 'px';
//         elem.style.left = position + 'px';
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);

// РАБОТА С ДАТАМИ

// const now = new Date();
// console.log(now);

// const now = new Date(2020, 5, 1, 20);
// console.log(now);

// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMont());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// let start = new Date();
// for(let i = 0; i <100000; i++) {
//     let some = i**3;
// }
// let end = new Date();

// alert(`Цикл отработал за ${end-start} миллисекунд`);

// ПАРАМЕТРЫ ДОКУМЕНТА, ОКНА И РАБОТА С НИМИ
// const box = document.querySelector('.box'), //тут привязываемся к css файлу(к объекту .box)
//     btn = document.querySelector('button');
// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// //по клику добавляем открытие всего документа
// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop); // Чтобы посмотреть сколько ты проскроллил текста вверх


// });

// console.log(box.getBoundingClientRect()); // все координаты нашего документа

// const style = window.getComputedStyle(box); //показывает все свойства, примененные к документу

// document.documentElement.scrolltop = 0; //переместиться на начало страницы
// window.scrollBy(0, 400); //переместиться относительно существующего положения на странице
// window.scrollTo(0, 400); //переместиться к (0,400)

// //Функции конструкторы

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function () {
//     console.log(`Пользователь ${this.name} ушел`);
// };
// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

//КОНТЕКСТ ВЫЗОВА , THIS

// //1)
// function showThis(a,b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// } showThis(4,5);

// // 2)
// const obj = {
// a:20,
// b:15,
// sum: function(){
//     console.log(this);
// }
// };
// obj.sum();

// // 3)
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 28);
// 4)
// function count(num) {
//     return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(12));
// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

//Классы ES6

// class Rectangle {
//     constructor(width, height) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.width * this.height;
//     }
// }

// // НАСЛЕДОВАНИЕ
// class ColoredRectangleWithText extends Rectangle { 
// constructor(height, width, text,bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
// }

// showMyProps(props) {
//     console.log(`Text: ${this.text}, color:${this.bgColor}`);
// }

// }
// const div = new ColoredRectangleWithText(25,10, 'Hello world','red');
// div.showMyProps();
// console.log(div.calcArea());

// // const square = new Rectangle(10, 10);
// // const long = new Rectangle(20, 100);

// // console.log(square.calcArea());
// // console.log(long.calcArea());

// Rest оператор(...) и параметры по умолчанию

const log = (function (a , b, ...rest) {
console.log(a, b, rest);
});

log('basic', 'rest','operator','usage');

// Параметры по умолчанию

function calcOrDouble(number, basis = 2){ // basis=2 - параметр по умолчанию
    console.log(number * basis);
}
calcOrDouble(3,5);