'use strict';

// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button')[1]; //получение только 2 кнопки
// console.log(btns); //если в массиве только 1 элемент, то нужно обращаться непосредственно к нему, а не к массиву в целом 

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// //СОВРЕМЕННЫЕ МЕТОДЫ

// const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');//,берет первый элемент на странице под заданным тегом
// console.log(oneHeart); 
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 600px`; 

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});
//как создаются элементы для верстки в реакте:
const div = document.createElement('div');

div.classList.add('black'); //есть только в JS, к html не относится

document.body.append(div); //добавили в HTML
// или так: document.querySelector('wrapper').append(div);
//wrapper.prepend(div); //переместить в начало
// hearts[0].before = div; //втсавить перед элементом
// hearts[0].after = div;
//circles.[0].remove();
// hearts[0].replaceWith(circles[0]);//заменили сердечко кружком(старыекоманды)

div.innerHTML ="<h1> Hello,world! </h1>"; //помещаем элемент на страницу с возможностью редактирования

// div.textContent ="Hello"; // метод только для текста, в основном для получения данных от пользователя

div.insertAdjacentHTML('beforebegin',' <h2>Hello</h2>'); //вставляем HTML код перед элементом
//div.insertAdjacentHTML('afterbegin',' <h2>Hello</h2>');//  в начало элемента
//div.insertAdjacentHTML('afterend',' <h2>Hello</h2>');//послеэлемента

