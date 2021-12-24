import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoBgContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 27vh;
  margin-bottom: 5vh;
  list-style-type: none;
  @media (max-width: 767px) {
    padding-left: 20px;
  }
`

export const VideoImage = styled.img`
  width: 25vh;
  height: 15vh;
  @media (max-width: 767px) {
    width: 35vh;
    height: 18vh;
  }
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
  margin-top: 10px;
`
export const TitleBgContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.h1`
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
  width: 20vh;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  @media (max-width: 767px) {
    width: 30vh;
  }
`

export const BottomNames = styled.h1`
  font-size: 17px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#ffffff' : '#424242')};
  padding-left: 10px;
  margin-top: 3px;
`

export const Linked = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isDark ? '#ffffff' : '#424242')};
`

export default styled
