const stocksInput = document.getElementById('stocks_input');
const stocksProcess = document.getElementById('stocks_process');
const stocksResult = document.getElementById('stocks_result');

stocksProcess.addEventListener('click', () => {
  const inputValue = stocksInput.value.split(',');

  stocksResult.innerText = bestProfit(inputValue);
});

const urlShorteningInput = document.getElementById('url_shortening_input');
const urlShorteningProcess = document.getElementById('url_shortening_process');
const urlShorteningResult = document.getElementById('url_shortening_result');

urlShorteningProcess.addEventListener('click', () => {
  const inputValue = urlShorteningInput.value;

  urlShorteningResult.innerText = generateShortUrl(inputValue);
});

const urlUnshorteningInput = document.getElementById('url_unshortening_input');
const urlUnshorteningProcess = document.getElementById('url_unshortening_process');
const urlUnshorteningResult = document.getElementById('url_unshortening_result');

urlUnshorteningProcess.addEventListener('click', () => {
  const inputValue = urlUnshorteningInput.value;

  let result = unshortenUrl(inputValue);

  if (result === false) {
    result = 'La URL corta es inválida.';
  }

  urlUnshorteningResult.innerText = result;
});
