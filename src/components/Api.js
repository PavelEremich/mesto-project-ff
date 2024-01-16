export default class Api {
  constructor( baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._headers
      }
    })
    .then(res => this._checkError(res));
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._headers
      }
    })
    .then(res => this._checkError(res));
  }

  setUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(res => this._checkError(res));
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(res => this._checkError(res));
  }

  deleteCard() {
    return fetch(`${this._baseUrl}/cards${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._headers
      }
    })
    .then(res => this._checkError(res));
  }
  toggleLike() {
    if (!isLiked) {
      return fetch(`${this._baseUrl}/cards//${cardID}/likes`, {
        method: 'PUT',
        headers: {
          authorization: this._headers
        }
      })
      .then(res => this._checkError(res));
    }
    else {
      return fetch(`${this._baseUrl}/cards//${cardID}/likes`, {
        method: 'DELETE',
        headers: {
          authorization: this._headers
        }
      })
      .then(res => this._checkError(res));
    }
  }

  setAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => this._checkError(res));
  }
}
