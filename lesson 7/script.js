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
let animal = {
        eats: true,
        walk() {
            console.log('Animal walk');
        }
    };
    let rabbit = {
        jumps: true,
        __proto__: animal
    }
    let LongEar ={
        earLength: 10,
        __proto__: rabbit,
    };
console.log(longEar.jumps)
LongEar.walk()

