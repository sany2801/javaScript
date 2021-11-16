const user = {
    firstname: 'Jon',
    lastname: 'Done',
    age: 30,
    pet: {
        type: 'Rabbit'
    },
}

console.log(user);
console.log(user.firstname);
console.log(user.lastname);
console.log(user.age);
console.log(user.pet);
console.log(user.pet.type);

const numbers = [1, 'get', 3]
for(let index = 0; index < numbers.length; index++){
    console.log('индекс' + index )
    console.log(numbers[index])
}
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers.lenght)

const str = 'Hello';
const num = [1, 2, 3];
num.push(str);
num.unshift(0);
console.log(num);

const num2 = [12, 'sd', 'dsf', 32]
console.log(num2)
num2.shift(1)
num2.pop()
console.log(num2)

// Задание! Поиск данных в массиве.
// Создадим массив объектов, который будет содержать данные о пользователях;
// Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя;
// Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// Если есть совпадение - вывести все данные этого пользователя в altert;
const data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];

let userage = +prompt('Введите возрост')
for(let index = 0; index < data.length; index++){
    if(userage === data[index].age){
        alert(` ${data[index].firstName} ${data[index].lastName} ${data[index].age} `)
    }
}

