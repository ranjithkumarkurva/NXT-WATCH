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
  SocialPlatforms,
  CommentDescription,
} from './StyledComponents'
import ThemeToggle from '../../Context/ThemeToggle'

const Navbar = () => (
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
            <Linked to="/saved-videos">
              <NavbarNamesContainer>
                <Icon>
                  <BiListPlus />
                </Icon>
                <PagesNames isDark={isDark}>Saved Videos</PagesNames>
              </NavbarNamesContainer>
            </Linked>
          </NavbarSubBgContainer>
          <NavbarSubBgContainer>
            <PagesNames isDark={isDark}>CONTACT US</PagesNames>
            <NavbarNamesContainer>
              <SocialPlatforms
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialPlatforms
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialPlatforms
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </NavbarNamesContainer>
            <CommentDescription isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </CommentDescription>
          </NavbarSubBgContainer>
        </NavbarContainer>
      )
    }}
  </ThemeToggle.Consumer>
)

export default Navbar
