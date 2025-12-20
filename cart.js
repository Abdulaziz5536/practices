const scan = require('prompt-sync')();

let cart = [];

const addToCart = (item) => {
  
  cart.push(item);
  return cart;

}
const removeFromCart = (item) => {
 
  const index = cart.indexOf(item);
   if (index !== -1) {
    cart.splice(index, 1);
  } else {
    console.log('Item not found');
  }
  return cart;
}

addToCart('apples')
addToCart('ban')
console.log(cart);
removeFromCart('ban')
console.log(cart);