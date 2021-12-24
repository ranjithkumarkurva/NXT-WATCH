import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import Navbar from '../Navbar'
import SavedDetailView from '../SavedDetailView'

import {
  FailureBgContainer,
  FailureHeading,
  FailureDescription,
  FailureImage,
  HomeBgContainer,
  HomeSubBgContainer,
  HomeDataContainer,
  VideosContainer,
  TrendingHeadingContainer,
  Heading,
  UnorderedList,
  Linked,
} from './StyledComponents'

import ThemeToggle from '../../Context/ThemeToggle'

const SavedVideos = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <ThemeToggle.Consumer>
      {value => {
        const {isDark, SavedList} = value
        const ShowCartList = SavedList.length === 0

        return (
          <HomeBgContainer data-testid="savedVideos">
            <Header />
            <HomeSubBgContainer>
              <Navbar />
              <HomeDataContainer isDark={isDark}>
                {ShowCartList ? (
                  <FailureBgContainer>
                    <FailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <FailureHeading isDark={isDark}>
                      No saved videos found
                    </FailureHeading>
                    <FailureDescription isDark={isDark}>
                      Save your videos by clicking a button
                    </FailureDescription>
                  </FailureBgContainer>
                ) : (
                  <VideosContainer>
                    <TrendingHeadingContainer isDark={isDark}>
                      <Heading isDark={isDark}>Saved Videos</Heading>
                    </TrendingHeadingContainer>
                    <UnorderedList>
                      {SavedList.map(eachOne => (
                        <SavedDetailView eachVideoDetails={eachOne} />
                      ))}
                    </UnorderedList>
                  </VideosContainer>
                )}
              </HomeDataContainer>
            </HomeSubBgContainer>
          </HomeBgContainer>
        )
      }}
    </ThemeToggle.Consumer>
  )
}

export default SavedVideos
