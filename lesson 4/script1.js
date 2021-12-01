const todo = document.querySelector('#todoo')
const tittle = document.querySelector('#tittle')
const discription = document.querySelector('#discription')
const button = document.querySelector('#button')

let data = []


button.addEventListener('click', (event) => {
event.preventDefault()
    const obj = {
        tittle: '',
        discription: '',
    };

    obj.tittle = tittle.value
    obj.discription = discription.value
    tittle.value = '';
    discription.value = '';
    data.push(obj)
    console.log(obj)
    console.log(data)
    todo.innerHTML = ''
    data.forEach(function(item){
        todo.innerHTML += 
        `<div class = 'value'> 
        <div>Tittle: ${item.tittle}</div> 
        <div>Discription: ${item.discription}</div>
        <div class = 'buttoncontrol'>
        <button class = 'btnDelet'>Delete</button>
        <button class = 'btnEdit'>Edit</button>
        </div>
        </div>`
        
        })
});

