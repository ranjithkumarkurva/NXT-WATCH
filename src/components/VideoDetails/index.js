import {formatDistanceToNow} from 'date-fns'
import ThemeToggle from '../../Context/ThemeToggle'
import {
  VideoBgContainer,
  VideoImage,
  VideoSubBgContainer,
  Logo,
  TitleBgContainer,
  VideoTitle,
  BottomNames,
  Linked,
} from './StyledComponents'

console.log()

const VideoDetails = props => (
  <ThemeToggle.Consumer>
    {value => {
      const {isDark} = value
      const {eachVideoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        name,
        profileImageUrl,
        viewCount,
        publishedAt,
      } = eachVideoDetails

      const PublishedDate = formatDistanceToNow(new Date(publishedAt))

      return (
        <Linked to={`videos/${id}`}>
          <VideoBgContainer>
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoSubBgContainer>
              <Logo src={profileImageUrl} alt="channel logo" />
              <TitleBgContainer>
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                <BottomNames isDark={isDark}>{name}</BottomNames>
                <VideoSubBgContainer>
                  <BottomNames isDark={isDark}>{viewCount}</BottomNames>
                  <BottomNames isDark={isDark}>{PublishedDate}</BottomNames>
                </VideoSubBgContainer>
              </TitleBgContainer>
            </VideoSubBgContainer>
          </VideoBgContainer>
        </Linked>
      )
    }}
  </ThemeToggle.Consumer>
)

export default VideoDetails
