const todoForm = document.getElementById('todoForm')
const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')


todoForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const value = todoInput.value.trim()
    if (value === "") return
    const id = String(Date.now())

    todoList.innerHTML +=
        ` <li id="${id}">
        <div class="actions">
        <span>${value}</span>
            <button class="edit-btn" onclick ="checking(${id})" >Edit</button>
            <button class="delete-btn" onclick ="del(${id})" >Delete</button>
        </div>
    </li>`
    todoInput.value = ""
})

function checking(id) {
    const todo = document.getElementById(id)
    const value = todo.children[0].children[0].innerHTML
    todoInput.value = value

}

function del(id) {
    const todo = document.getElementById(id)
    todo.remove()
}