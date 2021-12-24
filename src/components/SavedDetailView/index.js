import {formatDistanceToNow} from 'date-fns'

import {
  VideoBgContainer,
  VideoImage,
  VideoSubBgContainer,
  VideoSubBgContainerSm,
  TitleBgContainer,
  VideoTitle,
  BottomNames,
  Linked,
} from './StyledComponents'
import ThemeToggle from '../../Context/ThemeToggle'

console.log()

const SavedDetailView = props => (
  <ThemeToggle.Consumer>
    {value => {
      const {isDark} = value

      const {eachVideoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        name,
        viewCount,
        publishedAt,
      } = eachVideoDetails

      const PublishedDate = formatDistanceToNow(new Date(publishedAt))

      return (
        <Linked to={`videos/${id}`}>
          <VideoBgContainer>
            <VideoSubBgContainer>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <TitleBgContainer>
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                <BottomNames isDark={isDark}>{name}</BottomNames>
                <VideoSubBgContainerSm>
                  <BottomNames isDark={isDark}>{viewCount}</BottomNames>
                  <BottomNames isDark={isDark}>{PublishedDate}</BottomNames>
                </VideoSubBgContainerSm>
              </TitleBgContainer>
            </VideoSubBgContainer>
          </VideoBgContainer>
        </Linked>
      )
    }}
  </ThemeToggle.Consumer>
)

export default SavedDetailView
