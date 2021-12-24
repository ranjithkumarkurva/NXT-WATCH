import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {BsMoon} from 'react-icons/bs'
import {BiSun} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import NavbarSmallDevices from '../NavbarSmallDevice'
import ThemeToggle from '../../Context/ThemeToggle'
import {
  HeaderBgContainer,
  HeaderLogo,
  HeaderSubBg,
  ThemeButton,
  LogoutButton,
  Profile,
  LogoutSmButton,
  Menu,
  LogoutMainContainer,
  LogoutContainer,
  LogoutHeading,
  LogoutButtonContainer,
  CloseButton,
  ConfirmButton,
  ProfileImg,
  Name,
  NavbarSm,
  Bio,
} from './StyledComponents'

import './index.css'
import {Linked} from '../Navbar/StyledComponents'

const DarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const LightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeToggle.Consumer>
      {value => {
        const {isDark, onChangeTheme} = value
        const onTogglerTheme = () => {
          onChangeTheme(!isDark)
        }

        return (
          <>
            <HeaderBgContainer isDark={isDark}>
              <Linked to="/">
                <HeaderLogo
                  src={isDark ? DarkImage : LightImage}
                  alt="website logo"
                />
              </Linked>

              <HeaderSubBg>
                <ThemeButton
                  type="button"
                  onClick={onTogglerTheme}
                  isDark={isDark}
                  data-testid="theme"
                >
                  {isDark ? <BiSun size="27" /> : <BsMoon size="27" />}
                </ThemeButton>

                <Popup
                  trigger={
                    <Profile
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  }
                >
                  <LogoutMainContainer>
                    <LogoutContainer>
                      <ProfileImg
                        src="https://res.cloudinary.com/dpzasrsyq/image/upload/c_scale,r_80,w_142/v1608023752/K_Ranjith_Kumar_tpg4r6.jpg"
                        alt="profile"
                      />
                      <Name>K Ranjith Kumar</Name>
                      <Bio>Frontend Developer</Bio>
                    </LogoutContainer>
                  </LogoutMainContainer>
                </Popup>

                <Popup
                  modal
                  trigger={
                    <Menu type="button" isDark={isDark}>
                      <GiHamburgerMenu size="25" />
                    </Menu>
                  }
                  className="popup-overlay"
                >
                  <NavbarSm>
                    <NavbarSmallDevices />
                  </NavbarSm>
                </Popup>

                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" isDark={isDark}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <LogoutMainContainer>
                      <LogoutContainer>
                        <LogoutHeading>
                          Are you sure you want to exit
                        </LogoutHeading>
                        <LogoutButtonContainer>
                          <CloseButton onClick={() => close()}>
                            Cancel
                          </CloseButton>
                          <ConfirmButton onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </LogoutButtonContainer>
                      </LogoutContainer>
                    </LogoutMainContainer>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <LogoutSmButton type="button" isDark={isDark}>
                      <FiLogOut size="30" />
                    </LogoutSmButton>
                  }
                  className="popup-overlay"
                >
                  {close => (
                    <LogoutMainContainer>
                      <LogoutContainer>
                        <LogoutHeading>
                          Are you sure you want to exit
                        </LogoutHeading>
                        <LogoutButtonContainer>
                          <CloseButton onClick={() => close()}>
                            Cancel
                          </CloseButton>
                          <ConfirmButton onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </LogoutButtonContainer>
                      </LogoutContainer>
                    </LogoutMainContainer>
                  )}
                </Popup>
              </HeaderSubBg>
            </HeaderBgContainer>
          </>
        )
      }}
    </ThemeToggle.Consumer>
  )
}

export default withRouter(Header)
