const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("task-list")

function addTask() {
    if (inputBox.value === '') {
        alert("empty task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveContent();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("crossed");
        saveContent();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveContent();
    }
}, false);

function saveContent() {
    localStorage.setItem("content", listContainer.innerHTML);
}

function displayContent() {
    listContainer.innerHTML = localStorage.getItem("content");
}

displayContent();