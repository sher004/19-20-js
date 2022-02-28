// function func() {
// 	alert('Аян');
// }
// func()

// function func(i) {
// 	for (i = 1; i < 101; i++)
// 	console.log(i);
// }
// func(1)

// function func(arr) { 
// 	console.log(arr * arr);
// }

// func(5)
// func(2)

// function func() {
// 	let part = prompt("Введите число")

// 	if (part > 0) {
// 		alert("+++")
// 	} else {
// 		alert("---")
// 	}
// }
// func();

// function func(num1, num2) {
// 	alert(num1 + num2);
// }

// func(1, 2)

// function func(num1, num2, num3) {
// 	alert(num1 + num2 + num3);
// }
// let arr1 = 1;
// let arr2 = 2;
// let arr3 = 3;
// func(arr1, arr2, arr3)

// function func(num = 5) {
// 	alert(num * num);
// }
// func(2);
// func(3);
// func();

// function func(num1 = 0, num2 = 0) {
// 	alert(num1 + num2);
// }
// func(2, 3);
// func(3, 7);
// func(4, 5);

// function func(num) {
// 	return(num * num * num)
// }
// let result = func(3)
// alert(result)

// function func(num) {
// 	return num * num;
// }
// let result = func(3) + func(4)
// alert(result)


// let linesNum = 5;
// let line = "";
// let subpower = 1;
// while (subpower<=linesNum){
//     line +='/($-$)'
//     document.write(line + '<br \/>')
//     subpower++
// }

// function countRabbits(){
//     for ( let i = 1; i = 3; i++){
//         alert ("кролик номер"+ i)
//     }
// }

// let str = 'hello world'
// console.log(str.toUpperCase())

// let str = 'hello world'
// console.log(str.toLocaleLowerCase())

// let man = ('Hello world')
// console.log(man.indexOf('H'))
// console.log(man.slice(6,9))
// console.log(man.slice(-10,-5))

// let num = '557'
// console.log(num.toString()+ 3)

// let str = 'nurs Sherdatka Aian Bek'
// console.log(str.split(' '))

//  let num = '557.55px'
//  console.log(parseInt(num))

//  let num = '557.55px'
//  console.log(parseFloat(num))

// let game = ['Mobale Legends','Stendoff2','Free Fire','Bravl Stars','Dragon Legends']
// console.log(game.join('(-_-)'))

// let game = ['Mobale Legends','Stendoff2','Free Fire','Bravl Stars','Dragon Legends']
// game.pop()
// game.shift()

// game.push('soul knigt')
// game.unshift('C.S 1.6')

// game.splice(2,0,'Tank','Templ Run')


// console.log(game)

// let firstBtn = document.getElementById("firstBtn")
// let tops = document.getElementById("secondBtn")
// let teg = document.getElementById("trap")
// let btnId = document.querySelector('.boto')
// let btnClass = document.querySelectorAll('#secondBtn')
// let btnTag = document.querySelectorAll('button')

// btnTag[2].style.background = "red"

// console.log(btnId)
// console.log(btnClass) 
// console.log(btnTag)

// let header = document.createElement('h1')
// let image = document.createElement('img')


// // header.innerHTML = '<a href="">Hello! My name is Pi-Ca-Chuu</a>'
// image.src = "https://images5.alphacoders.com/481/thumbbig-481903.webp"
// image.style.width = '300px'


// header.style.color = 'red'
// document.body.append(image)
// document.body.append(header)

// let list = document.querySelector('#ul1')
// let h1 = document.createElement('h1')
// let h2 = document.createElement('h2')
// let li1 = document.createElement('li1')
// let li2 = document.createElement('li2')

// list.style.border = '2px solid red'

// h1.innerHTML = 'Before header'
// h2.innerHTML = 'After header'
// li1.innerHTML = 'prepend li'
// li2.innerHTML = 'append li'

// list.before(h1)
// list.after(h2)
// list.prepend(li1)
// list.append(li2)

// list.insertAdjacentHTML("beforebegin", `<h1>Before header</h1>`)
// list.insertAdjacentHTML("afterend", `<h1>After header</h1>`)
// list.insertAdjacentHTML("afterbegin", `<li>tank li</li>`)
// list.insertAdjacentHTML("beforeend", `<li>dududun li</li>`)