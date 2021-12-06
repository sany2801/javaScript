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
    const modal = document.querySelector('.wrapper')
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
                    }
                });
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
                        if(item.tittle === newtittle.value && item.discription === newdiscription.value){
                        data.todo.splice(i, 1, ({tittle:tittlemodal, discription: newdiscription.value}))
                    }
                })
                console.log(data.todo)
                console.log(newtittle.value)
                modal.style.display = 'none'
                drawlist(data.todo)
                })
            break;
            default:
                break;
            }
    })
}
init()








    // const checkbox = document.querySelector('.checkbox')
    // const checkboxoff = document.querySelector('.checkboxoff')
    // console.log(checkbox.value)
    // console.log(checkboxoff.value)

    // const menu = document.querySelector('.menu')
    // const line = [...document.querySelectorAll('.line')]
    // const list = document.querySelector('.list')
    // menu.addEventListener('click', () =>{
    //     console.log(line)
    //     line[1].style.display = 'none'
    //     line[0].style.transform = 'rotate(45deg)'
    //     line[2].style.transform = 'rotate(-45deg)'
    //     line[0].style.marginBottom = '-11px'
    //     list.style.display = 'block'
    // })