// const divLesson = document.getElementById('Lesson')
// console.log(divLesson.textContent)
// const closestExaple = document.querySelector('.closestExaple')
// console.log(closestExaple.closest('.Lesson3'))

// const deleteBtn = document.querySelector('#deleteBtn')
// deleteBtn.addEventListener('click', () => {
//     console.log('click');
// });

// const card = document.querySelector('.card')
// const innerExmpl = document.querySelector('.innerExmpl')
// card.addEventListener('click', (event) => {
//     // console.log(event.target);
//     if(event.target.id === 'deleteBtn'){
//     innerExmpl.innerHTML += '<h1>Delete</h1>'
//         // console.log('click delete')
//     }
//     if(event.target.id === 'editBtn'){
//         // console.log('click edit')
//     // innerExmpl.innerHTML += 'Edit'
//     innerExmpl.innerHTML = input.value
//     }
//     // console.log('click');
//     // console.log(event)
//     // console.log(event.target)
//     // console.log(event.currentTarget)
// });


const inputTittle = document.querySelector('#tittle')
const inputDiscription = document.querySelector('#discription')
const form = document.querySelector('#form')
const button = document.querySelector('#button')
const obj = {
title: '',
discription: '',
}
button.addEventListener('click', () => {
    console.log('click')
    obj.title = inputTittle.value
    obj.discription = inputDiscription.value
    inputTittle.value = '';
    inputDiscription.value = '';
    console.log(obj)
    form.innerHTML +=`<p>TITTLE: ${obj.title} <p>Discription: ${obj.discription}`
})
// button.addEventListener('click', () => {

// })