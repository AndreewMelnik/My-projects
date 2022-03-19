//Подключим табы к меню на сайте справа
window.addEventListener('DOMContentLoaded', () => {

    let tabs = document.querySelectorAll('.tabheader__item'), // Название категории питания из меню справа
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
    function showTabContent(i = 0) { // i =0 -параметр по умолчанию для "i" при загрузке страницы(синтаксис ES6)
        tabs[i].classList.add('tabheader__item_active'); //присваеваем класс _active названию категории справа
        tabsContent[i].style.display = 'block';
        //чтобы подключить css классы:
        // item.classList.add('hide');
        // item.classList.remove('show', 'fade');
    }

    hideTabContent();
    showTabContent(); //по умолчанию отображается 1 таб

    // Ставим обработчик событий на родителя
    tabsParent.addEventListener('click', (event) => {
        const target = event.target; //...чтобы не прописывать event.target много раз, делают функцию target(я хз ну ок) 
        // если при клике в область tabheader__items мы попадаем в tabheader__item (i), то выполняем функцию showTabContent(i) 
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
        // Если элемент из псевдомассива tabs совпадает с элементом, на который кликнул пользователь, тогда мы берем его номер, и показываем на странице
    });
    // Timer

    const deadline = '2022-04-10'; //ставим дату завершения таймера

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()), //Здесь грубо говоря мы получаем количество миллисекунд оставшееся на данный момент до дедлайна
            days = Math.floor(t / (1000 * 60 * 60 * 24)), //Далее разбиваем миллисекунды на дни, часы итд
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        //Date parse(endTime) - кол-во миллисекунд в конечной дате(2022-04-10)
        //Date parse(newDate) - кол-во миллисекунд в данный момент
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    //Делаем так, чтобы подставлялся нолик к числам меньше 10
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    //получаем элементы с HTML
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();
        // привязываем функцию к html на странице
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock('.timer', deadline);

    //Modal window
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');


    function openModal() {
        modal.classList.add('modal_vis');
        modal.classList.remove('bounceOutDown');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId); // чтобы окно не открывалось по таймеру, если ты уже успел нажать на него
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });


    function closeModal() {
        modal.classList.add('bounceOutDown');
        modal.classList.remove('modal_vis');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close' == '')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('modal_vis')) {
            closeModal();
        }
    });
    //ДОБАВЛЯЕМ ТАЙМЕР НА ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
    const modalTimerId = setTimeout(openModal, 5000000);

    //pageYOffset - свойство окна Window,возвращает количество пикселей, на которое прокручен документ по вертикали (вниз или вверх).
    //.clientHeight - видимая часть сайта на данный момент
    //.scrollHeight - высота всей видимой области прокрутки(высота всего сайта крч)
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight ) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        if (openModal === true) {
            return;
        }
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    // Используем классы для карточек
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 120;
            this.changeToRub();
        }

        changeToRub() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            // this.classes.forEach(classname => element.classList.add(className));
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();

    // Отправляем формы на сервер

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }
    // Делаем красивое оповещение пользователя
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        // скрываем старое модальное окно перед добавлением нового
        prevModalDialog.classList.add('bounceOutDown');
        openModal(); // функция отвечает ха создание модальных окон

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
//добавляем класс в html:
   document.querySelector('.modal').append(thanksModal);

//возвращаем старое модальное окно( ставим таймаут на 4 сек. на новое модальное окно)
setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add('modal_vis');
    prevModalDialog.classList.remove('bounceOutDown');
    closeModal();
}, 4000);
}
// Слайдер

    const slider = document.querySelectorAll('.offer__slide'),
          prevButton = document.querySelector('.offer__slider-prev'),
          nextButton = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current');

    let sliderIndex = 1;

    showSlides(sliderIndex); // !!!

    function showSlides(n) {
       if (n > slider.length){
           sliderIndex = 1; // Если номер слайда > общего количества слайдов, то слайдер перемещается на 1 слайд
       }

       if (n < 1) {
           sliderIndex = slider.length;
       }

       slider.forEach(item => item.style.display = 'none'); // скрываем все слайды

       slider[sliderIndex - 1].style.display = 'block'; // показываем текущий слайд
      
       if (slider.length < 10) {
        current.textContent =  `0${sliderIndex}`;
    } else {
        current.textContent =  sliderIndex;
    }
}
    
    function plusSlide(n) {
        showSlides(sliderIndex += n);
    }
    prevButton.addEventListener('click',() => { // стрелка назад
        plusSlide(-1);});

    nextButton.addEventListener('click',() => { // стрелка вперед
        plusSlide(1);});


});

