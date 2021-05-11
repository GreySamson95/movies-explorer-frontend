/*eslint-disable*/
class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  signUpUser(formData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRlM2FmN2E1MTBiZWVjNWEwZjAxODciLCJpYXQiOjE2MTU3Mzk2NDQsImV4cCI6MTYxNjM0NDQ0NH0.LeedYaM0URVUJPPvG_yGrci-Gb3AV8c3Qp3wjcH0kDE',
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`${response.status}`));
    })
    .catch((err) => { console.log(err); });
  }

  authorize(formData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRlM2FmN2E1MTBiZWVjNWEwZjAxODciLCJpYXQiOjE2MTU3Mzk2NDQsImV4cCI6MTYxNjM0NDQ0NH0.LeedYaM0URVUJPPvG_yGrci-Gb3AV8c3Qp3wjcH0kDE',
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`${response.status}`));
    })
    .catch((err) => { console.log(err); });
  }

  getUser(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`${response.status}`));
    })
    .catch((err) => { console.log(err); });
  }

  getFavouriteMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRlM2FmN2E1MTBiZWVjNWEwZjAxODciLCJpYXQiOjE2MTU3Mzk2NDQsImV4cCI6MTYxNjM0NDQ0NH0.LeedYaM0URVUJPPvG_yGrci-Gb3AV8c3Qp3wjcH0kDE',
      },
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`${response.status}`));
    })
    .catch((err) => { console.log(err); });
  }

  likeMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRlM2FmN2E1MTBiZWVjNWEwZjAxODciLCJpYXQiOjE2MTU3Mzk2NDQsImV4cCI6MTYxNjM0NDQ0NH0.LeedYaM0URVUJPPvG_yGrci-Gb3AV8c3Qp3wjcH0kDE',
      },
      body: JSON.stringify({
        movieId: movie.id,
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
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`${response.status}`));
      })
      .catch((err) => { console.log(err); });
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
});

export default mainApi;
