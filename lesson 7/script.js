// const user = { name: 'Jon'};
// const admin = user;
// admin.name = "Kate";
// console.log(user.name)

// ___________________ сравнение
// const user  = {name: 'Ivan'}
// const user2  = {name: 'Ivan'}
// console.log("user, ", user)
// console.log('user2, ', user2)

// const strUser = JSON.stringify(user)
// const strUser2 = JSON.stringify(user2)
// const strUser3 = JSON.parse(strUser2)

// console.log('stRUser: ', strUser)
// console.log('stRUser2: ', strUser2)
// console.log('stRUser3: ', strUser3)

// console.log('eq-user', user === user2)
// console.log('eq', strUser === strUser2)


// _________________________клонирование
// const user = {
//     name: 'Sasha',
//     age: 23,
//     email:{
//         name: 'qwe'
//     },
// };
// let clone = Object.assign({}, user);
// clone.name = '1';
// console.log('clone', clone);
// console.log('user', user);

// const str = JSON.stringify(clone)
// const newObj = JSON.parse(str)

// ____________Замыкание и сборка мусора
// function foo(x){
//     return function(y){
//         return x * y;
//     };
// }
// const q = foo(10)
// console.log(q(5))
// console.log(q(10))
// console.log(q(68))


//______________ Аргументы

// function argsExmpl(...args){
//     // args - имя массива
//     console.log(args);
// }
// argsExmpl(1,2,4,5,7,9,90)

// ______________- setTimeout / setInterval

// setTimeout(() => {
//     console.log('setTimeout example');
// }, 1000);

// let count = 0;
// const refresh = setInterval(() => {
//     console.log(count);
//     if(count === 3){
//         clearInterval(refresh)
//     }
//     count = count + 1;
// }, 1000);

// ________________ Рекурсия
//Итеративный способ: цикл for:
// function pow(x, n){
//     let result = 1;

// //  умножаем result на x n раз в цикле
//     for(let i = 0; i<n; i++){
//         result *= x;
//     }
//     return result;
// }

// console.log(pow(2,3));

// ____________________________рекурсивный способ 
// function pow(x, n){
//     if(n == 1){
//         return x;
//     }else{
//         return x*pow(x, n - 1)
//     }
// }
// console.log(pow(2,3))

// _____________________ event loop
// function main (){
//     console.log('A')
//     setTimeout(() => {
//         console.log('B')
//     }, 1000);
//     console.log('C')
// }
// main()

//____________________----proto

// let animal = {
//     eats: true,
// };
// let rabit = {
//     jump: true,
// };

// rabit.__proto__ = animal;

// console.log(rabit.eats);
// console.log(rabit.jump);
// ===================================
// let animal = {
//     eats: true,
//     walk() {
//         console.log('Animal walk');
//     }
// };
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }
// rabbit.walk()
// ==================================
// let animal = {
//         eats: true,
//         walk() {
//             console.log('Animal walk');
//         }
//     };
//     let rabbit = {
//         jumps: true,
//         __proto__: animal
//     }
//     let LongEar ={
//         earLength: 10,
//         __proto__: rabbit,
//     };
// console.log(LongEar.jumps)
// LongEar.walk()

// let obj = {
//     0: 'Hello',
//     1: "world!",
//     length: 2,
// };

// obj.join = Array.prototype.join;
// console.log(obj.join(','))

// console.log(Array.prototype)

// const example = document.querySelector(".exmpl");
// console.log("offsetParent", example.offsetParent);
// console.log("offsetLeft", example.offsetLeft);
// console.log("offsetTop", example.offsetTop);
// console.log("offsetWidth", example.offsetWidth);
// console.log("offsetHeight", example.offsetHeight);
// console.log("clientLeft", example.clientLeft);
// console.log("clientTop", example.clientTop);
// console.log("clientWidth", example.clientWidth);
// console.log("clientHeight", example.clientHeight);
// console.log("scrollWidth", example.scrollWidth);
// console.log("scrollHeight", example.scrollHeight);
// console.log("scrollLeft", example.scrollLeft);
// console.log("scrollTop", example.scrollTop);

// const scrollButton = document.querySelector('#scrollButton')
// scrollButton.addEventListener('click', () =>{
//     example.classList.toggle('active');
//     if(example.classList.contains('active')){
//         example.style.height = `${example.scrollHeight}px`;
//     }else{
//         example.style.height = `200px`;

//     }
// });

// console.log(document.documentElement.clientWidth)
// console.log(document.documentElement.clientHeight)

// console.log(window.innerWidth)
// console.log(window.innerHeight)



// У элементов есть следующие геометрические свойства (метрики):

// offsetParent – ближайший CSS-позиционированный родитель или ближайший td, th, table, body.
// offsetLeft/offsetTop – позиция в пикселях верхнего левого угла относительно offsetParent.
// offsetWidth/offsetHeight – «внешняя» ширина/высота элемента, включая рамки.
// clientLeft/clientTop – расстояние от верхнего левого внешнего угла до внутренного.
//  Для операционных систем с ориентацией слева-направо эти свойства равны ширинам левой/верхней рамки. 
//  Если язык ОС таков, что ориентация справа налево, так что вертикальная полоса прокрутки находится не 
//  справа, а слева, то clientLeft включает в своё значение её ширину.
// clientWidth/clientHeight – ширина/высота содержимого вместе с внутренними отступами padding,
//  но без полосы прокрутки.
// scrollWidth/scrollHeight – ширины/высота содержимого, аналогично clientWidth/Height, 
// но учитывают прокрученную, невидимую область элемента.
// scrollLeft/scrollTop – ширина/высота прокрученной сверху части элемента, считается от 
// верхнего левого угла.
// Все свойства доступны только для чтения, кроме scrollLeft/scrollTop, изменение которых 
// заставляет браузер прокручивать элемент.


// let scrollBy = document.querySelector('#scrollBy')
// let scrollTo = document.querySelector('#scrollTo')
// let scrollIntoViewTrue = document.querySelector('#scrollIntoViewTrue')
// let scrollByFalse = document.querySelector('#scrollByFalse')
// const red = document.querySelector('.red');
// console.log(red.getBoundingClientRect());

// scrollBy.addEventListener("click", () => {
//     window.scrollBy(0, 10);
//   });
  
//   scrollTo.addEventListener("click", () => {
//     window.scrollTo(0, 50);
//   });
  
//   scrollIntoViewTrue.addEventListener("click", () => {
//     scrollIntoViewTrue.scrollIntoView();
//   });
  
//   scrollByFalse.addEventListener("click", () => {
//     scrollByFalse.scrollIntoView(false);
//   });
// ============================== LocalStorage 
// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
// length – количество элементов в хранилище.
const button = document.querySelector('.button')
const input = document.querySelector(".input");
button.addEventListener('click', () =>{
  const obj = {
    value: '',
  }
  obj.value = input.value
  console.log(obj)
  localStorage.setItem('test', JSON.stringify(obj));
})
if(localStorage.key('test')){
const test1 = JSON.parse(localStorage.getItem('test')).value
input.value = test1
}

// localStorage.setItem("inputValue", "qwejqlwrijlewq");
// const inputValue = localStorage.getItem("inputValue")
// input.value = inputValue;


// localStorage.setItem('test', 4);
// const test = localStorage.getItem("test")