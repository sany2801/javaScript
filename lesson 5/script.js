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
        <button class="next">Next</button>
    </div>`
});
}
const drawInprogre = (datainprogres) => {
    const inprogres = document.querySelector('#inprogrestodo')
    inprogres.innerHTML = "";
    datainprogres.forEach(item => {
        inprogres.innerHTML +=
        `<div class="card">
        <span>Tittle: </span>
        <span class='tittle'>${item.tittle}</span>
        </br>
        <span>Discription: </span>
        <span class='discription'>${item.discription}</span>
        </br>
        <button class="eddit">Edit</button>
        <button class="delete">Delete</button>
        <button class="next">Next</button>
    </div>`
    });
}

const drawdelet = (datadelete) => {
    const deletetodo = document.querySelector('#deletetodolist')
    deletetodo.innerHTML = ''
    datadelete.forEach(item =>{
        deletetodo.innerHTML +=
        ` <div class="card">
        <span>Tittle: </span>
        <span class='tittle'>${item.tittle}</span>
        </br>
        <span>Discription: </span>
        <span class='discription'>${item.discription}</span>
        </br>
    </div>`
    });
}

 const init = () =>{
    const modal = document.querySelector('.wrapper')
    const todoolist = document.querySelector('.todooList')
    const tittle = document.querySelector('#tittle')
    const discription = document.querySelector('#discription')
    const button = document.querySelector('#button')
    const form = document.querySelector('#form')
 
    let data = {
        todo: [],
        inprogress: [],
        done: [],
        delete: []
    }
    
    button.addEventListener('click', (event) => {
        event.preventDefault()
        data.todo.push({
            tittle: tittle.value,
            discription: discription.value
        })

        form.reset();
        drawlist(data.todo)
        
})

todoolist.addEventListener('click', (event) =>{
        switch(event.target.classList.value){
            case 'delete':
                const card = event.target.closest('.card')
                const tittle = card.querySelector('.tittle').textContent
                const discription = card.querySelector('.discription').textContent
              data.todo.forEach(function(item, i){
                  if(item.tittle === tittle && item.discription === discription){
                      data.todo.splice(i, 1)
                      data.delete.push({tittle: item.tittle,
                                        discription: item.discription})
                      console.log(data.delete)
                    }
                });
                drawdelet(data.delete)
                drawlist(data.todo)
                break;
            case 'eddit':
                modal.style.display = 'block';
                const close = document.querySelector('#closeButton')
                close.addEventListener('click',() => (modal.style.display = 'none'))
                const newtittle = document.querySelector('#newtittle')
                const newdiscription = document.querySelector('#newdiscription')
                const cardmodal = event.target.closest('.card')
                const modalbutton = document.querySelector('#submitmodal')
                const tittlemodal = cardmodal.querySelector('.tittle').textContent
                const discriptionmodal = cardmodal.querySelector('.discription').textContent 
                newtittle.value = tittlemodal;
                newdiscription.value = discriptionmodal;
                modalbutton.addEventListener('click', () =>{
                    data.todo.forEach(function(item, i){
                        if(item.tittle === tittlemodal && 
                            item.discription === discriptionmodal){
                        data.todo.splice(i, 1, ({tittle: newtittle.value, 
                                                discription: newdiscription.value}))
                    }
                })
                console.log(data.todo)
                console.log(newtittle.value)
                modal.style.display = 'none'
                drawlist(data.todo)
                })
            break;
            case 'next':
                const nextTittle = document.querySelector('.tittle').textContent
                const nextDiscription = document.querySelector('.discription').textContent
              data.todo.forEach(function(item, i){
                  if(item.tittle === nextTittle && item.discription === nextDiscription){
                        data.inprogress.push({tittle: item.tittle,
                                            discription: item.discription})
                                        console.log(data.inprogress)
                            
                    }
              })
              drawInprogre(data.inprogress)
                console.log('next')
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