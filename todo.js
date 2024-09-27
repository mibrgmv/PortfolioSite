const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("task-list")
const taskCount = document.getElementById("task-count");
const completedCount = document.getElementById("completed-count");

function updateCounts() {
    const allTasks = listContainer.querySelectorAll("li");
    const completedTasks = listContainer.querySelectorAll("li.crossed");
    taskCount.textContent = allTasks.length;
    completedCount.textContent = completedTasks.length;
}

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
    updateCounts();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("crossed");
        saveContent();
        updateCounts();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveContent();
        updateCounts();
    }
}, false);

function saveContent() {
    localStorage.setItem("content", listContainer.innerHTML);
}

function displayContent() {
    listContainer.innerHTML = localStorage.getItem("content");
    updateCounts();
}

displayContent();