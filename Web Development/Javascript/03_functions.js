function sum(a, b) {
    return a + b
}

console.log(sum(3, 4))
function greaterNUm(a, b, c) {
    if (a > b && a > c) 
        {
        return a;
    }
    else if (b > a && b > c)
    {
        return b
    }
    else
    {
        return c;
    }

}
console.log("The Greatest number is: "+ greaterNUm(1,2,3))
