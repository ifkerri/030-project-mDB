/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//'use strict';

const movieDB = {
    movies: [
        'Логан',
        'Лига справедливости',
        'Ла-ла лэнд',
        'Одержимость',
        'Скотт Пилигрим против...'
    ]
};

const advertBlock = document.querySelectorAll('.promo__adv img'),
      promoInteractiveList = document.querySelector('.promo__interactive-list');

advertBlock.forEach(item => {
    item.remove();        
});

document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.backgroundImage = 'url(\'../img/bg.jpg\')';

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

