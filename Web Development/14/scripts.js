async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(355)
            console.log("Hello")
        }, 3000);
    })
}
async function main() {
    console.log("loading module")
    console.log("Do something else")
    console.log("Load data")
    let data = await getData()
    console.log(data)
    console.log("Process Data")
}
main()
Y=0
if (Y==0)
{
    throw SyntaxError("Error aayi gayo") 
}

try {
    console.log(2*y)
}
catch(error)
{
    console.log(error)
}