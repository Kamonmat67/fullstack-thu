function genereteTempID(){
    const randomPart = Math.random().toString(36).substring(2,8);
    return randomPart.toUpperCase()
}

const orderID = genereteTempID();
console.log(`Genereted Order ID: ${orderID}`)