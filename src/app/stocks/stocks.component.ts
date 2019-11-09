import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.sass']
})
export class StocksComponent implements OnInit {
  result: number;

  constructor() { }

  ngOnInit() {
  }

  /**
   * En base a una cadena de números separada por
   * comas, pasarlo a arreglo y buscar la mejor ganancia.
   *
   * @param str Value Números separados por coma
   * @return Mayor ganancia.
   */
  showResult(strValue) {
    const value = strValue.split(',').map(x => parseInt(x));
    this.result = this.bestProfit(value);
  }

  /**
   * Dado un arreglo de precios de acciones, retornar
   * la máxima ganancia.
   *
   * @param stocksPrices - Arreglo de precios de acciones.
   * @return Máxima ganancia.
   * @example
   *
   * const m = maxProfit([3, 8, 1, 12])
   * console.log(m)
   * // => 11
   */
  bestProfit = (stocksPrices) => {
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

    return currentBestProfit;
  };
}
