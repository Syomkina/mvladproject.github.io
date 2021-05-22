const inputText = document.querySelector('.text')
const btnAdd = document.querySelector('.but')

const mainList = document.querySelector('.main-list') 

/* Список кликов, которые будем обрабатывать:
логика следующая - элемент на который кликаем.обработчик события(какое событие, функция, котороя соотвествует выполняемому действию по клику)*/
btnAdd.addEventListener('click', addItem) /* клик на кнопку добавить */
btnClear.addEventListener('click', clearField) /* клик на кнопку удалить все поля */
/* mainList.addEventListener('click', setRandomColor) если будет инетерсно, то по клику на список добавлять ему рандомный цвет фона */


/* Функция, которая отвечает за добавление лишки с кнопками по клику на кнопку ЭДобавить" */
function addItem () {
    let inputTextValue = inputText.value 
    inputText.value = ''

    if (checkInput (inputTextValue)) {  
        window.location.href = 'file:///C:/Vlad%20Matyko/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/Front-end/1pageWebsite/thu.html';

    for (let index = 0; index < checkArray.length; index++) {
        checkArray[index].onclick = function () {
            this.parentElement.querySelector('span').classList.toggle('completed')
        }
    }
    }
    else {
        alert('Text should be from 3 to 100 characters')
    }
}
function checkInput (text) {
    if (text.length > 2 && text.length <= 100) {
        return true
    }
    else {
        return false
    }
}
