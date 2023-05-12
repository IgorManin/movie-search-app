export const ADD_RANDOM_FILM = 'SAVE_RANDOM_FILM'
export const GET_RANDOM_FILM = 'GET_RANDOM_FILM'

const defaltState = {
  randomFilm: null,
  isLoading: false,
}

export const reducer = (state = defaltState, action) => {
  switch (action.type) {
    case ADD_RANDOM_FILM:
      return {
        isLoading: false,
        randomFilm: action.payload,
      }

    case GET_RANDOM_FILM:
      return {
        isLoading: true,
        ...state,
      }

    default:
      return state
  }
}

export const actionCreator = (type, payload) => ({ type, payload })
