import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import Navbar from '../Navbar'
import AllVideos from '../AllVideos'

import {HomeBgContainer, HomeSubBgContainer} from './StyledComponents'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <HomeBgContainer data-testid="home">
      <Header />
      <HomeSubBgContainer>
        <Navbar />
        <AllVideos />
      </HomeSubBgContainer>
    </HomeBgContainer>
  )
}

export default Home
