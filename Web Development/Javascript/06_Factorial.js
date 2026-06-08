let number=9,facto=1
for ( let index=number;index>0;index--)
{
    facto*=index
}
console.log(facto)

let num=Number(prompt("Enter number: "))
let factorial=1
for(let i=num;i>0;i--)
{
    factorial*=i
}
alert(`The Factorial of ${num} is ${factorial}`)