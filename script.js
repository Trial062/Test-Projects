
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDb = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
    let i = 0;
  while( i < 2 ){
    const  lastViewedFilms = prompt('Один из последних просмотренных фильмов?',''),
           userVotes = prompt('На сколько вы оцените его?','');
        if (lastViewedFilms != null && lastViewedFilms.length != 0 && 
            userVotes != null && lastViewedFilms.length < 50 && userVotes.length !=0){
                personalMovieDb.movies[lastViewedFilms]=userVotes;
                console.log('sucsess');
            }else{
                i--;
                console.log('error');
            }
    i++;
    
}
  if (personalMovieDb.count <= 10){
      console.log('Вы посмотрели мало фильмов');
  }else if(personalMovieDb.count > 10 && personalMovieDb.count < 30){
    console.log('Вы классический зритель');
  }else if(personalMovieDb.count >= 30 ){
    console.log('Вы киноман!');
  }else{
    console.log('Произошла ошибка!');
  }
console.log(personalMovieDb);