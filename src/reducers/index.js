const defaultState = {
  value: false
}

const toggle = (state=defaultState, action) => {
  console.log('value: ', state)
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        value: !state.value
      }

    case 'CHANGE_STYLE':
      return {value: !state.value}

    default:
      return state 
  }
}
  
export default toggle