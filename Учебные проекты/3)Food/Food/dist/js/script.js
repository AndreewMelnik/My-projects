// Подключим табы к меню на сайте справа
window.addEventListener('DOMContentLoaded', ()=>{

    const tabs = document.querySelectorAll('.tabheader__item'), // Название категории питания из меню справа
          tabsContent = document.querySelectorAll('.tabcontent'), // картинки и описание
          tabsParent = document.querySelector('.tabheader__items'); // Все категории из меню справа

//Создаем функцию чтобы обратиться ко всем табам
    function hideTabContent() {
        tabsContent.forEach(item => {  
            item.style.display = 'none'; // Скрываем их отображение
        });

        tabs.forEach(item => {
             item.classList.remove('tabheader__item_active');
        });   
    }
//Создаем функцию на отображение таба "i"
    function showTabContent(i = 0) {  // i =0 -параметр по умолчанию для "i" при загрузке страницы(синтаксис ES6)
        tabs[i].classList.add('tabheader__item_active');//присваеваем класс _active названию категории справа
        tabsContent[i].style.display = 'block';
        //чтобы подключить css классы:
        // item.classList.add('hide');
        // item.classList.remove('show', 'fade');
    }

    hideTabContent();
    showTabContent(0); //по умолчанию отображается 1 таб

// Ставим обработчик событий на родителя
    tabsParent.addEventListener('click', (event) => {
        const target = event.target; //...чтобы не прописывать event.target много раз, делают функцию target(я хз ну ок) 
       // если при клике в область tabheader__items мы попадаем в tabheader__item (i), то выполняем функцию showTabContent(i) 
        if (target && target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if (target == item){
                hideTabContent();
                showTabContent(i);
            }
        });
        }
// Если элемент из псевдомассива tabs совпадает с элементом, на который кликнул пользователь, тогда мы берем его номер, и показываем на странице
    });

});