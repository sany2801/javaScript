// class User{
//     constructor(name) {
//         this.name = name;
//     }


//     sayHi(){
//         console.log(`Hello ${this.name}!`);
//     }
// }
// let user = new User('ivan')

// =================================== Наследование
// class Animal{
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed = speed;
//         console.log(`${this.name} бежит со скоростью ${this.speed}`)
//     }
//     stop(){
//         this.speed = 0;
//         console.log(`${this.name} стоит.`)
//     }
// }

// class Rabbit extends Animal{
//     hide(){
//         console.log(`${this.name} прячется.`)
//     }
// }
// let rabbit = new Rabbit('Белый кролик');
// rabbit.run(5)
// rabbit.hide()



// class Animal{
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed = speed;
//         console.log(`${this.name} бежит со скоростью ${this.speed}`)
//     }
//     stop(){
//         this.speed = 0;
//         console.log(`${this.name} стоит.`)
//     }
// }

// class Rabbit extends Animal{
//     hide(){
//         console.log(`${this.name} прячется.`)
//     }
//     // super(...) вызываем родительский конструктор
//     stop(){
//         super.stop(); // вызываем родительский метод stop
//         this.hide(); // и затем hide
//     }
// }
// let rabbit = new Rabbit('Белый кролик');
// rabbit.run(5)
// rabbit.hide()

// Storage в файле Storage.js.
// Класс должен иметь методы:
// reset() - очищает хранящиеся в объекте данные.
// addValue(key, value) - сохраняет значение под указанным ключом.
// getValue(key) - возвращает значение по указанному ключу.
// deleteValue(key) - удаляет значение с ключом, возвращает true если такое есть, либо false если нет.
// getKeys() - возвращает массив состоящий из одних ключей.
// DrinkStorage - объект для хранения рецептов напитков. Ключом является название напитка, значением - информация о нём.

// class Storage {
//   constructor() {
//     this.DrinkStorage = {};
//   }

//   addValue(key, value) {}

//   getValue(key) {}

//   getKeys() {}






//   deleteValue(key) {}

//   reset() {}
// }

// const drinks = new Storage();