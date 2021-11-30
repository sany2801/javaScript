const div = document.getElementById("lesson")
const divByName = document.getElementsByName('dom')
const divClassName = document.getElementsByClassName("wrapper")
const divTagName = document.getElementsByTagName('div')
div.style.color = 'blue'
console.log(div)
console.log(divByName)
console.log(divClassName)
console.log(divTagName)
const div2 = document.getElementsByClassName("wrap")
console.log(div2)
let getElement = div2.querySelector('p')
let getAllElements = div2.querySelectorAll('p')
console.log(getElement)
console.log(getAllElements)

let div = document.getElementsByClassName('www')[0]
let p = [...div.querySelectorAll('p')]
let pw = div.querySelector('p')
let pw1 = div.querySelectorAll('p')


console.log(div)
console.log(p)
console.log(pw)
console.log(pw1)

// const arr = [1, 2, 3]
// const arr1 = [5, 6, 7]
// const marged = [0, ...arr, 4, ...arr1]
// console.log(marged)
