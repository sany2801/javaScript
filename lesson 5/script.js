const drawlist = (datatype) => {
    const todo = document.querySelector('#todoo')
    todo.innerHTML = '';
    datatype.forEach(item => {
        todo.innerHTML +=
        `<div class="card">
        <span>Tittle: </span>
        <span class='tittle'>${item.tittle}</span>
        </br>
        <span>Discription: </span>
        <span class='discription'>${item.discription}</span>
        </br>
        <button class="eddit">Edit</button>
        <button class="delete">Delete</button>
    </div>`
    });

}
const init = () =>{
const todoolist = document.querySelector('.todooList')
const tittle = document.querySelector('#tittle')
const discription = document.querySelector('#discription')
const button = document.querySelector('#button')
const form = document.querySelector('#form')

let data = {
    todo: [],
    inprogress: [],
    done: []
}

button.addEventListener('click', (event) => {
    event.preventDefault()
    
    data.todo.push({
        tittle: tittle.value,
        discription: discription.value
    })
    console.log(data.todo)
    form.reset();
    drawlist(data.todo)
})
todoolist.addEventListener('click', (event) =>{
        console.log(event.target.classList.value)
        switch(event.target.classList.value){
            case 'delete':
                const card = event.target.closest('.card')
                const tittle = card.querySelector('.tittle').textContent
                const discription = card.querySelector('.discription').textContent
              data.todo.forEach(function(item, i){
                  if(item.tittle === tittle){
                      data.todo.splice(i, 1)
                  }
                  
              })
              console.log(data.todo)
              
            console.log(card)
                console.log(tittle, discription)
                break;
            case 'eddit':
            console.log(event.target)
            break;
            default:
                break;
        }
    })
}
init()

    const checkbox = document.querySelector('.checkbox')
    const checkboxoff = document.querySelector('.checkboxoff')
    console.log(checkbox.value)
    console.log(checkboxoff.value)

    const menu = document.querySelector('.menu')
    const line = [...document.querySelectorAll('.line')]
    const list = document.querySelector('.list')
    menu.addEventListener('click', () =>{
        console.log(line)
        line[1].style.display = 'none'
        line[0].style.transform = 'rotate(45deg)'
        line[2].style.transform = 'rotate(-45deg)'
        line[0].style.marginBottom = '-11px'
        list.style.display = 'block'
    })