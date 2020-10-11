'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDb.count <= 10) {
        console.log('Вы посмотрели мало фильмов');
    } else if (personalMovieDb.count > 10 && personalMovieDb.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDb.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!');
    }
}
detectPersonalLevel();

function showMyDb(hidden){
    if (!hidden){
        console.log(personalMovieDb);
    }
}
showMyDb(personalMovieDb.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        const usersGenres = prompt(`Ваш любимый жанр № ${i}?`, '');
        if (usersGenres != null && usersGenres.length != 0 && usersGenres.length <= 50){
            personalMovieDb.genres.push(usersGenres);
        }else{
            i--;
        }
    }
}
writeYourGenres();
