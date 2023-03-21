// pure function 
function priceAfterTax(productPrice) {
    return (productPrice * 1.20)
   }

console.log(priceAfterTax(20));

// impure function
// it the tax is updated, the function's result will change.
var tax = 20;
function calculateTax(productPrice) {
 return (productPrice * (tax/100)) + productPrice; 
}

console.log(calculateTax(tax));