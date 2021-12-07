
    const checkbox = document.querySelector('.checkbox')
    const checkboxoff = document.querySelector('.checkboxoff')
    console.log(checkbox.value)
    console.log(checkboxoff.value)

    const menu = document.querySelector('.menu')
    const line = [...document.querySelectorAll('.line')]
    const list = document.querySelector('.list')
    menu.addEventListener('click', () =>{
        console.log(line)
        line[1].style.display = 'none'
        line[0].style.transform = 'rotate(45deg)'
        line[2].style.transform = 'rotate(-45deg)'
        line[0].style.marginBottom = '-11px'
        list.style.display = 'block'
    })