import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
`

export const VideoImage = styled.img`
  width: 22vh;
  height: 30vh;
  margin: 10px;
`
export const VideoTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const BottomNames = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #424242;
  padding-left: 10px;
  margin-top: 3px;
  color: ${props => (props.isDark ? '#cccccc' : '#424242')};
`
export const Linked = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export default styled
