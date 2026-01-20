const validateCart = async (cart) => {
  if (cart.length === 0) throw "Cart is empty";
  return cart;
};

const calculateTotal = async (cart) => {
  return cart.reduce((sum, item) => sum + item.price, 0);
};

const chargePayment = async (total) => {
  if (total > 1000) throw "Payment failed";
  return "Payment successful";
};

const sendConfirmation = async () => {
  console.log("Confirmation sent");
};

const checkout = async () => {
  try {
    const cart = [{ price: 200 }, { price: 300 }];
    await validateCart(cart);
    const total = await calculateTotal(cart);
    await chargePayment(total);
    await sendConfirmation();
    console.log("Order completed");
  } catch (err) {
    console.log(err);
  }
};

checkout();
