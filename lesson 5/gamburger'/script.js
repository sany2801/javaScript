

    const checkboxoff = document.querySelector('.checkboxoff')
    // console.log(checkboxoff.checked)
    const menu = document.querySelector('.menu')
    const line = [...document.querySelectorAll('.line')]
    const list = document.querySelector('.list')
    const initmenu = () =>{
        menu.addEventListener('click', () =>{
            console.log(line)
            // console.log(checkboxoff.checked)
            console.log(checkboxoff.checked)
            for(;checkboxoff.checked === false;){
                checkboxoff.checked = true
                if(checkboxoff.checked === true){
                    line[1].style.display = 'none'
                    line[0].style.transform = 'rotate(45deg)'
                    line[2].style.transform = 'rotate(-45deg)'
                    line[0].style.marginBottom = '-11px'
                    list.style.display = 'block'
                    console.log('on')
                }
            }    
        })
    }
initmenu()


    const checkbox = () => {
    checkboxoff.addEventListener('click', () =>{
        if(checkboxoff.checked === true){
            line[1].style.display = 'none'
            line[0].style.transform = 'rotate(45deg)'
            line[2].style.transform = 'rotate(-45deg)'
            line[0].style.marginBottom = '-11px'
            list.style.display = 'block'
            console.log('on')
        }else{
            line[1].style.display = 'block'
            line[0].style.transform = 'rotate(0)'
            line[2].style.transform = 'rotate(0)'
            line[0].style.marginBottom = '0'
            list.style.display = 'none'
            console.log('off')
        }

    })
}
checkbox()
