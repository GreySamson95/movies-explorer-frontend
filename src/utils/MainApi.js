/* eslint-disable */
class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // _fetchAndCatch(url, payload) {
  //   const checkStatus = async (response) => {
  //     if (response.status >= 200 && response.status < 300)
  //       return await response.json()

  //     throw await response.json()
  //   }
  //   return fetch(url, payload)
  //     .then(checkStatus)
  // }
  async errorCheck(res) {
    const msg = await res.json();
    return res.ok ? msg : Promise.reject(msg);
  }



  signUpUser(formData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(this.errorCheck);
  }

  signInUser(formData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(this.errorCheck);
  }

  getUser(jwt) {
    this._jwt = jwt;
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this.errorCheck);
  }

  updateUser(newData, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(newData),
    }).then(this.errorCheck);
  }

  getFavouriteMovies(jwt) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this.errorCheck);
  }

  likeMovie(movie, jwt) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        id: movie.id,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co/uploads${movie.image.url}`,
      }),
    }).then(this.errorCheck);
  }

  deleteMovieLike(id, jwt) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this.errorCheck);
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.greysamson.nomoredomains.club',
  // baseUrl: 'http://localhost:3000',
});

export default mainApi;
