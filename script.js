const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('inputBox');


URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=997ef2dd';

searchForm.addEventListener('submit', () => {
    console.log(inputBox.value);
})