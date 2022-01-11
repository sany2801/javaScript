// try{
//     console.log('Начало блока try')
//     lalala;
//     console.log('Конец блока try(никогда не выполнится)')
// } catch(err){
//     console.log('возникла ошибка', err)
// }   finally{
//     console.log('Срабатывает всегда!!!')
// }

// try{
//     lalala;
// } catch(error){
//     console.log(error.name); //понятное человеку сообщение
//     console.log(error.massage); //строка с именем ошибки
//     console.log(error);
// }

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('done')
//     }, 1000)
// });
// promise
//     .then((result)=> console.log('result', result))
//     .catch((error)=> console.log('error', error))
//     .finally(()=> console.log("finally")) 

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("text");
//     }, 1000);
//   })
//     .then((result) => {
//       console.log(result);
//     })
//     .then((result) => {
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("1");
//           resolve("data - result 2");
//         }, 3000);
//       }).then((data) => {
//         setTimeout(() => {
//           console.log("2");
//           console.log(data);
//         }, 1000);
//       });
//     })
//     .catch((error) => console.log("error ====>", error))
//     .finally(() => console.log("finally"));



// new Promise((resolve, reject)=>{
//     resolve(1)
// })
//     .then((result)=>{
//         console.log(result)
//     })
//     .then((result)=>{
//         new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 console.log(2)
//                 resolve(3)
//             }, 2000)
//         }).then((result)=>{
//             console.log(result)
//         })
//     })

// Promise.all([
//     new Promise((resolve)=> setTimeout(()=> resolve(1),3000)),
//     new Promise((resolve)=> setTimeout(()=> resolve(2),2000)),
//     new Promise((resolve)=> setTimeout(()=> resolve(3),1000)),
// ]).then((result)=> console.log(result))


// Promise.all([
//     new Promise((resolve, reject)=> setTimeout(()=> resolve(1),3000)),
//     new Promise((resolve, reject)=> 
//     setTimeout(()=> reject(new Error('Error')),2000)
//     ),
//     new Promise((resolve, reject)=> setTimeout(()=> resolve(3),1000)),
// ]).catch((err)=> console.log(err))


// Promise.race([
//     new Promise((resolve, reject)=> setTimeout(()=> resolve(1),3000)),
//     new Promise((resolve, reject)=> 
//     setTimeout(()=> reject(new Error('Error')),2000)
//     ),
//     new Promise((resolve, reject)=> setTimeout(()=> resolve(3),1000)),
// ]).then((result)=> console.log(result))

// const getSum = (a, b)=>{
//     return new Promise((res, rej)=>{
//         if(!Number(a) && a !==0 ){
//             rej('!!! type');
//         }else{
//             res(a+b)
//         }
//     })
//     .then((result)=> console.log(result))
//     .catch((err)=> console.log(err))
// }

// getSum(0, 6)
// getSum(3, 'd')

// const func = async()=>{
//     const promise = new Promise((res, rej)=>{
//         setTimeout(()=> res('okk!!!'), 1000);
//     });
//     const result = await promise;
//     console.log(result)
// };
// func()

const func = async () => {
  console.log("1");

  let result = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/")
  ).json();
  console.log(result);

  console.log("3");
};
func();
