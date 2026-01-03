import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideos: [],
  changeSavedVideos: () => {},
})

export default ThemeContext
