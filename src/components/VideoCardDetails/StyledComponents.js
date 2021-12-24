import styled from 'styled-components'

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
  width: 4vh;
  height: 4vh;
`
export const TitleBgContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.h1`
  font-size: 15px;
  font-weight: 500;
  width: 20vh;
`

export const BottomNames = styled.h1`
  font-size: 17px;
  font-weight: 400;
  color: #424242;
  padding-left: 10px;
  margin-top: 3px;
`
export const LikesBgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Line = styled.hr`
  border-bottom-width: 2px solid #3e3e3e;
`
export const VideoPlayer = styled.div`
  width: 50vh;
  height: 50vh;
`
export default styled
