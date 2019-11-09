import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-shortening',
  templateUrl: './url-shortening.component.html',
  styleUrls: ['./url-shortening.component.sass']
})
export class UrlShorteningComponent implements OnInit {
  urlStorage = new Map();

  shortUrlResult: string;
  unshortUrlResult: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Convierte URL completa a URL corta, que es un string de
   * N caracteres al azar.
   *
   * @param url - URL a transformar en URL corta.
   */
  showShortUrlResult = (url) => {
    this.shortUrlResult = this.generateShortUrl(url);
  };

  /**
   * Obtiene la URL completa en base la URL corta
   * siempre cuando esta esté previamente almacenada.
   *
   * @param {string} shortUrl - URL corta.
   */
  showUnshortUrlResult = (shortUrl) => {
    this.unshortUrlResult = this.unshortenUrl(shortUrl);
  }

  /**
   * Dada una URL completa, generar una cadena al azar como
   * URL corta.
   *
   * @param url La URL completa.
   * @return La URL corta.
   */
  generateShortUrl = (url) => {
    const shortUrlLength = 6;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let shortUrl = '';

    do {
      for (let i = 0; i < shortUrlLength; i++) {
        shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    } while(this.urlStorage.has(shortUrl));

    this.urlStorage.set(shortUrl, url);

    return shortUrl;
  };

  /**
   * En base a una URL corta, devolver valor de la URL completa,
   * si esta no existe, retornar falso.
   *
   * @param shortUrl La URL corta.
   * @return La URL completa o false si no existe la URL corta.
   */
  unshortenUrl = (shortUrl) => {
    if (this.urlStorage.has(shortUrl)) {
      return this.urlStorage.get(shortUrl);
    } else {
      return false;
    }
  };

}
