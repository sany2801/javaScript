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


const func = async () =>{
    let result;
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> response.json())
    .then((json) => (result = json));
    const btn = document.querySelector('.button')
    const post = document.querySelector('.post')
    for(i=1; i <= result.length / 10; ++i){
        btn.innerHTML += `
        <button id = '${i*10}' class='buton ${i-1}'>${i}</button>`
       }
  let button = document.querySelectorAll('.buton')
  console.log(...button)

const draw = (index)=>{
    let newResult = result.slice(index, index + 10)
    post.innerHTML = "" 
    newResult.forEach((element)=>{
        post.innerHTML +=`
        <p>Id: ${element.id}</p>
        <p>Tittle: ${element.title}</p>
        `
    })
}
console.log(btn)
btn.addEventListener('click', (event)=>{    
    console.log(event.target.id)
    btnId = event.target.id
    console.log(btnId)
    draw(btnId - 10, btnId)
})
}
func()



