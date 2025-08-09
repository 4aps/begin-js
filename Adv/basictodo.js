let todoCount = 0;

function addTodo() {
    const input = document.querySelector(".todo");
    const value = input.value.trim();

    if (value === "") {
        alert("Please enter a to-do item!");
        return;
    }

    todoCount++;
    const list = document.getElementById("todo-list");

    // Create li (valid inside ol)
    const li = document.createElement("li");
    li.className = "list-item";
    li.id = `todo-${todoCount}`;
    li.textContent = value + " ";

    // Create delete button
    const btn_li = document.createElement("button");
    btn_li.className = "btn_li";
    btn_li.textContent = "Delete";
    btn_li.onclick = function () {
        deleteToDo(li.id);
    };

    li.appendChild(btn_li);
    list.appendChild(li);

    input.value = "";
}

function deleteToDo(id) {
    const item = document.getElementById(id);
    if (item) {
        item.remove();
    }
}
