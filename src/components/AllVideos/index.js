import {Component} from 'react'
import Popup from 'reactjs-popup'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FiSearch} from 'react-icons/fi'
import {RiCloseFill} from 'react-icons/ri'
import VideoDetails from '../VideoDetails'

import {
  SearchInputContainer,
  SearchInput,
  HomeDataContainer,
  SearchIcon,
  VideosContainer,
  BannerBgContainer,
  BannerCloseButton,
  PremiumImage,
  PremiumHeading,
  PremiumGetButton,
  FailureBgContainer,
  FailureHeading,
  FailureDescription,
  RetryButton,
  FailureImage,
} from './StyledComponents'
import ThemeToggle from '../../Context/ThemeToggle'

const ApiStatusValue = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const FailureDarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
const FailureLightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

const DarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const LightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class AllVideos extends Component {
  state = {
    productList: [],
    apiStatus: ApiStatusValue.initial,
    searchInput: '',
    bannerImage: true,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const {searchInput} = this.state
    this.setState({
      apiStatus: ApiStatusValue.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchData = await response.json()
      const updatedData = fetchData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
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

  onChangeInput = event => {
    this.setState({searchInput: event.target.value}, this.getProducts)
  }

  renderSuccessView = () => {
    const {productList} = this.state
    if (productList.length === 0) {
      this.renderNoJobView()
    }
    return (
      <VideosContainer>
        {productList.map(eachOne => (
          <VideoDetails eachVideoDetails={eachOne} key={eachOne.id} />
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

  onClickRetry = () => {
    this.setState(
      {
        apiStatus: ApiStatusValue.inProgress,
      },
      this.productList,
    )
  }

  renderFailureView = () => (
    <ThemeToggle.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureBgContainer>
            <FailureImage
              src={isDark ? FailureDarkImage : FailureLightImage}
              alt="failure view"
            />
            <FailureHeading>Oops! Something went wrong</FailureHeading>
            <FailureDescription>
              We are having some trouble completing your request.
            </FailureDescription>
            <FailureDescription>Please try again.</FailureDescription>
            <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
          </FailureBgContainer>
        )
      }}
    </ThemeToggle.Consumer>
  )

  renderNoJobView = () => (
    <FailureBgContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHeading>No search results found</FailureHeading>
      <FailureDescription>
        Try different key words or remove search filters.
      </FailureDescription>
      <RetryButton>Retry</RetryButton>
    </FailureBgContainer>
  )

  bannerClose = () => {
    const {state} = this.state
    this.setState({bannerImage: false})
  }

  bannerOpen = () => {
    const interval = setTimeout(
      this.setState({bannerImage: true}),
      3000,
    )(
      <BannerBgContainer data-testid="banner" bannerImage={this.bannerImage}>
        <BannerCloseButton data-testid="close" onClick={this.bannerClose}>
          <RiCloseFill />
        </BannerCloseButton>
        <PremiumImage src={LightImage} alt="nxt watch logo" />
        <PremiumHeading>Buy Nxt Watch Premium</PremiumHeading>
        <PremiumGetButton>GET IT NOW</PremiumGetButton>
      </BannerBgContainer>,
    )
  }

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
        return this.renderNoJobView()
    }
  }

  render() {
    return (
      <ThemeToggle.Consumer>
        {value => {
          const {isDark} = value
          const {bannerImage} = this.state

          return (
            <HomeDataContainer isDark={isDark}>
              {bannerImage ? (
                <BannerBgContainer
                  data-testid="banner"
                  bannerImage={this.bannerImage}
                >
                  <BannerCloseButton
                    data-testid="close"
                    onClick={this.bannerClose}
                  >
                    <RiCloseFill />
                  </BannerCloseButton>
                  <PremiumImage src={LightImage} alt="nxt watch logo" />
                  <PremiumHeading>Buy Nxt Watch Premium</PremiumHeading>
                  <PremiumGetButton>GET IT NOW</PremiumGetButton>
                </BannerBgContainer>
              ) : (
                <this.bannerOpen />
              )}

              <SearchInputContainer isDark={isDark}>
                <SearchInput
                  isDark={isDark}
                  type="search"
                  placeholder="search"
                  value={this.searchInput}
                  onChange={this.onChangeInput}
                  onKeyDown={this.onEnterSearchInput}
                />
                <SearchIcon data-testid="searchButton" isDark={isDark}>
                  <FiSearch />
                </SearchIcon>
              </SearchInputContainer>
              {this.renderAllVideos()}
            </HomeDataContainer>
          )
        }}
      </ThemeToggle.Consumer>
    )
  }
}

export default AllVideos
