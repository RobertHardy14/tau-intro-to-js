function sum(a, b) {
    return a + b;
}


console.log(sum(10, 10))

function product(a, b) {
    return a * b;
}

const bigProduct = product(12, 123214213)
console.log(product(5, 2))
console.log(bigProduct)

setTimeout(function () {
    console.log("Hola")
}, 2000)

setTimeout(() => console.log("Hola"), 2000)