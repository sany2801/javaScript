const div = document.querySelector('#form')
const tittle = document.querySelector('#tittle')
const discription = document.querySelector('#discription')
const button = document.querySelector('#button')
let data = []
button.addEventListener('click', () => {
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
    div.innerHTML = ''
    data.forEach(function(item){
        div.innerHTML += `<p>Tittle: ${item.tittle}</p> <p>Discription${item.discription}</p>`
        })
});

