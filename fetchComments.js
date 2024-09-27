const commentsContainer = document.querySelector('.comments-container');
const preloader = document.querySelector('.preloader');
let filter = 100;

function fetchComments() {
    preloader.style.display = 'block';

    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => response.json())
        .then(data => {
            preloader.style.display = 'none';
            data.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.textContent = `
                    Name: ${comment.name}
                    Email: ${comment.email}
                    Comment: ${comment.body}
                `;
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