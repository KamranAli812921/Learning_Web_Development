function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(355)
            console.log("Hello")
        }, 3000);
    })
}
console.log("loading module")
console.log("Do something else")
console.log("Load data")
let data = getData()
console.log(data)
console.log("Process Data")