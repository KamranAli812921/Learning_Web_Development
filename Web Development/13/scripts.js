let a = document.getElementsByClassName("box")
console.log(a)

a[2].style.backgroundColor="red"
a[0].style.backgroundColor="black"
a[0].style.color="white"
a[1].style.backgroundColor="green"

document.getElementById("gray").style.backgroundColor="gray"
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").outerHTML)