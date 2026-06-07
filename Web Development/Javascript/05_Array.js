let arr=[1,2,3,4,5,6,7]
console.log(arr)
arr[0]="Kamran"
console.log(arr)
let arr2=[1,"Array",2.3,true]
console.log(arr2)
console.log(arr.length)
console.log(arr2.length)
console.log(arr2[3])
console.log(arr.toString())
console.log(arr.join(" And "))
arr.push("Ali")
arr.push(123)
console.log(arr)
arr.push("Arshad")
console.log(arr)
for (let index=0;index<arr.length;index++)
{
    console.log(arr[index])
}