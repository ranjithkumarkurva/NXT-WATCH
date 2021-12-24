import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const NavbarSubBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Linked = styled(Link)`
  text-decoration: none;
`

export const Icon = styled.i`
  padding: 6px;
  padding-right: 15px;
  padding-left: 0px;
`

export const PagesNames = styled.h1`
  font-size: 15px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const NavbarNamesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default styled
