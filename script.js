let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }

}
// start();



const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,

};




function rememberMyFilms() {

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

}

// rememberMyFilms();

function detectPersonalLevel(){
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман!');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB (hidden) {
  if (!hidden) {
     console.log(personalMovieDB);
  }
}

// showMyDB(personalMovieDB.private);



function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
  const genre = prompt(`Ваш любимый жанр фильмов под номером ${i}`);
  personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

console.log(personalMovieDB);