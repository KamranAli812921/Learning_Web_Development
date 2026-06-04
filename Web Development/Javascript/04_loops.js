let a = 0
while (a < 10) {
    console.log(a)
    a++
}
a = 0
do {
    console.log(a)
    a++
} while (a < 10)

for (let i = 0; i < 10; i++) {
    console.log(i)
}
let object={
    "name":"Kamran Ali",
    "Father Name":"Muhammad Ali",
    "Age":21
}

for (const key in object) {
   console.log(key+":"+object[key])

}
name ="Kamran"
for (const element of name) {
    console.log(element)
}