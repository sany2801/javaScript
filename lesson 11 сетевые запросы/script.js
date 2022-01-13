// const func = async () => {
//     let result;
  
//     try {
//       result = 
//     //   await (
//         await fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'")
//     //   ).json();
//     } catch (error) {}
  
//     console.log(result);
//   };
  
//   func();

// let url = new URL('https://jsonplaceholder.typicode.com/posts?userId=1')
// console.log(url)


// const func = async () => {
//   let result;

//   try {
//     result = await (
//       await fetch("https://jsonplaceholder.typicode.com/photos")
//     ).json();
//   } catch (error) {}

//   console.log(result);
// };

// func();

// let user = document.querySelector('.user')
// const func = async () => {
//     let result;
    
//    await fetch('https://jsonplaceholder.typicode.com/photos')
//     .then((response) => response.json())
//     .then((json) => (result = json));
//     console.log(result)

//     result.forEach((nam)=>{
//         // console.log(nam.url)
//         user.innerHTML +=`
//         <div style="background-image: "url('${nam.url}')";"></div>`
//     });
// }
// func()

const post = document.querySelector('.posr')
const btn = document.querySelector('.button')
const func = async () =>{
    let result;
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> response.json())
    .then((json) => (result = json));
    console.log(result.length)
 
}
func()

