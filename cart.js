function calculateTotal(prices) {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  return total;
}

function applyDiscount(price, percent) {
  return price - (price * (percent / 100));
}

module.exports = { calculateTotal, applyDiscount };