const urlStorage = new Map();

/**
 * Dada una URL completa, generar una cadena al azar como
 * URL corta.
 *
 * @param {string} url - La URL completa.
 * @returns {string} - La URL corta.
 */
const generateShortUrl = (url) => {
  const shortUrlLength = 6;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let shortUrl = '';

  do {
    for (let i = 0; i < shortUrlLength; i++) {
      shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  } while(urlStorage.has(shortUrl));

  urlStorage.set(shortUrl, url);

  return shortUrl;
};

/**
 * En base a una URL corta, devolver valor de la URL completa,
 * si esta no existe, retornar falso.
 *
 * @param {string} shortUrl - La URL corta.
 * @return {boolean|string} - La URL completa o false si no existe la URL corta.
 */
const unshortenUrl = (shortUrl) => {
  if (urlStorage.has(shortUrl)) {
    return urlStorage.get(shortUrl);
  } else {
    return false;
  }
};
