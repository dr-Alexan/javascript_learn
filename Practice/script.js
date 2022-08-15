"use strict";

const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
    alert('Просмотрено довольно мало фильмов');
} else if ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30)) {
    console.log('Вы классический зритель');
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
    alert('Вы киноман');
} else {
    console.log('Произошла ошибка');
    alert('Произошла ошибка');
}

for (let i = 0; i < personalMovieDB.count; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if ((a != '') && (b != '') && (a != null) && (b != null) && (a.length <= 50)) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
}

let j = 0;
while (j < personalMovieDB.count) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
    i++;
}

let k = 1;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b; 
    k++;
} while (k < personalMovieDB.count);

console.log(personalMovieDB);