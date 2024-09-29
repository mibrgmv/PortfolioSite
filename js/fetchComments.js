const commentsContainer = document.querySelector('.comments-container');
const preloader = document.querySelector('.preloader');
let filter = 100;

function fetchComments() {
    preloader.style.display = 'block';

    fetch(`https://jsonplaceholder.typicode.com/comments?id_gte=${filter}`)
        .then(response => response.json())
        .then(data => {
            preloader.style.display = 'none';
            data.forEach(comment => {
                let html = `<div class="comment"><p>${comment.body}</p><p>by ${comment.name}</p><p>at ${comment.email}</p></div>`
                preloader.insertAdjacentHTML('afterend', html);
            });

            filter = filter > 100 ? 1 : filter + 100;
        })
        .catch(error => {
            preloader.style.display = 'none';
            commentsContainer.textContent = '⚠ Что-то пошло не так';
            console.error('Error:', error);
        });
}

window.onload = fetchComments;