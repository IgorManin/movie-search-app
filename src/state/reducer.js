const GET_FILMS = 'GET_DATA'

const defaltState = {
  items: [],
}

export const reducer = (state = defaltState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        items: action.payload,
      }

    default:
      return state
  }
}

// export const setFilms = (payload) => ({ type: GET_FILMS, payload })
