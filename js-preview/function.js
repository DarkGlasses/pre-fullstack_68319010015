// funtion

// แบบปกติ ฟังชั่นที่มีการรับค่า
function calculateTotal(price, quantity) {
    return price * quantity;
} 
console.log(`ราคารวม ${calculateTotal(25, 4)}`);

// แบบ arrow function
const calculateTotalArrow = (price, quantity) => price * quantity;
console.log(`ราคารวม ${calculateTotalArrow(20, 3)}`);

// แบบ arrow function + default parameter 
const calculateTotalVat = (price, quantity, vat = 0.07) => {
    const subTotal = price * quantity;
    return (subTotal + subTotal * vat).toFixed(2);
}
console.log(`รวมค่า ${calculateTotalVat(100, 2)}`);