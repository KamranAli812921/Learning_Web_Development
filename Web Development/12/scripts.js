// let num1 = Number(prompt("Enter first number:"))
// let oprator = prompt("Enter oprator:")
// let num2 = Number(prompt("Enter first number:"))

// if (oprator == "-") {
//     alert(`${num1} ${oprator} ${num2}=${num1 - num2}`)
// }
// else if (oprator == "*") {
//     alert(`${num1} ${oprator} ${num2}=${num1 * num2}`)
// }
// else if (oprator == "/") {
//     alert(`${num1} ${oprator} ${num2}=${num1 / num2}`)
// }
// else if (oprator == "+") {
//     alert(`${num1} ${oprator} ${num2}=${num1 + num2}`)
// }
// else
// {
//     alert("Wrong oprator selected")
// }
document.title="Caculator"
console.log(document.title)
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
document.body.childNodes[1].style.backgroundColor="red"
document.body.childNodes[2].childNodes[2].style.backgroundColor="green"
let a=document.body.childNodes[1]
console.log(a.childNodes)
a.childNodes[1].style.backgroundColor="green"