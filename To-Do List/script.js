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
    Array.from(ul.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo)=> {
            todo.classList.add('filtered');
        })

    Array.from(ul.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> {
            todo.classList.remove('filtered');
        })
}

search.addEventListener("keyup", (e) => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})