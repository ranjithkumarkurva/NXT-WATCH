import {
  VideoBgContainer,
  VideoImage,
  VideoTitle,
  BottomNames,
  Linked,
} from './StyledComponents'
import ThemeToggle from '../../Context/ThemeToggle'

const GamingDetails = props => (
  <ThemeToggle.Consumer>
    {value => {
      const {isDark} = value

      const {eachVideoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = eachVideoDetails
      return (
        <Linked to={`videos/${id}`}>
          <VideoBgContainer>
            <VideoImage src={thumbnailUrl} alt={title} />
            <VideoTitle isDark={isDark}>{title}</VideoTitle>
            <BottomNames isDark={isDark}>
              {viewCount} Watching Worldwide
            </BottomNames>
          </VideoBgContainer>
        </Linked>
      )
    }}
  </ThemeToggle.Consumer>
)

export default GamingDetails
