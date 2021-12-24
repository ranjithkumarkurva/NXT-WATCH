import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import Navbar from '../Navbar'
import TrendingDetails from '../TrendingDetails'

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
} from './StyledComponents'
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

class Trending extends Component {
  state = {productList: [], apiStatus: ApiStatusValue.initial}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const {apiStatus, productList} = this.state
    this.setState({
      apiStatus: ApiStatusValue.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'Get',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchData = await response.json()
      const updatedData = fetchData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        name: eachItem.channel.name,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))
      this.setState({
        productList: updatedData,
        apiStatus: ApiStatusValue.success,
      })
    } else {
      this.setState({
        apiStatus: ApiStatusValue.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {productList} = this.state

    return (
      <VideosContainer>
        {productList.map(eachOne => (
          <TrendingDetails eachVideoDetails={eachOne} key={eachOne.id} />
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

  onRenderTrending = () => {
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
      <RetryButton onClick={this.onRenderTrending}>Retry</RetryButton>
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
            <HomeBgContainer isDark={isDark} data-testid="trending">
              <Header />
              <HomeSubBgContainer>
                <Navbar />
                <HomeDataContainer isDark={isDark}>
                  <TrendingHeadingContainer isDark={isDark}>
                    <Icon isDark={isDark}>
                      <FaFire size="30" color="red" />
                    </Icon>
                    <Heading isDark={isDark}>Trending</Heading>
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

export default Trending
