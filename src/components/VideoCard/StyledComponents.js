import styled from 'styled-components'

export const HomeDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  padding: 20px;
  overflow-y: scroll;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`

export const FailureBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const FailureImage = styled.img`
  width: 40%;
  height: 50%;
  margin-top: 15px;
`

export const FailureHeading = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #1e293b;
`
export const FailureDescription = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: #475569;
`

export const RetryButton = styled.button`
  width: 8vh;
  height: 4vh;
  background-color: #4f46e5;
  color: white;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
  outline: none;
  border: none;
`
export const LoaderBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const TrendingHeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #f8fafc;
  width: 100%;
  padding: 15px;
  padding-left: 80px;
`
export const Icon = styled.i``

export const Heading = styled.h1`
  font-size: 25px;
  font-weight: 500;
`

export const VideoBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
`

export const VideoImage = styled.img`
  width: 25vh;
  height: 15vh;
`
export const VideoSubBgContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 25vh;
`

export const VideoSubBgContainerSm = styled.div`
  display: flex;
  flex-direction: row;
  width: 25vh;
  @media (min-width: 768px) {
    display: none;
  }
`

export const Logo = styled.img`
  width: 8vh;
  height: 8vh;
`
export const TitleBgContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const BottomNames = styled.h1`
  font-size: 17px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#ffffff' : '#424242')};
  padding-left: 10px;
  margin-top: 20px;
`
export const LikesBgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
export const Line = styled.hr`
  border: 2px solid #d7dfe9;
  width: 98%;
`

export const VideoPlayer = styled.div`
  display: flex;
  justify-content: center;
`

export const LogoTitle = styled.h1`
  font-size: 17px;
  font-weight: 500;
  margin-left: 10px;
  margin-bottom: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const DescriptionTitle = styled.h1`
  font-size: 17px;
  font-weight: 500;
  margin-top: 30px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const Description = styled.p`
  font-size: 17px;
  font-weight: 400;
  margin-top: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#424242')};
`

export const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  display: flex;
  padding-top: 20px;
`

export const DislikeButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};

  //   color: ${props => (props.isLiked ? '#424242' : '#3b82f6')};
  display: flex;
  padding-top: 20px;
`

export const SaveButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  color: ${props => (props.onSave ? '#2563eb' : '#64748b')};
  display: flex;
  padding-top: 20px;
`

export default styled
