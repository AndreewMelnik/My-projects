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

  if (nameOfFilms !=null && nameOfFilms !='' && nameOfFilms.length < 50 && 
  ratingOfFilms !=null && ratingOfFilms !='' && ratingOfFilms.length < 50) {

      personalMovieDB.movies [nameOfFilms] = ratingOfFilms; 
      alert('done!');
    } else {
      alert('error!');
      i--;
    }
  if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30){
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
  }



 
 console.log(personalMovieDB);
  