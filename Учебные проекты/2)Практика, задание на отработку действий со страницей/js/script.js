/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),// можно сразу прописать img чтобы к ним обращаться
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          filmList = document.querySelector('.promo__interactive-list'), //не querySelectorAll, потому что псевдомассив хз
          newForm = document.querySelector('form.add'),
          newFilm = document.querySelector('.adding__input'),
          checkbox = document.querySelector('[type="checkbox"]');
        
    newForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let addFilm = newFilm.value;
        const favorite = checkbox.checked;

        if (addFilm){
            
            if (addFilm.length > 21) {
            addFilm = `${addFilm.substring(0, 22)}...`;
            }

            movieDB.movies.push(addFilm);
            createMovieList(movieDB.movies, filmList);
            sortArr(movieDB.movies);
            
        } //обрезаем название фильма после 21 символа и подставляем "..."
        event.target.reset();
    });
    
        
  const deleteAdv = (arr) => {
    adv.forEach(item => { //adv.forEach(function(item){}
        item.remove();
    });
  };
  deleteAdv(adv);
  const makeChanges = () => {
    genre.textContent ="Драма";
    poster.style.backgroundImage = "url('img/bg.jpg')";// чтобы изменить бэкграунд нужно сперва сделать переменную, обратиться к элементу на странице и потом уже отдельно менять, кавычки в url должны быть разные

  };
  
  const sortArr =(arr) =>{
      arr.sort();
  };
     movieDB.movies.sort(); // сортируем по алфавиту
    
    function createMovieList(films, parent) {
        parent.innerHTML = ""; //таким образом удаляем старый мувилист
        sortArr(films);
    
   
        
        films.forEach(function(film,i) { 
            parent.innerHTML +=`
            <li class="promo__interactive-item">${i+1} ${film}
                                    <div class="delete"></div>
            </li>
            `; 
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
           btn.addEventListener('click', () =>{
               btn.parentElement.remove();
               movieDB.movies.splice(i, 1);
               createMovieList(films, parent);//Список фильмов перестраивается при удалении какого то фильма
        });//удаляем фильмы при нажатии на корзину
    });



    }
    
  
   
    createMovieList(movieDB.movies, filmList);
});


    //  чтобы сформировать новый список фильмов нужно сперва перебрать все значения из массива movies (с помощью forEach )
    //  Свойство innerHTML устанавливает или получает всю разметку и содержание внутри данного элемента.
    //  далее берем разметку с html и добавляем к ней инструкцию по добавлению данных из нашего массива
    //  Ёбань
    
