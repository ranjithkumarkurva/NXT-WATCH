import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import Navbar from '../Navbar'
import GamingDetails from '../GamingDetails'

import {
  HomeDataContainer,
  VideosContainer,
  FailureBgContainer,
  FailureHeading,
  FailureDescription,
  RetryButton,
  FailureImage,
  TrendingHeadingContainer,
  Heading,
  Icon,
} from './StyledComponent'
import {HomeBgContainer, HomeSubBgContainer} from '../Home/StyledComponents'
import ThemeToggle from '../../Context/ThemeToggle'

const ApiStatusValue = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const DarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const LightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Gaming extends Component {
  state = {
    GamingList: [],
    apiStatus: ApiStatusValue.initial,
    gamingSearchInput: '',
  }

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    const {apiStatus, GamingList, gamingSearchInput} = this.state
    this.setState({
      apiStatus: ApiStatusValue.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming?search=${gamingSearchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'Get',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchData = await response.json()
      const gamingData = fetchData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        GamingList: gamingData,
        apiStatus: ApiStatusValue.success,
      })
    } else {
      this.setState({
        apiStatus: ApiStatusValue.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {GamingList} = this.state

    return (
      <VideosContainer>
        {GamingList.map(eachOne => (
          <GamingDetails eachVideoDetails={eachOne} key={eachOne.id} />
        ))}
      </VideosContainer>
    )
  }

  renderLoadingView = () => (
    <FailureBgContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
      </div>
    </FailureBgContainer>
  )

  onRenderGaming = () => {
    this.setState(
      {
        apiStatus: ApiStatusValue.inProgress,
      },
      this.productList,
    )
  }

  renderFailureView = () => (
    <FailureBgContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something went wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble completing your request.
      </FailureDescription>
      <FailureDescription>Please try again.</FailureDescription>
      <RetryButton onClick={this.onRenderGaming}>Retry</RetryButton>
    </FailureBgContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case ApiStatusValue.success:
        return this.renderSuccessView()
      case ApiStatusValue.failure:
        return this.renderFailureView()
      case ApiStatusValue.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeToggle.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeBgContainer data-testid="gaming">
              <Header />
              <HomeSubBgContainer>
                <Navbar />
                <HomeDataContainer isDark={isDark}>
                  <TrendingHeadingContainer isDark={isDark}>
                    <Icon isDark={isDark}>
                      <SiYoutubegaming size="30" color="red" />
                    </Icon>
                    <Heading isDark={isDark}>Gaming</Heading>
                  </TrendingHeadingContainer>
                  {this.renderAllVideos()}
                </HomeDataContainer>
              </HomeSubBgContainer>
            </HomeBgContainer>
          )
        }}
      </ThemeToggle.Consumer>
    )
  }
}

export default Gaming
