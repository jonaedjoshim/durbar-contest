interface CartItem {
  price: number;
  quantity: number;
  discount: number;
}

function calculateCartTotal(items: CartItem[], taxRate: number): number {
  const subtotal = items.reduce((sum, item) => {
    return sum + item.price * item.quantity * (1 - item.discount / 100);
  }, 0);

  const total = subtotal * (1 + taxRate / 100);

  return Math.round(total * 100) / 100;
}
