const addForm = document.querySelector(".add");
const ul = document.querySelector(".list-group");
const search = document.querySelector(".search input")


const generateTemplate = (todo) => {
    if(todo.length > 0) {
        const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class = "white">${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `
        ul.innerHTML += html
    } else{
        alert("You Need To Write Something!")
    }
    
    
}


addForm.addEventListener("submit", e => {

    e.preventDefault()

    const todo = addForm.add.value.trim();

    generateTemplate(todo);
    addForm.reset();

})

ul.addEventListener("click", e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//Search Algorithm

//keyup events
const filterTodos = (term) => {
    console.log(term)
}

search.addEventListener("keyup", (e) => {
    const term = search.value.trim();
    filterTodos(e.target.value)
})