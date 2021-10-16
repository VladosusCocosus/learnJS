// JavaScript
// JavaScript - язык созданный для оживления сайтов, изначально работал только в браузере, на данный момент JavaScript
// может выполнятся так же и на сервере или на любом другом устройстве, имеющем движок JS (V8 – Основной)
// Работа движка:
//     1.Движок (встроенный, если это браузер) читает («парсит») текст скрипта.
//     2.Затем он преобразует («компилирует») скрипт в машинный язык.
//     3.После этого машинный код запускается и работает достаточно быстро.
//
// Что может JavaScript на сайте:
//     ·Добавлять новый HTML-код на страницу, изменять существующее содержимое, модифицировать стили.
//     ·Реагировать на действия пользователя, щелчки мыши, перемещения указателя, нажатия клавиш.
//     ·Отправлять сетевые запросы на удалённые сервера, скачивать и загружать файлы (технологии AJAX и COMET).
//     ·Получать и устанавливать куки, задавать вопросы посетителю, показывать сообщения.
//     ·Запоминать данные на стороне клиента («local storage»).
//
// Справочники:
//     ·MDN (Mozilla) JavaScript Reference – это справочник с примерами и другой информацией. Хороший источник для
//     получения подробных сведений о функциях языка, методах встроенных объектов и так далее.
//     Располагается по адресу https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference.
//     Хотя зачастую вместо их сайта удобнее использовать какой-нибудь интернет-поисковик, вводя там запрос
//     «MDN [что вы хотите найти]», например https://google.com/search?q=MDN+parseInt для поиска информации о функции parseInt.
//     ·MSDN – справочник от Microsoft, содержащий много информации, в том числе по JavaScript
//     (который там часто обозначается как JScript). Если вам нужно найти что-то специфическое по браузеру Internet Explorer,
//     лучше искать там: http://msdn.microsoft.com/.
//     Так же, как и в предыдущем случае, можно использовать интернет-поиск, набирая фразы типа «RegExp MSDN»
//     или «RegExp MSDN jscript».
//
// IDE:
//     ·Visual Studio Code (бесплатно)
//     ·WebStorm (платно, бесплатно по студ.подписке).

//Переменные
//const - неизменяемая переменная
//let - изменяемая переменная
// const a = "a"
// let b = "b"
// b = "3"

// Базовый операторы для отладки
// console.log("b = ", b, "a = ", a )

//Типы данных
// number, bigint, string, boolean, null, undefined, object, symbol
// Object https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
//  const obj = {a: "a", b: "b"}
// Array https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
//  const arr = [a, b, c]
//
// typeof something - возвращает тип данных
// typeof 1 -> number
// typeof "str" -> string
// typeof 10n -> bigint
// typeof true -> boolean
// typeof Symbol("id") ->  "symbol"
// typeof [array] = typeof {object: "object"} -> object


// console.log(typeof [])

const array = [1, 4, 5, 6, 8, 2, 5, 8]
let summ = 1
//0...n

//Циклы
// for (let i = 0; i < array.length; i++) {
//     summ = summ * array[i]
// }

// let value = 0

// while (value < 10) {
//     value += 1
//     console.log(value)
// }

// let summ2 = 1;
//
// array.map(function (num){
//     summ2 *= num
// })

// ARRAY.map() https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
// HASHMAP.foreach() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Поиск, изменение элемента(DOM element) на странице
// const el = document.getElementById("counter")


// const array = ["1"]
// console.log(array.length) --> "1"

// const changeMargin = (sum) => {
//     const el = document.getElementById("counter")
//     el.style.marginLeft = sum + "px"
//     return sum
// }
//
// let summ3 = 0
//
// while (summ3 < 100){
//     setTimeout(changeMargin(summ3), 1000)
//     summ3 ++
// }

// const innerBody = document.getElementById("inner-body")
// innerBody.innerHTML = "<div>innerHTML</div>"

// Функция

// Что такое функция?
// Функции - ключевая концепция в JavaScript. ... Любая функция это объект, и следовательно ею можно манипулировать как
// объектом, в частности: передавать как аргумент и возвращать в качестве результата при вызове других функций
// (функций высшего порядка);

//Как ее объявить?
//1.Обыкновенная функция(Function declaration)
// function alertOnClick1(){
//     //1. Вызов функции по клику
//     alert("alertOnClick")
// }

// 2.Именованная функция(Function expression)
// const alertOnClick2 = function () {
//     const element = document
// };

//Отличие между ними:
// - время создания: Function Declaration создаются до выполнения первой строчки кода, а Function Expression по ходу выполнения, в момент, когда интерпретатор дойдёт до данной строки кода;
// - время вызова - Function Declaration можно вызвать до того, как она была объявлена, а Function Expression- нельзя;
// - условное объявление с if возможно только для Function Expression

// Стрелочная(доступен в ES2015 (ECMAScript))
// const alertOnClick3 = () => {
//    // Отличия от обычной и именованной:
//    // 1.Не имеет своего контекста выполнения
//    // 2.Неявный return
// }
//Пример неявного return
// const _return = (a) => a + 1
// console.log(_return(1))

// let counter = 0
//
// const innerCounter = () => {
//     const counterEl = document.getElementById("counter")
//     counterEl.innerText = counter
// }
//
//
// const onPlus = () => {
//     counter++
//     innerCounter()
// }
//
// const onMinus = () => {
//     counter--
//     innerCounter()
// }
//
// const onCancel = () => {
//     counter = 0
//     innerCounter()
// }
//
//
// let firstNumb = null // => false
// let secondNumb = null
// let action = null
//
// const innerNumb = (numb) => {
//     if (firstNumb) {
//         secondNumb = numb
//     } else {
//         firstNumb = numb
//     }
// }
//
// const pickAction = (_action) => {
//     action = _action
// }
//
// const onSumm = () => {
//     if (action === "-"){
//         console.log(firstNumb - secondNumb)
//     } else {
//         console.log(firstNumb + secondNumb)
//     }
//
//     firstNumb = null
//     secondNumb = null
//     action = null
// }
//
//
// innerCounter()