const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Зачеркнуть выполненную задачу
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    // Кнопка удаления
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
        updateEmptyMessage();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";

    updateEmptyMessage();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateEmptyMessage();