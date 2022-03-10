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

let start = new Date();
for(let i = 0; i <100000; i++) {
    let some = i**3;
}
let end = new Date();

alert(`Цикл отработал за ${end-start} миллисекунд`);


