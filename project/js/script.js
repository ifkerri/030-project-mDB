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

const movieDB = {
    movies: [
        'Логан',
        'Лига справедливости',
        'Ла-ла лэнд',
        'Одержимость',
        'Скотт Пилигрим против...'
    ],
    refreshFilmList: function () {

        const promoInteractiveList = document.querySelector('.promo__interactive-list');
        promoInteractiveList.querySelectorAll('li').forEach(item => item.remove());
        movieDB.movies.sort();
        movieDB.movies.forEach((film, i) => {
            const text = '' + (i + 1) + '. ' + film;
            promoInteractiveList.innerHTML += `
                <li class="promo__interactive-item">${text}
                    <div class="delete"></div>
                </li>
                `;
        });

        promoInteractiveList.childNodes.forEach(node => {
            if (node.nodeName != '#text') {
                node.firstElementChild.addEventListener('click', e => {
                    e.preventDefault();
                    const filmValue = e.currentTarget.parentElement.textContent,
                          index = parseInt(filmValue.substr(0, filmValue.indexOf('.')));
                    movieDB.movies.splice(movieDB.movies.indexOf(movieDB.movies[index - 1]), 1);
                    movieDB.refreshFilmList();
                });
            }
        });

    }

};

const advertBlock = document.querySelectorAll('.promo__adv img'),
      inputFilm = document.querySelector('.promo__interactive .add input[type="text"]'),
      btnAddFilm = document.querySelector('.promo__interactive .add button'),
      isFavorite = document.querySelector('.promo__interactive .add .yes').previousElementSibling;

movieDB.refreshFilmList();

advertBlock.forEach(item => {
    item.remove();
});

document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.backgroundImage = 'url(\'../img/bg.jpg\')';

btnAddFilm.addEventListener('click', e => {
    
    e.preventDefault();
    
    if (isFavorite.checked) {
        console.log('Добавляем любимый фильм');
    }

    const filmValue = inputFilm.value.trim();
    if (filmValue != '' && movieDB.movies.indexOf(filmValue) == -1) {
        movieDB.movies.push(filmValue.length > 21 ? filmValue.substr(0, 21) + '...' : filmValue);
        movieDB.refreshFilmList();
        inputFilm.value = '';
    }

});
