import SavedDetailView from '../SavedDetailView'
import ThemeToggle from '../../Context/ThemeToggle'

import {
  VideosContainer,
  TrendingHeadingContainer,
  Heading,
} from './StyledComponents'

const SavedVideosList = () => (
  <ThemeToggle.Consumer>
    {value => {
      const {SavedList, isDark} = value
      return (
        <VideosContainer>
          <TrendingHeadingContainer isDark={isDark}>
            <Heading isDark={isDark}>Trending</Heading>
          </TrendingHeadingContainer>
          {SavedList.map(eachOne => (
            <SavedDetailView eachVideoDetails={eachOne} key={eachOne.id} />
          ))}
        </VideosContainer>
      )
    }}
  </ThemeToggle.Consumer>
)

export default SavedVideosList
