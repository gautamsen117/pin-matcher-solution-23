function generatePin() {
    return Math.floor(Math.random() * 90000) + 10000;
}
const pin = generatePin();
// console.log(pin)

// console.log(!isNaN("10X"))

const product = 5; 
const price = "7"; 
const subTotal = product * price; 
const tax = subTotal/10; 
const total = subTotal + tax; 
// console.log(total)

const category="pen"; 
const performer = category+"-teller";
console.log(performer)