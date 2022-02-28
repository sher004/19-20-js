// let keys=['a','b','c','d','e']
// let values=[1,2,3,4,5]
// let obj={};
// console.log(obj)

// for (let i=0; i<4; i++){
//     obj[keys[i]]=values[i]
// }
// console.log(obj);

// let arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
// let arr2 = [1, 2, 3, 4, 5, 6, 7]
// let obj = {}
// for (let i = 0; i <= 6; i++) {
// 	obj[arr2[i]] = arr1[i];
// }

// console.log(obj);

// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17, 'f': 9};
// let result = {}

// for (let key in obj) {
//     if (obj[key] <= 20 && obj[key] >=10) {
// 		result[key] = obj[key];
// 	}
// }

// console.log(result)

// let obj = {'пн': 1, 'вт': 2, 'ср': 3, 'чт': 4, 'пт': 5, 'сб': 6, 'вс': 7};

// for (let key in obj) {
//     obj[key] % 2 == 1;
// }

// console.log(obj)


// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?")

// let lattestMovie = prompt("Один из последних посмотренных фильмов"),
//     rate = prompt("Насколько оцените его"),
//     lattestMovies = prompt("Один из последних посмотренных фильмов"),
//     rates = prompt("Насколько оцените его")

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privet: false
// }

// if(numberOfFilms <10){
//     console.log('просмотренно очень мало фильмов')
// }else if( numberOfFilms>=10 && numberOfFilms<30){
//     console.log('вы классическтй зритель')
// }else{
//     console.log('вы кино ман')
// }

// for (let i = 0; i < 3; i++) {
//     let lattestMovie = prompt("Один из последних посмотренных фильмов"),
//         rate = prompt("Насколько оцените его")
//     personalMovieDB.movies[lattestMovie] = rate
// }

// console.log(personalMovieDB.movies)

// let sayHello = function(){
//     alert('hello World')
// }

// sayHello()

// function sayHello(){
//     alert('Hello 19/20')
// }

// let sayHello = () => {
//     alert('hello world')
// }        

// sayHello()

// function  prinText(text){
//     alert('вы написали текст ' + text)
// }
// prinText('javaScript')
// prinText('Combo')

// let sumNum = (a,b) => {
//     return a+b
// }

// sumNum(20,9)
// sumNum(29,12)
// sumNum(49,14)
// sumNum(43,15)
// sumNum(76,5)
// sumNum(2,65)
// sumNum(29,67)
// sumNum(45,34)
// sumNum(43,65)


// let sum = sumNum(5,2)
// let sum2 = sumNum(10, sumNum(3,2))
// console.log(sum,sum2)

// function printsmile(a){
//     for(let i = 0;i <a;i++)
//     console.log(i +''+'(*-*)')
// }
// printsmile(30)

// function add (a,b){
//     return a+b
// }

// function multiply(a,b){
//     return a*b
// }

// 36325*9824+777
// let result = add(multiply(36325,9824),777)

// alert(result)

// let btns = document.querySelectorAll('button')
// let count = 0

// btn.onclick = function() {
//     btn.style.background = 'blue'
//     count += 1
//     console.log('count')
// }

// let countAdder = () =>{
//     btn.style.background = 'blue'
//     count += 1
//     console.log('count')
//     btn.removeEventListener('click',countAdder)
// }
// btn.addEventListener('click',()=>{alert('Нажатие')})
// btn.addEventListener('click',(event)=>{
//     event.target.remove()
// })
// let link = document

// window.addEventListener('keydown',(e)=>{
//     e.preventDefault()
//     alert('вы нажали на сылку')
// })
// btns.forEach((btn) =>{
//     btn.addEventListener('click',()=>{

//     })
// })

// childNodes
// children
// firstChild
// lastchild
// fisrtelementchild
// lastelementchide
// previousElementSibling
// nextelementsibiling
// parentelent

// let btns = document.querySelectorAll('button')
// let img = document.querySelector('img')
// let button = document

// img.addEventListener('click', () => {
//     img.classList.toggle("active")
// })

// btns.forEach((btn) => {
//   btn.addEventListener('click',() =>{
//       btn.previousElementSibling.style.background = 'red'
//   }) 
//   btn.addEventListener('dblclick',() =>{
//     btn.nextElementSibling.style.background = 'red'
//   })
// })

// let btns = document.querySelectorAll('button')
// console.log('btns')
// let script = document.createElement('script')
// script.src = 'dynamic.js'
// document.body.append(script)

let squares = [2, 4, 6].map(x => x * x);
[a, b] = squares;
console.log(a + b)
