// const btn = document.querySelector('button');

// // btn.onclick =function(){  //плохой метод, лучше не использовать
// //     alert('Click');
// // };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('SecondClick');
// });

// btn.addEventListener('mouseenter', (e) => { //(e)-event,событие, аргумент функции, выводит свойства события
//     console.log(e);
//     console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
// });

// let i = 0;
// const deleteElement = function(e) {
//     console.log(e);
//     i++;
//     if(i==1){
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);

// const link = document.querySelector('a');
// link.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(e.target);
// });
// //Метод preventDefault () интерфейса Event сообщает User agent, что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно.
// //удобно использовать когда например необходимо остановить ввод текста от пользователя, если не соблюдены условия(напр.если выбрана не та раскладка)

// btn.forEach(btn => {
//     btn.addEventListener('click', deleteElement);
// });
// // чтобы назначить функцию нескольким элементам страницы

