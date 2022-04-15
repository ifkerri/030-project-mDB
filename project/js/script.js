/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

//'use strict';

document.addEventListener('DOMContentLoaded', e => {

    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-ла лэнд',
            'Одержимость',
            'Скотт Пилигрим против...'
        ],


    };

    const advertBlock = document.querySelectorAll('.promo__adv img'),
        filmList = document.querySelector('.promo__interactive-list'),
        inputFilm = document.querySelector('.promo__interactive .add input[type="text"]'),
        btnAddFilm = document.querySelector('.promo__interactive .add button'),
        isFavorite = document.querySelector('.promo__interactive .add .yes').previousElementSibling;

    const refreshFilmList = (parent, films) => {

        parent.querySelectorAll('li').forEach(item => item.remove());
        arrSort(films);
        films.forEach((film, i) => {
            const text = '' + (i + 1) + '. ' + film;
            parent.innerHTML += `
                    <li class="promo__interactive-item">${text}
                        <div class="delete"></div>
                    </li>
                    `;
        });

        document.querySelectorAll('.delete').forEach((el, i) => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                el.parentElement.remove();
                films.splice(i, 1);
                refreshFilmList(parent, films);
            });
        });

    };

    const arrSort = (arr) => {
        arr.sort();
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        document.querySelector('.promo__genre').textContent = 'драма';
        document.querySelector('.promo__bg').style.backgroundImage = 'url(\'img/bg.jpg\')';
    };

    refreshFilmList(filmList, movieDB.movies);
    deleteAdv(advertBlock);
    makeChanges();

    btnAddFilm.addEventListener('click', event => {

        event.preventDefault();

        if (isFavorite.checked) {
            console.log('Добавляем любимый фильм');
        }

        const filmValue = inputFilm.value.trim();
        if (filmValue != '' && movieDB.movies.indexOf(filmValue) == -1) {
            movieDB.movies.push(filmValue.length > 21 ? filmValue.substr(0, 21) + '...' : filmValue);
            refreshFilmList(filmList, movieDB.movies);
            inputFilm.value = '';
        }

    });

});