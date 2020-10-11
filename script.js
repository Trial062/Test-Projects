const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDb = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
  for (let i = 0; i < 2; i++){
const lastViewedFilms = prompt('Один из последних просмотренных фильмов?','');
const userVotes = prompt('На сколько вы оцените его?','');
personalMovieDb.movies[lastViewedFilms]=userVotes;
  }
console.log(personalMovieDb);