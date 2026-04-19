let price;

let quantity;

const getTotalPrice = (price, quantity) => price * quantity;

const addTax = total => total * 1.1;

price = 1000;

quantity = 2;

const total = getTotalPrice(price, quantity); // → 2000

console.log(`税抜金額は${total}円です`);

const taxedTotal = addTax(total);     // → 2200

console.log(`税込金額は${taxedTotal}円です`);