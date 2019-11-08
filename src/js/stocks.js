/**
 * Dado un arreglo de precios de acciones, retornar
 * la máxima ganancia.
 *
 * @param {[]} stocksPrices - Arreglo de precios de acciones.
 * @returns {int} - Máxima ganancia.
 * @example
 *
 * const m = maxProfit([3, 8, 1, 12])
 * console.log(m)
 * // => 11
 */
const bestProfit = (stocksPrices) => {
  let bestBuyIndex = 0;
  let bestSellIndex = 0;
  let currentBestProfit = 0;

  for (let i = 0; i < stocksPrices.length; i++) {
    const profit = stocksPrices[i] - stocksPrices[bestBuyIndex];

    if (stocksPrices[i] < stocksPrices[bestBuyIndex]) {
      bestBuyIndex = i;
    }

    if (profit > currentBestProfit) {
      currentBestProfit = profit;
      bestSellIndex = i;
    }
  }

  if (currentBestProfit <= 0) {
    return -1;
  }

  console.log(currentBestProfit);
  return currentBestProfit;
};
