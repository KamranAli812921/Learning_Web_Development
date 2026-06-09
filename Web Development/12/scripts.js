let num1 = Number(prompt("Enter first number:"))
let oprator = prompt("Enter oprator:")
let num2 = Number(prompt("Enter first number:"))

if (oprator == "-") {
    alert(`${num1} ${oprator} ${num2}=${num1 - num2}`)
}
else if (oprator == "*") {
    alert(`${num1} ${oprator} ${num2}=${num1 * num2}`)
}
else if (oprator == "/") {
    alert(`${num1} ${oprator} ${num2}=${num1 / num2}`)
}
else if (oprator == "+") {
    alert(`${num1} ${oprator} ${num2}=${num1 + num2}`)
}
else
{
    alert("Wrong oprator selected")
}
document.querySelector(".box").style.backgroundColor = "blue";
document.querySelector(".box").style.color = "white";