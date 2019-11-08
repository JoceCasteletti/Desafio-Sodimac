const stocksProcess = document.getElementById('stocks_process');
const stocksInput = document.getElementById('stocks_input');
const stocksResult = document.getElementById('stocks_result');

stocksProcess.addEventListener('click', () => {
  const inputValue = stocksInput.value.split(',');

  stocksResult.innerText = bestProfit(inputValue);
});
