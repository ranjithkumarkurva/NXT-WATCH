import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  HomeDataContainer,
  FailureBgContainer,
  FailureHeading,
  FailureDescription,
  RetryButton,
  FailureImage,
  VideoBgContainer,
  VideoSubBgContainer,
  Logo,
  TitleBgContainer,
  VideoTitle,
  BottomNames,
  LikesBgContainer,
  Line,
  VideoPlayer,
  LogoTitle,
  DescriptionTitle,
  Description,
  LikeButton,
  Icon,
  DislikeButton,
  SaveButton,
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

class VideoCard extends Component {
  state = {
    DetailList: {},
    apiStatus: ApiStatusValue.initial,
    isLiked: false,
    isDisliked: false,
    onSave: false,
  }

  componentDidMount() {
    this.getProducts()
  }

  getFetchedData = data => ({
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    name: data.channel.name,
    viewCount: data.view_count,
    publishedAt: data.published_at,
    description: data.description,
    subscriberCount: data.channel.subscriber_count,
    profileImageUrl: data.channel.profile_image_url,
    videoUrl: data.video_url,
  })

  getProducts = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: ApiStatusValue.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = this.getFetchedData(fetchedData.video_details)
      this.setState({
        DetailList: updatedData,
        apiStatus: ApiStatusValue.success,
      })
    } else if (response.status === 401) {
      this.setState({
        apiStatus: ApiStatusValue.failure,
      })
    }
  }

  onLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onDislike = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  renderSuccessView = () => (
    <ThemeToggle.Consumer>
      {value => {
        const {isDark, addToSavedList} = value

        const {DetailList, isLiked, isDisliked, onSave} = this.state

        const {
          id,
          videoUrl,
          title,
          name,
          profileImageUrl,
          subscriberCount,
          viewCount,
          publishedAt,
          description,
        } = DetailList

        const PublishedDate = formatDistanceToNow(new Date(publishedAt))

        const onSaveVideos = () => {
          this.setState(prevState => ({onSave: !prevState.onSave}))
          if (onSave === true) {
            addToSavedList(DetailList)
          }
        }

        return (
          <HomeDataContainer isDark={isDark}>
            <VideoBgContainer isDark={isDark}>
              <VideoPlayer data-testid={id}>
                <ReactPlayer
                  playing="true"
                  url={videoUrl}
                  width="100%"
                  height={500}
                  alt="video thumbnail"
                />
              </VideoPlayer>
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
              <LikesBgContainer>
                <VideoSubBgContainer>
                  <BottomNames isDark={isDark}>{viewCount}</BottomNames>
                  <BottomNames isDark={isDark}>{PublishedDate}</BottomNames>
                </VideoSubBgContainer>
                <VideoSubBgContainer>
                  <LikeButton
                    onClick={this.onLike}
                    isDark={isDark}
                    isLiked={isLiked}
                  >
                    <Icon>
                      <BiLike size={20} />
                    </Icon>
                    Like
                  </LikeButton>
                  <DislikeButton
                    onClick={this.onDislike}
                    isDark={isDark}
                    isDisliked={isDisliked}
                  >
                    <Icon>
                      <BiDislike size={20} />
                    </Icon>
                    Dislike
                  </DislikeButton>
                  <SaveButton
                    type="button"
                    onClick={onSaveVideos}
                    onSave={onSave}
                  >
                    <Icon>
                      <BiListPlus size={20} />
                    </Icon>
                    Save
                  </SaveButton>
                </VideoSubBgContainer>
              </LikesBgContainer>
              <Line />
              <VideoSubBgContainer>
                <Logo src={profileImageUrl} />
                <TitleBgContainer>
                  <LogoTitle isDark={isDark}>{name}</LogoTitle>
                  <BottomNames isDark={isDark}>
                    {subscriberCount} Subscribers
                  </BottomNames>
                </TitleBgContainer>
              </VideoSubBgContainer>
              <DescriptionTitle isDark={isDark}>Description:</DescriptionTitle>
              <Description isDark={isDark}>{description}</Description>
            </VideoBgContainer>
          </HomeDataContainer>
        )
      }}
    </ThemeToggle.Consumer>
  )

  renderLoadingView = () => (
    <FailureBgContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
      </div>
    </FailureBgContainer>
  )

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
      <RetryButton>Retry</RetryButton>
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
      <HomeBgContainer>
        <Header />
        <HomeSubBgContainer>
          <Navbar />
          {this.renderAllVideos()}
        </HomeSubBgContainer>
      </HomeBgContainer>
    )
  }
}

export default VideoCard
