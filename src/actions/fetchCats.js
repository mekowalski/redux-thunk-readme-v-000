export function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_CATS_REQUEST'})
    return fetch('hhtp://www.catapi.com')
      .then(response = response.json())
      .then(cats => dispatch({type: 'ADD_CATS', cats}))
  }
}
