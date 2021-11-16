// Спросить у пользователя:
// Фамилию, имя, отчество РАЗДЕЛЬНО (оператором prompt)
// Возраст в годах (оператором prompt)
// Пол (оператором confirm, например, “Ваш пол - мужской?”)
// Вывести оператором alert анкету пользователя по примеру:
// Ваше ФИО:
// Ваш возраст в годах:
// Ваш возраст в днях:
// Через 5 лет вам будет:
// Ваш пол:
// Вы на пенсии:
// PS: (пенсионный возраст: Ж-55 / М-65)
// Оператор alert() должен использоваться ОДИН раз.
// Должна быть валидация для корректности вводимых данных (поле не пустое, возраст цифрой). 


function anketa(){
    let first_name = prompt('Введите ваше имя')
    while(!first_name){
        first_name = prompt('Введите ваше имя КОРРЕКТНО!')
    }
    // for(; first_name === null || first_name === "";){
    //     first_name = prompt('Введите ваше имя КОРРЕКТНО!')
    // }
    let last_name = prompt('Введите вашу фамилию')
    for(; last_name === null || last_name === "";){
        last_name = prompt('ВВедите коректно вашу фамилию!!!')
    }
    let patronymic = prompt('Введите ваше отчество')
    for(;patronymic === null || patronymic === ""; ){
        patronymic = prompt('Введите ваше отчество КОРРЕКТНО!!!')
    }
    let age = +prompt('Сколько вам лет')
    for(; Number.isNaN(age) || age === 0;){
        age = +prompt('Введите ваш возраст корректно')
    }
    let gender = confirm('Вашпол мужской?') ? 'Мужской' : 'Женский'
    let pensioner;
    if(gender === true && age > 65 || !gender && age > 55 ) {
        pensioner = 'да'
    }else{
        pensioner = 'нет'
    }
    alert(`
    Ваше ФИО: ${last_name} ${first_name} ${patronymic}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${age * 365}
    Через 5 лет вам будет: ${age + 5}
    Ваш пол: ${gender}
    Вы на пенсии: ${pensioner}`)
}
anketa()

function getInfo(text){
    let result = prompt(text);
    return result;
}
function genderBoolen(){
    let gender = confirm('Вашпол мужской?') ? 'Мужской' : 'Женский'
}
const init = () => {
    const first_name = getInfo('Ваше имя')
    const last_name = getInfo('Введите вашу фамилию')
    let patronymic = getInfo('Введите ваше отчество')
    let gender = confirm('Вашпол мужской?') ? 'Мужской' : 'Женский'

}