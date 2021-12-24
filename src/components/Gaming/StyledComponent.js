import styled from 'styled-components'

export const HomeDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  background-color: ${props => (props.isDark ? '#181818' : '#cbd5e1')};
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
  border-radius: 50px;
  border: none;
  background-color: ${props => (props.isDark ? '#7e858e' : '#e2e8f0')};
  margin: 5px;
`

export const Heading = styled.h1`
  font-size: 25px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
