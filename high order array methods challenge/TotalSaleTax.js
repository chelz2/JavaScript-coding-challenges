// function calculateTotalSaleWithTax(arrObj, tax) {
//   // returns total sales amount with tax
//   let TotalAmt = 0;

//   for (obj of arrObj) {
//     TotalAmt += obj.price * obj.quantity;
//   }

//   const taxAmount = TotalAmt * (tax / 100);
//   const total = TotalAmt + taxAmount;
//   return total.toFixed(2);
// }

// using high order array method

function calculateTotalSaleWithTax(arrObj, tax) {
  const totalAmt = arrObj.reduce((sum, product) => {
    return product.price * product.quantity + sum;
  }, 0);
  console.log(totalAmt);
  return totalAmt + totalAmt * (tax / 100);
}

const totalWorth = calculateTotalSaleWithTax(
  [
    { name: "Apple", price: 0.5, quantity: 10 },
    { name: "Banana", price: 0.3, quantity: 20 },
    { name: "Orange", price: 0.6, quantity: 15 },
  ],
  8
);

console.log(totalWorth);
