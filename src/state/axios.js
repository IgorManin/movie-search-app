import axios from 'axios'
import { actionCreator, ADD_RANDOM_FILM, GET_RANDOM_FILM } from './reducer'

const scr = 'https://api.kinopoisk.dev/v1.3/movie/random'
const token = 'RV0QBVB-N434WST-JFK32HH-RBQHN1K'

const config = {
  headers: {
    'X-API-KEY': token,
  },
}

// export const getFilms = async () => {
//   try {
//     const response = await axios.get(scr, {
//       headers: {
//         'X-API-KEY': token,
//       },
//     })
//     console.log(response.data)
//   } catch (err) {
//     console.error(err)
//   }
// }

export const getFilms = () => {
  return async (dispatch) => {
    try {
      dispatch(actionCreator(GET_RANDOM_FILM))
      const response = await axios.get(scr, config)
      dispatch(actionCreator(ADD_RANDOM_FILM, response.data))
    } catch (err) {
      console.error(err)
    }
  }
}
