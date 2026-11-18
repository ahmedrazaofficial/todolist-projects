const todoForm = document.getElementById('todoForm');   // Form (input + submit button)
const todoInput = document.getElementById('todoInput'); // Input field
const submitBtn = document.getElementById('submitBtn');   // Submit button
const todoList = document.getElementById('todoList');   // Todo List

let idToUpdate = null;

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = todoInput.value.trim();
    if (value === "") return;

    if (idToUpdate) {
        // Update - When there is id in `idToUpdate`
        const todo = document.getElementById(idToUpdate);
        todo.children[0].children[1].innerHTML = value;
        submitBtn.innerHTML = "Add";
        idToUpdate = null;
    } else {
        // Add - when `idToUpdate` is null
        const id = String(Date.now());
        console.log(value, id);

        todoList.insertAdjacentHTML("beforeend", `
            <li id="${id}">
                <div>
                    <input type="checkbox" id="todo${id}" onchange="handleCheck(${id})">
                    <label for="todo${id}">${value}</label>
                </div>
                <div>
                    <button class="edit-btn" onclick="handleEdit(${id})">Edit</button>
                    <button class="delete-btn" onclick="handleDelete(${id})">Delete</button>
                </div>
            </li>
`)
    }

    todoInput.value = ""
});

function handleEdit(id) {
    const todo = document.getElementById(id);
    const value = todo.children[0].children[1].innerHTML;
    todoInput.value = value;
    idToUpdate = id;
    submitBtn.innerHTML = "Update"
}

function handleDelete(id) {
    const todo = document.getElementById(id);
    todo.remove();
}

function handleCheck(id) {
    const todo = document.getElementById(id);
    todo.classList.add("completed");
}

// C - Create / POST
// R - Read / GET
// U - Update / PUT
// D- Delete / DELETE