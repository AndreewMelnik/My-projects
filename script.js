const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
  count: numberOfFilms ,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
const nameOfFilms = prompt("Один из последних просмотренных фильмов?",""),
      ratingOfFilms = prompt("Нас сколько оцените его?",""),
      nameOfFilms2 = prompt("Один из последних просмотренных фильмов?",""),
      ratingOfFilms2 = prompt("Нас сколько оцените его?","");

personalMovieDB.movies [nameOfFilms] = ratingOfFilms;    
personalMovieDB.movies [nameOfFilms2] = ratingOfFilms2;   
console.log(personalMovieDB);
