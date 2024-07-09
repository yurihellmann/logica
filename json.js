let invoice = {
    name: "Yuri",
    age: 24,
    products: {
        0: ["mouse", 29.90],
        1: ["teclado mecânico", 129.99],
        2: ["monitor", 899.99],
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("-------------------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`Os produtos são ${productName}: R$${productPrice}`)
    }
}