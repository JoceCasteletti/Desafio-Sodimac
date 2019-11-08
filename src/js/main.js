const stocksInput = document.getElementById('stocks_input');
const stocksProcess = document.getElementById('stocks_process');
const stocksResult = document.getElementById('stocks_result');

stocksProcess.addEventListener('click', (event) => {
  event.preventDefault();

  const inputValue = stocksInput.value.split(',');

  stocksResult.value = bestProfit(inputValue);
});

const urlShorteningInput = document.getElementById('url_shortening_input');
const urlShorteningProcess = document.getElementById('url_shortening_process');
const urlShorteningResult = document.getElementById('url_shortening_result');

urlShorteningProcess.addEventListener('click', (event) => {
  event.preventDefault();

  const inputValue = urlShorteningInput.value;

  urlShorteningResult.value = generateShortUrl(inputValue);
});

const urlUnshorteningInput = document.getElementById('url_unshortening_input');
const urlUnshorteningProcess = document.getElementById('url_unshortening_process');
const urlUnshorteningResult = document.getElementById('url_unshortening_result');

urlUnshorteningProcess.addEventListener('click', (event) => {
  event.preventDefault();

  const inputValue = urlUnshorteningInput.value;

  let result = unshortenUrl(inputValue);

  if (result === false) {
    urlUnshorteningResult.classList.add('is-invalid');
    urlUnshorteningResult.nextElementSibling.classList.add('invalid-feedback');
    urlUnshorteningResult.nextElementSibling.innerText = 'La URL corta es inválida.';
    urlUnshorteningResult.value = '';
  } else {
    urlUnshorteningResult.classList.remove('is-invalid');
    urlUnshorteningResult.nextElementSibling.classList.remove('invalid-feedback');
    urlUnshorteningResult.nextElementSibling.innerText = '';
    urlUnshorteningResult.value = result;
  }
});
