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

const advertBlock = document.querySelector('.promo__adv'),
      advertContent = advertBlock.querySelectorAll('img');
      
document.querySelector('.promo__adv-title').remove();
advertContent.forEach((item, i) => {
    item.remove();        
});

document.querySelector('.promo__genre').textContent = 'ДРАМА';
document.querySelector('.promo__bg').style.background = 'url(\'../img/bg.jpg\')';

movieDB.movies.sort();
const promoInteractiveList = document.querySelector('.promo__interactive-list');
promoInteractiveList.querySelectorAll('li').forEach(item => item.remove());
for (let index = 0; index < movieDB.movies.length; index++) {
    
    const promoInteractiveListItem = document.createElement('li');
    const promoInteractiveListItemDelete = document.createElement('div');

    promoInteractiveListItem.setAttribute('class', 'promo__interactive-item');
    promoInteractiveListItem.innerText = '' + (index + 1) + '. ' + movieDB.movies[index];
    
    promoInteractiveListItemDelete.setAttribute('class', 'delete');
    
    promoInteractiveListItem.append(promoInteractiveListItemDelete);
    promoInteractiveList.append(promoInteractiveListItem);

}

