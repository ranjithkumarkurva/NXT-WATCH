import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderBgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5vh;
  height: 10%;
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
`

export const HeaderLogo = styled.img`
  width: 13vh;
  margin-bottom: 10px;
`

export const HeaderSubBg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  margin-top: 20px;
`

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#313131')};
  margin-bottom: 20px;
  @media (max-width: 767px) {
    margin-top: 12px;
  }
`

export const ThemeSmButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#313131')};
  margin: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const Profile = styled.img`
  margin: 20px;
  width: 3vh;
  height: 5vh;
  padding-top: 15px;
  padding-bottom: 5px;
  color: #3b82f6;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ProfileImg = styled.img`
  margin: 20px;
  width: 8vh;
  height: 10vh;
  padding-top: 15px;
  padding-bottom: 5px;
  background-color: transparent;
  color: #3b82f6;
  @media (max-width: 767px) {
    display: none;
  }
`

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #1e293b;
  font-family; 'sans-serif';
`

export const Bio = styled.h1`
  font-size: 15px;
  font-weight: 400;
  color: #1e293b;
`

export const LogoutButton = styled.button`
  width: 8vh;
  height: 3vh;
  border: 3px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  outline: none;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border-radius: 3px;
  background-color: transparent;
  margin-top: 36px;
  margin-bottom: 65px;
  font-size: 17px;
  font-weight: 400;
  align-self: center;
  margin-right: 20px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoutSmButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  border: None;
  outline: none;
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
`
export const Menu = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  border: None;
  outline: none;
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
`

export const CloseButton = styled.button`
  width: 72px;
  height: 36px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  background-color: transparent;
  color: #94a3b8;
  margin: 0px 24px 0px 0px;
`
export const ConfirmButton = styled.button`
  width: 72px;
  height: 36px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
`

export const LogoutContainer = styled.div`
  width: 300px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoutButtonContainer = styled.div`
  display: flex;
`

export const LogoutMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  box-shadow: 0px 0px 5px 0px;
`

export const LogoutHeading = styled.h1`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #00306e;
  margin-bottom: 32px;
`

export const Linked = styled(Link)`
  text-decoration: none;
`

export const NavbarSm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default styled
