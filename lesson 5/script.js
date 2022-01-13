const Data = {
    todo: [],
    InProgres: [],
    done: [],
    deleted: []
};

const todoList = document.querySelector('.todo-list')
const button = document.querySelector('#button')
const tittle = document.querySelector('#tittle')
const discription = document.querySelector('#discription')
button.addEventListener('click', (event) =>{
    event.preventDefault()
    console.log(Data.todo)
    Data.todo.push({
        tittle: tittle.value,
        discription: discription.value
    })
})
