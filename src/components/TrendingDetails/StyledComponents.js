import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
`

export const VideoImage = styled.img`
  width: 30vh;
  height: 18vh;
  margin: 10px;
`
export const VideoSubBgContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const VideoSubBgContainerSm = styled.div`
  display: flex;
  flex-direction: row;
`

export const TitleBgContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
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
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export default styled
