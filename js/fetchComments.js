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
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                const name = document.createElement('p');
                name.innerHTML = `by ${comment.name}`;
                name.classList.add('comment-name')
                const email = document.createElement('p');
                email.innerHTML = `at ${comment.email}`;
                email.classList.add('comment-email')
                const body = document.createElement('p');
                body.innerHTML = `"${comment.body}"`;
                body.classList.add('comment-body')
                commentElement.appendChild(body);
                commentElement.appendChild(name);
                commentElement.appendChild(email);
                commentsContainer.appendChild(commentElement);
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