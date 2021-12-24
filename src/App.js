import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoCard from './components/VideoCard'
import NotFound from './components/NotFound'
import ThemeToggle from './Context/ThemeToggle'
import ProtectedRoute from './ProtectedRoute'

import './App.css'

class App extends Component {
  state = {isDark: false, SavedList: []}

  onChangeTheme = isDark => {
    this.setState({isDark})
  }

  addToSavedList = video => {
    console.log(video)
    this.setState(prevState => ({
      SavedList: [...prevState.SavedList, video],
    }))
  }

  render() {
    const {isDark, SavedList} = this.state

    return (
      <ThemeToggle.Provider
        value={{
          isDark,
          SavedList,
          onChangeTheme: this.onChangeTheme,
          addToSavedList: this.addToSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoCard} />
          <ProtectedRoute path="/NotFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </ThemeToggle.Provider>
    )
  }
}

export default App
