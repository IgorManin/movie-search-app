import axios from 'axios'

const scr = 'https://api.kinopoisk.dev/v1.3/movie/random'
const token = 'RV0QBVB-N434WST-JFK32HH-RBQHN1K'

export const getFilms = async () => {
  try {
    const response = await axios.get(scr, {
      headers: {
        'X-API-KEY': token,
      },
    })
    console.log(response.data)
  } catch (err) {
    console.error(err)
  }
}

getFilms()
