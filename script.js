'use strict'

console.log('Привет', 55)
console.log('Пghfghfgвет', 55)

//cntrl+/
/*
cntrl+shift+/
*/

let a =10
console.log(a)

//Интерполяция срок

const a1 = 'Hello'
const a2 = "World"
const a3 = `Goodluck`

const message = `${a1},    ${a2}!`

console.log(message)

const c =5
const b =10
const sum = `Сумма c и  b равна ${a+b}`

console.log(sum)

const message1 = `
Это
длинное 
сообщение`

console.log(message1)

/*
* -9007199254740991 < number < 90007199254740991
* если больше или меньше, то длля корректных математических
* вычилений используется bigInt, для этого дописываееся n
* bigint можно складываь и т.д. только с bigint, поэтому к маленьким числам тоже дописываем
* */


console.log(9000000000000000n+1n)
console.log(9900000000000000n+2n)

const age = 38
const  isChild = age < 18

console.log(isChild)




