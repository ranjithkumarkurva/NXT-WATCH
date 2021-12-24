import {TiHome} from 'react-icons/ti'
import {BiListPlus} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {FaFire} from 'react-icons/fa'

import {
  NavbarContainer,
  NavbarSubBgContainer,
  PagesNames,
  Linked,
  NavbarNamesContainer,
  Icon,
} from './StyledComponents'

import ThemeToggle from '../../Context/ThemeToggle'

const NavbarSmallDevices = () => (
  <ThemeToggle.Consumer>
    {value => {
      const {isDark} = value

      return (
        <NavbarContainer isDark={isDark}>
          <NavbarSubBgContainer>
            <Linked to="/">
              <NavbarNamesContainer>
                <Icon>
                  <TiHome />
                </Icon>
                <PagesNames isDark={isDark}>Home</PagesNames>
              </NavbarNamesContainer>
            </Linked>
            <Linked to="/Trending">
              <NavbarNamesContainer>
                <Icon>
                  <FaFire />
                </Icon>
                <PagesNames isDark={isDark}>Trending</PagesNames>
              </NavbarNamesContainer>
            </Linked>
            <Linked to="/Gaming">
              <NavbarNamesContainer>
                <Icon>
                  <SiYoutubegaming />
                </Icon>
                <PagesNames isDark={isDark}>Gaming</PagesNames>
              </NavbarNamesContainer>
            </Linked>
            <Linked to="/Saved videos">
              <NavbarNamesContainer>
                <Icon>
                  <BiListPlus />
                </Icon>
                <PagesNames isDark={isDark}>Saved Videos</PagesNames>
              </NavbarNamesContainer>
            </Linked>
          </NavbarSubBgContainer>
        </NavbarContainer>
      )
    }}
  </ThemeToggle.Consumer>
)

export default NavbarSmallDevices
