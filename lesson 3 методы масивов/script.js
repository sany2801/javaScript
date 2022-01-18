// let arr = ['я','изучаю','js','прямо','сейчас']
// console.log('arr', arr)

// const res = arr.splice(0, 2,)
// console.log('arr', arr)
// console.log('res', res)

// let arr1 = ['я','изучаю','js','прямо','сейчас']
// arr1.splice(1, 2)
// console.log('arr', arr1)

let arr2 = ['я','изучаю','js','прямо','сейчас']
console.log(arr2.slice(1, 3))
console.log(arr2.slice(-3))

// let arr3 = [1, 2]
// console.log(arr3.concat([3, 4]))
// console.log(arr3.concat([3, 4], [5, 6]))
// console.log(arr3.concat([3, 4], 5, 6))

// arr3.forEach(function (item, index, array){

// });

// ['Hello', 'bibo', 'narac'].forEach((item, index)=>{
//     console.log(`${item} имеет позицию ${index} в `)
// })


// arr2.forEach((item, index, arr2)=>{
//     console.log(`${item} имеет позицию ${index} в ${arr2}`)
// })

// let arr4 = [1, 0, false]
// console.log(arr4.indexOf(0))
// console.log(arr4.indexOf(false))
// console.log(arr4.indexOf(null))
// console.log(arr4.lastIndexOf(0))
// console.log(arr4.includes(0))
// console.log(arr4.indexOf(null))

// let users = [
//     {id: 1, name: 'vasy', cheked: 'true'},
//     {id: 2, name: 'vany', cheked: 'true'},
//     {id: 3, name: 'sasha', cheked: 'true'}
// ]
// let user = users.find((item, index, array) => item.id === 1);
// console.log(user.name)

// let someuser = users.filter((item) => item.id < 3);
// console.log(someuser)

// let lenghts = ['Bibo', 'bobo', 'blabla', 'qedsa'].map((yigu) => yigu.length);

// let arr5 = [1, 2, 3, 4, 5]
// arr5.reverse();
// console.log(arr5)
// console.log('lenghts', lenghts)

// let names = 'вася, петя, маша'
// let arr6 = names.split(' ')
// console.log(arr6)

// let arr7 = ['vasy', 'pety', 'grisha']
// let str7 = arr7.join(', ')
// console.log(str7)

// let arr8 = [1, 2, 3, 4, 5, 6]
// let result = arr8.reduce((acc, current)=>{
//     console.log('acc', acc)
//     console.log('current', current)
//     return acc + current
// },0);

// let arr9 = [1, 3, 14]
// console.log(arr9.sort())

// function compare(a, b){
//     if(a > b) return 1;
//     if(a === b) return 0;
//     if(a < b) return -1;
// }

// let arr10 = [234, 52, 5, 3465, 1, 53415, 3, 15, 2]
// arr10.sort((a, b) => a - b);
// console.log(arr10)