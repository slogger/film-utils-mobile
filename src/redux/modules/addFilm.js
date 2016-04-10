/* @flow */
export const ADD_FILM = 'ADD_FILM'

export function addFilm (iso: number, filmName: string, length: number): Action {
  return {
    type: ADD_FILM,
    newFilm: {
      iso,
      filmName,
      length
    }
  }
}

export const actions = {
  addFilm
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_FILM]: (state: {}, action: {newFilm: object}): object => state
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state: object = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
