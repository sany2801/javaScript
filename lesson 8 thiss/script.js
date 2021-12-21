//this
// function foo(){
//     console.log(this.name)
// }
// var name = 'Jay';

// foo();
// =================================

// function foo(){
// console.log(this.name);
// }
// var obj = {
//     name: 'Sid',
//     foo: foo,
// };

// obj.foo()
// console.log(obj)

// ==================== call / apply
// function foo(){
//     console.log(this.name);
// }

// var obj = {
//     name: 'Pitter',
// };
// foo.call(obj)

// ==========================
// function foo(age){
//     console.log(this.name)
//     console.log(age)
// }

// var obj = {
//     name: 'jay',
// }
// foo.call(obj, 14);

// =============== apply

// function foo(...args){
//     console.log(args)
// }

// var obj = {
//     name: 'jay',
// }
// foo.apply(obj, [14, 'EFWASDV', 43515]);

// ===================== bind

// function foo(age){
//     console.log(this.name)
//     console.log(age)
//     return this.name + ' - ' + age;
// }

// var obj = {
//     name: 'jay',
// }
// var bar = foo.bind(obj)
// var b = bar(3);
// console.log(b);

// Когда ф-ция вызывается с помощью оператора new (вызов конструктора),
// автоматически выполняются следующие действия:

// 1. Создаётся новый объект.
// 2. Производится связывание этого (нового) объекта с [[Prototype]].
// 3. Сконструированный объект назначется в качестве
//     связывания this для этого вызова функции.
// 4. Если ф-ция не возвращает свой альтернативный объект,
//     вызов функции автоматически возвращает сконструированный объект.
const foo = () =>{
    console.log(this)
    console.log(this.name)
}
var obj = {
    name: 'Jak',
    foo: foo,
}
obj.foo()