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
}

   



  


 
 console.log(personalMovieDB);
