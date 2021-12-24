import styled from 'styled-components'

export const HomeDataContainer = styled.ul`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 35px;
  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`

export const SearchInputContainer = styled.div`
  width: 30%;
  height: 3vh;
  border: 1px solid ${props => (props.isDark ? '#ffffff' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  outline: none;
  margin: 40px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 90%;
    height: 3vh;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 3vh;
  border: none;
  outline: none;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  background-color: transparent;
  font-size: 15px;
  @media (max-width: 767px) {
    width: 80%;
    height: 3vh;
  }
`

export const SearchIcon = styled.button`
  border: none;
  outline: none;
  align-self: flex-end;
  background-color: ${props => (props.isDark ? '#f4f4f4' : '#181818')};
  border-left: 3px solid #909090;
  color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  width: 7vh;
  height: 100%;
  @media (max-width: 767px) {
    border-left: 2px solid #909090;
  }
`

export const BannerBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-size: cover;
  padding: 20px;
  margin: 10px;
  margin-top: 0px;
  @media (max-width: 767px) {
    justify-content: center;
    margin: 0px;
  }
`

export const BannerCloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  align-self: flex-end;
`
export const PremiumImage = styled.img`
  width: 10%;
  height: 13%;
  margin: 10px;
  @media (max-width: 767px) {
    width: 30%;
  }
`

export const PremiumHeading = styled.h1`
  font-size: 23px;
  font-weight: 400;
  width: 50%;
  font-family: Roboto;
  margin: 10px;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`

export const PremiumGetButton = styled.button`
  border: 2px solid black;
  font-size: 17px;
  font-weight: 500;
  outline: none;
  margin-top: 20px;
  margin-left: 10px;
  padding: 20px
  width: 12vh;
  height: 4vh;
  background-color: transparent;
  @media (max-width: 767px) {
    font-size: 8px;
    font-weight: 200;
  }
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
