// Git
// централизованная и распределённая
// отслеживаемые и неотслеживаемые
// изменённый, подготовленный (staged), после коммита зафиксированный

// git init
// git config --global user.name "Your Name"
// git config --global user.email "your_email@whatever.com"
// git remote
// git push
// origin Это локальный псевдоним , установленный в качестве ключа вместо URL удаленного репозитория.
// git status
// git add

// git pull
// git branchgit
// git checkout
// git log
// git clone
// ===============================

// Подключение скрипта на страницу
// инструкции hello world - alert / console.log
// комментарии
// Переменная - это «именованное хранилище» для данных.
// Объявление переменных var / let / const
// ( = ) - присвоение
// Нейминг
// Типы данных
// Примитивные типы и объекты (структуры данных)
// typeof
// Приведение типов
// Унарный / бинарный / операнд
// Инкремент/декремент
// Операторы сравнения
// Взаимодействие: alert, prompt, confirm
// Условные операторы
// Логические операторы

// alert("Hello world ... ");
// console.log("Hello world ... ");

// Дорогой программист,
// когда я писал этот код,
// только бог и я знал как он работает.
// Теперь знает только бог.

// Если ты пытаешься оптимизировать этот код
// и у тебя не получилось,
// пожалуйста увеличь счётчик,
// как предупреждение для другого программиста.

// total_hours_wasted_here = 254

// let user = "John";
// let age = 25;

// const user = "John";

// В JavaScript есть 8 основных типов.

// number для любых чисел целочисленные значения ограничены диапазоном ±(2**53-1) 9007199254740991
// bigint для целых чисел произвольной длины
// string для строк
// boolean для true/false
// null для неизвестных значений
// undefined для неприсвоенных значений
// symbol для уникальных идентификаторов
// object для более сложных структур данных

// console.log(typeof undefined); // "undefined"
// console.log(typeof 0); // "number"
// console.log(typeof 10n); // "bigint"
// console.log(typeof true); // "boolean"
// console.log(typeof "foo"); // "string"
// console.log(typeof Symbol("id")); // "symbol"
// console.log(typeof Math); // "object"  (1)
// console.log(typeof null); // "object"  (2)
// console.log(typeof alert); // "function"  (3)

// alert("Пример");
// const age = prompt("Введите возраст");
// const gender = confirm("Ваш пол мужской?");

// Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.
// let value = true;
// console.log(typeof value); // boolean
// value = String(value);
// console.log(typeof value); // string

// let str = "123";
// console.log(typeof str); // string
// let num = Number(str); // становится числом 123
// console.log(typeof num); // number

// let age = Number("Любая строка вместо числа");
// console.log(age); // NaN, преобразование не удалось

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("Привет!")); // true
// console.log(Boolean("")); // false

// Сложение + (бинарный / унарный)
// console.log("1" + 2); // "12"
// console.log(2 + "1"); // "21"
// console.log(2 + 2 + "1"); // ?
// console.log(2 + 2 + +"1"); // ?

// Вычитание -
// console.log(6 - "2"); // 4, '2' приводится к числу

// Умножение *
// console.log("6" * "2"); // оба операнда приводятся к числам

// Деление /
// console.log("6" / "2"); // 3, оба операнда приводятся к числам

// Взятие остатка от деления %
// console.log(5 % 2); // 1, остаток от деления 5 на 2
// console.log(8 % 3); // 2, остаток от деления 8 на 3

// Возведение в степень **
// console.log(2 ** 2); // 4  (2 умножено на себя 2 раза)
// console.log(2 ** 4); // 16 (2 * 2 * 2 * 2, 4 раза)

// Инкремент (++) / декремент (--)
// let counter = 2;
// counter++;  // работает как counter = counter + 1, просто запись короче
// counter--;
// console.log( counter ); // 3

// «Префиксная форма» - когда оператор идёт ПЕРЕД переменной: ++counter
// «Постфиксная форма» - когда оператор идёт ПОСЛЕ переменной: counter++

// let counter = 1;
// let a = ++counter; // (*)
// console.log("ПОСТфиксная форма", counter++);
// console.log("ПРЕфиксная форма", ++counter);
// console.log(a); // 2

// Операторы сравнения: >, <, >=, <=, ==, ===, !
// console.log( 0 == false ); // true
// console.log( '' == false ); // true

// let year = prompt("В каком году Вы окончите курсы?");
// if (year === 2021) {
//   alert("Отлично !");
// } else if (year > 2021) {
//   alert("Это поздновато");
// } else {
//   alert("Ты отлетаешь до нг");
// }

// 10 > 18 ? console.log(true) : console.log(false);

// console.log( true || true );   // true
// console.log( false || true );  // true
// console.log( true || false );  // true
// console.log( false || false ); // false

// console.log( true && true );   // true
// console.log( false && true );  // false
// console.log( true && false );  // false
// console.log( false && false ); // false

// Оператор объеденения
// let user = "Иван";
// console.log(user ?? "Аноним"); // Иван

// ================================

// while ==================================================
// let i = 0;
// while (i < 3) {
//   // выводит 0, затем 1, затем 2
//   console.log(i);
//   i++;
// }

// let i = 3;
// while (i) {
//   // когда i будет равно 0, условие станет ложным, и цикл остановится
//   console.log(i);
//   i--;
// }

// do while ==================================================
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// for ==================================================
// for (let i = 0; i < 3; i++) {
//   // выведет 0, затем 1, затем 2
//   console.log(i);
// }

// break ==================================================
// let sum = 0;

// while (true) {
//   let value = +prompt("Введите число", "");

//   if (!value) break;

//   sum += value;
// }

// console.log("Сумма: " + sum);

// continue ==================================================
// for (let i = 0; i < 10; i++) {
//   if (i <= 4) {
//     continue;
//   }

//   console.log(i);
// }

// switch ==================================================
// let a = "4";
// Тип имеет значение
// switch (4 > 1) {
//   case 3:
//     console.log("Маловато");
//     break;
//   case 3 > 1:
//     console.log("В точку!");
//     break;
//   case 5:
//     console.log("Перебор");
//     break;
//   default:
//     console.log("Нет таких значений");
// }

// function ==================================================
// Выбор имени функции
// Функция – это действие. Поэтому имя функции обычно является глаголом.
// Оно должно быть простым, точным и описывать действие функции.
// Как правило, используются глагольные префиксы, обозначающие общий характер действия, после которых следует уточнение.

// Функции, начинающиеся с…
// "get…" – возвращают значение,
// "calc…" – что-то вычисляют,
// "create…" – что-то создают,
// "check…" – что-то проверяют и возвращают логическое значение, и т.д.

// Примеры таких имён:
// showMessage(..)     - показывает сообщение
// getAge(..)          - возвращает возраст (в каком либо значении)
// calcSum(..)         - вычисляет сумму и возвращает результат
// createForm(..)      - создаёт форму (и обычно возвращает её)
// checkPermission(..) - проверяет доступ, возвращая true/false

// Одна функция – одно действие
// Функция должна делать только то, что явно подразумевается её названием. И это должно быть одним действием.

// Переменные, объявленные внутри функции, видны только внутри этой функции.
// function showMessage() {
//   console.log("Всем привет!");
// }

// showMessage();

// Функция обладает полным доступом к внешним переменным и может изменять их значение.
// let userName = "Вася";

// function showMessage() {
//   userName = "Петя"; // изменяем значение внешней переменной

//   let message = "Привет, " + userName;
//   console.log(message);
// }

// console.log(userName); // Вася перед вызовом функции
// showMessage();
// console.log(userName); // Петя, значение внешней переменной было изменено функцией

// Параметры и аргументы функции ==================================================
// function showMessage(from, text) {
//   // аргументы: from, text
//   console.log(from + ": " + text);
// }

// showMessage("Аня", "Привет!"); // Аня: Привет! (параметры: "Аня", "Привет!")
// showMessage("Аня", "Как дела?"); // Аня: Как дела? (параметры: "Аня", "Как дела?")

// Параметры по умолчанию ==================================================
// function showMessage(from, text = "текст не добавлен") {
//   console.log(from + ": " + text);
// }

// showMessage("Аня"); // Аня: текст не добавлен

// Возврат значения ==================================================
// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 2);
// console.log(result); // 3

// Function Declaration ==================================================
// function sum(a, b) {
//   return a + b;
// }

// Function Expression ==================================================
// let sum = function (a, b) {
//   return a + b;
// };

// Function Declaration VS Function Expression

// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).

// Arrow Function
// const sum = (a, b) => a + b;
// console.log(sum(1, 2)); // 3

// Многострочные стрелочные функции
// let sum = (a, b) => {
//   let result = a + b;
//   return result; // при многострочной стрелочной функции для возврата значения нужно явно вызвать return
// };

// console.log(sum(1, 2)); // 3