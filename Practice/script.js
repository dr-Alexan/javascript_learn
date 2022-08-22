"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30)) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB); 
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= personalMovieDB.count; i++) {
           const a = prompt(`Ваш любимый жанр под номером ${i}`);

           if ((a != '') && (a != null)) {
                personalMovieDB.genres[i - 1] = a;
           } else {
                i--;
           }
        };

        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) { 
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        };
    }
};

personalMovieDB.writeYourGenres();





/*let j = 0;
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

console.log(personalMovieDB);*/