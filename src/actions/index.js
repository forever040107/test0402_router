export const toggleSidebar = (value) => {
  return {
    type: 'TOGGLE_SIDEBAR',
    value: false
  }
}

export const changeStyle = (props) => {
  return {
    type: 'CHANGE_STYLE',
    themeColor: props
  }
}