import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FailureBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const FailureImage = styled.img`
  width: 40%;
  height: 40%;
  margin-top: 15px;
  margin: 20px;
  @media (max-width: 767px) {
    width: 50%;
    height: 20%;
  }
`

export const FailureHeading = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #1e293b;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const FailureDescription = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: #475569;
  flex-wrap: wrap;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    max-width: 30vh;
  }
`

export const HomeDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  overflow-y: scroll;

  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
`

export const HomeSubBgContainer = styled.div`
  display: flex;
`
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
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`
export const Linked = styled(Link)`
  text-decoration: none;
`
