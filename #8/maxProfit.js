export default function maxProfit(prices) {
  if (Math.max(...prices) === prices[0])
    prices = prices.slice(
      prices.indexOf(Math.max(...prices)) + 1,
      prices.length
    );
  if (Math.min(...prices) === prices[prices.length - 1])
    prices = prices.slice(0, prices.indexOf(Math.min(...prices) - 1));

  const max = Math.max(...prices);
  const min = Math.min(...prices);

  for (let index = 0; index < prices.length; index++) {
    if (max === min || prices[0] === max) {
      return -1;
    } else {
      return max - min;
    }
  }
}
