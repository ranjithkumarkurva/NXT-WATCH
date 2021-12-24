import Header from '../Header'
import Navbar from '../Navbar'
import {
  FailureBgContainer,
  FailureHeading,
  FailureDescription,
  FailureImage,
} from '../SavedVideos/StyledComponents'
import {HomeBgContainer, HomeSubBgContainer} from '../Home/StyledComponents'

import ThemeToggle from '../../Context/ThemeToggle'

const isDarkTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const isLightTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

const NotFound = () => (
  <ThemeToggle.Consumer>
    {value => {
      const {isDark} = value

      return (
        <HomeBgContainer isDark={isDark}>
          <Header />
          <HomeSubBgContainer>
            <Navbar />
            <FailureBgContainer>
              <FailureImage
                src={isDark ? isDarkTheme : isLightTheme}
                alt="not found"
              />
              <FailureHeading isDark={isDark}>Page Not Found</FailureHeading>
              <FailureDescription isDark={isDark}>
                we are sorry, the page you requested could not be found.
              </FailureDescription>
            </FailureBgContainer>
          </HomeSubBgContainer>
        </HomeBgContainer>
      )
    }}
  </ThemeToggle.Consumer>
)

export default NotFound
