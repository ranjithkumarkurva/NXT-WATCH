import styled from 'styled-components'

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`
export const TrendingHeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${props => (props.isDark ? '#212121' : '#f8fafc')};
  width: 100%;
  padding: 15px;
  padding-left: 80px;
`
export const Icon = styled.i`
  width: 7vh;
  height: 7vh;
  padding: 20px;
  border-radius: 35px;
  border: none;
  background-color: ${props => (props.isDark ? '#7e858e' : '#e2e8f0')};
  margin: 5px;
`

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  padding-top: 10px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export default styled
