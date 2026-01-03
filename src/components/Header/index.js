import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'

import './index.css'

import {
  HeaderContainer,
  NavbarLogoImage,
  NavBarMenuMobileContainer,
  NavBarMenuLargeContainer,
  NavbarMenuButton,
  NavbarThemeMoonIcon,
  NavbarThemeLightIcon,
  NavbarHamburgerIcon,
  NavbarLogoutIcon,
  ProfileImage,
  LogoutButton,
  LinkItem,
  LogoutPopupContainer,
  LogoutPopupText,
  LogoutButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, changeTheme} = value
          const onClickThemeIcon = () => {
            changeTheme()
          }

          const getLogoImage = () =>
            isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <HeaderContainer dark={isDark}>
              <LinkItem to="/">
                <NavbarLogoImage src={getLogoImage()} alt="website logo" />
              </LinkItem>
              <NavBarMenuMobileContainer>
                {isDark ? (
                  <li key="themelight">
                    <NavbarMenuButton
                      type="button"
                      onClick={onClickThemeIcon}
                      data-testid="theme"
                    >
                      <NavbarThemeLightIcon dark={isDark} />
                    </NavbarMenuButton>
                  </li>
                ) : (
                  <li key="themedark">
                    <NavbarMenuButton
                      type="button"
                      onClick={onClickThemeIcon}
                      data-testid="theme"
                    >
                      <NavbarThemeMoonIcon dark={isDark} />
                    </NavbarMenuButton>
                  </li>
                )}

                <Popup
                  modal
                  trigger={
                    <li key="hamburger">
                      <NavbarMenuButton type="button">
                        <NavbarHamburgerIcon dark={isDark} />
                      </NavbarMenuButton>
                    </li>
                  }
                  className="popup-content"
                >
                  {close => <SideBar dark={isDark} closePopup={close} />}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <li key="logoutIcon">
                      <NavbarMenuButton type="button">
                        <NavbarLogoutIcon dark={isDark} />
                      </NavbarMenuButton>
                    </li>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutPopupContainer dark={isDark}>
                      <LogoutPopupText dark={isDark}>
                        Are you sure, you want to logout
                      </LogoutPopupText>

                      <LogoutButtonsContainer>
                        <CancelButton type="button" onClick={close}>
                          Cancel
                        </CancelButton>

                        <ConfirmButton
                          type="button"
                          onClick={() => {
                            const {history} = this.props
                            Cookies.remove('jwt_token')
                            close()
                            history.replace('/login')
                          }}
                        >
                          Confirm
                        </ConfirmButton>
                      </LogoutButtonsContainer>
                    </LogoutPopupContainer>
                  )}
                </Popup>
              </NavBarMenuMobileContainer>
              <NavBarMenuLargeContainer>
                {isDark ? (
                  <li key="themelight">
                    <NavbarMenuButton type="button" onClick={onClickThemeIcon}>
                      <NavbarThemeLightIcon dark={isDark} />
                    </NavbarMenuButton>
                  </li>
                ) : (
                  <li key="themedark">
                    <NavbarMenuButton type="button" onClick={onClickThemeIcon}>
                      <NavbarThemeMoonIcon dark={isDark} />
                    </NavbarMenuButton>
                  </li>
                )}
                <li key="profile">
                  <NavbarMenuButton>
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavbarMenuButton>
                </li>
                <Popup
                  modal
                  trigger={
                    <li key="logout">
                      <LogoutButton dark={isDark}>Logout</LogoutButton>
                    </li>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutPopupContainer dark={isDark}>
                      <LogoutPopupText dark={isDark}>
                        Are you sure, you want to logout
                      </LogoutPopupText>

                      <LogoutButtonsContainer>
                        <CancelButton type="button" onClick={close}>
                          Cancel
                        </CancelButton>

                        <ConfirmButton
                          type="button"
                          onClick={() => {
                            const {history} = this.props
                            Cookies.remove('jwt_token')
                            close()
                            history.replace('/login')
                          }}
                        >
                          Confirm
                        </ConfirmButton>
                      </LogoutButtonsContainer>
                    </LogoutPopupContainer>
                  )}
                </Popup>
              </NavBarMenuLargeContainer>
            </HeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Header)
