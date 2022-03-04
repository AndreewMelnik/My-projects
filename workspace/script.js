let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const nameOfFilms = prompt("Один из последних просмотренных фильмов?", ""),
          ratingOfFilms = prompt("Нас сколько оцените его?", "");
  
      if (nameOfFilms != null && nameOfFilms != '' && nameOfFilms.length < 50 &&
        ratingOfFilms != null && ratingOfFilms != '' && ratingOfFilms.length < 50) {
  
        personalMovieDB.movies[nameOfFilms] = ratingOfFilms;
        alert('done!');
      } else {
        alert('error!');
        i--;
      }
    } 
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман!');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш любимый жанр фильмов под номером ${i}`);
      if (genre != null && genre != ''){  
      personalMovieDB.genres[i - 1] = genre;
      } else {
        i--;
      }
      this.genres.forEach(function(item, index) {
        console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
      // personalMovieDB.genres = genres.split(', ');  //введите жанры через запятую
      // personalMovieDB.genres.sort();

    }
  }, 
  toggleVisibleMyDB: function(){
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else { 
        personalMovieDB.private = true;
    }
  }
};

console.log(personalMovieDB);



