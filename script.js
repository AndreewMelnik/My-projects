const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
  count: numberOfFilms ,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  
};


for (let i = 0; i < 2; i++) {
  const nameOfFilms = prompt("Один из последних просмотренных фильмов?",""),
        ratingOfFilms = prompt("Нас сколько оцените его?","");

  personalMovieDB.movies [nameOfFilms] = ratingOfFilms;  
}

for (let i = 0; i >= personalMovieDB.movies.length; i++){
  if (i == personalMovieDB.movies.length) continue;
  if ( personalMovieDB.movies.length == 50) continue;

}
 
 console.log(personalMovieDB);
