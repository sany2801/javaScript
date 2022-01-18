// let map = new Map();
// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ
// // // помните, обычный объект Object приводит ключи к строкам?
// // // Map сохраняет тип ключей,
// // так что в этом случае сохранится 2 разных значения:
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"
// console.log(map.size); // 3



//Его основные методы это:
// new Set(iterable) //– создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) //– добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value)// – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) //– возвращает true, если значение присутствует в множестве, иначе false.
// set.clear()// – удаляет все имеющиеся значения.
// set.size //– возвращает количество элементов в множестве.

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// //считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// //set хранит только 3 уникальных значения
// console.log(set.size); // 3
let user ={ 
    name: "John",
}; 
let descriptor = Object.getOwnPropertyDescriptor(user, "name");
 console.log(descriptor) 

