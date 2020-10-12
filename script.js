'use strict';



const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:function(){
        personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms:function(){
        for (let i = 0; i < 2; i++) {
            const lastViewedFilms = prompt('Один из последних просмотренных фильмов?', ''),
                userVotes = prompt('На сколько вы оцените его?', '');
            if (lastViewedFilms != null && lastViewedFilms.length != 0 &&
                userVotes != null && lastViewedFilms.length < 50 && userVotes.length != 0) {
                personalMovieDb.movies[lastViewedFilms] = userVotes;
                console.log('sucsess');
            } else {
                i--;
                console.log('error');
            }
        }
    },
    detectPersonalLevel:function(){
        if (personalMovieDb.count <= 10) {
            console.log('Вы посмотрели мало фильмов');
        } else if (personalMovieDb.count > 10 && personalMovieDb.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDb.count >= 30) {
            console.log('Вы киноман!');
        } else {
           
            console.log('Произошла ошибка!');
        }
    },
    showMyDb:function(hidden){
        if (!hidden){
            console.log(personalMovieDb);
        }
    },
    writeYourGenres:function(){
        for (let i = 1; i < 2; i++){
            const usersGenres = prompt(`Введите выши любимые жанры через запятую`, '');
            if (usersGenres === null || usersGenres === '' ){
                i--;
            }else{
                personalMovieDb.genres = usersGenres.split(', ');
            }
        }
        personalMovieDb.genres.forEach((elem, i) => {
            console.log(`"Любимый жанр № ${i+1} - это ${elem}"`);
        });
    },
    toggleVisibleMyDb:function(){
        if(!personalMovieDb.privat){
            personalMovieDb.privat = true;
        }else{
            personalMovieDb.privat = false;
        }
    }

};
personalMovieDb.start();
personalMovieDb.rememberMyFilms();
personalMovieDb.writeYourGenres();
personalMovieDb.toggleVisibleMyDb(personalMovieDb.privat);
personalMovieDb.showMyDb(personalMovieDb.privat);
personalMovieDb.detectPersonalLevel();
