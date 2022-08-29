'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      posterGenre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type = "checkbox"]');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substr(0, 21)}...`; 
        }

        if(favorite) {
            console.log('Добавляем любимый фильм');
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
    
        createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
});

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

const makeChanges = () => {
    posterGenre.textContent = 'Драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
};

const sortArr = (arr) => {
   arr.sort(); 
};

const createMovieList = (films, parent) => {

    parent.innerHTML = "";

    sortArr(films);

    films.forEach((item, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
        });
    });
};

deleteAdv(promoAdv);
makeChanges();
createMovieList(movieDB.movies, movieList);


