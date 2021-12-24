import React from 'react'

const ThemeToggle = React.createContext({
  isDark: false,
  onChangeTheme: () => {},
  SavedList: [],
  addToSavedList: () => {},
})

export default ThemeToggle
