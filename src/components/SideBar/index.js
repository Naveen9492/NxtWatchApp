import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  SiderbarMobileContainer,
  SiderbarLargeContainer,
  SidebarMenuItemsContainer,
  SidebarMenuItemContainer,
  SiderBarHomeIcon,
  SiderBarTrendingIcon,
  SiderBarGamesIcon,
  SiderBarPlayListIcon,
  RouteText,
  SidebarContactContainer,
  SidebarContactImageContainer,
  SidebarContactImage,
  SideBarContactUsText,
  SideBarContactUsParaText,
  LinkRoute,
} from './styledComponents'

class SideBar extends Component {
  render() {
    const {closePopup, location} = this.props
    const {pathname} = location

    const isActiveRoute = route => pathname === route

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              {closePopup && (
                <SiderbarMobileContainer dark={isDark}>
                  <SidebarMenuItemsContainer dark={isDark}>
                    <LinkRoute
                      to="/"
                      onClick={() => {
                        if (closePopup) closePopup()
                      }}
                    >
                      <SidebarMenuItemContainer
                        dark={isDark}
                        isActive={isActiveRoute('/')}
                      >
                        <SiderBarHomeIcon
                          dark={isDark}
                          isActive={isActiveRoute('/')}
                        />
                        <RouteText dark={isDark}>Home</RouteText>
                      </SidebarMenuItemContainer>
                    </LinkRoute>
                    <LinkRoute
                      to="/trending"
                      onClick={() => {
                        if (closePopup) closePopup()
                      }}
                    >
                      <SidebarMenuItemContainer
                        dark={isDark}
                        isActive={isActiveRoute('/trending')}
                      >
                        <SiderBarTrendingIcon
                          dark={isDark}
                          isActive={isActiveRoute('/trending')}
                        />
                        <RouteText dark={isDark}>Trending</RouteText>
                      </SidebarMenuItemContainer>
                    </LinkRoute>
                    <LinkRoute
                      to="/gaming"
                      onClick={() => {
                        if (closePopup) closePopup()
                      }}
                    >
                      <SidebarMenuItemContainer
                        dark={isDark}
                        isActive={isActiveRoute('/gaming')}
                      >
                        <SiderBarGamesIcon
                          dark={isDark}
                          isActive={isActiveRoute('/gaming')}
                        />
                        <RouteText dark={isDark}>Gaming</RouteText>
                      </SidebarMenuItemContainer>
                    </LinkRoute>
                    <LinkRoute
                      to="/saved-videos"
                      onClick={() => {
                        if (closePopup) closePopup()
                      }}
                    >
                      <SidebarMenuItemContainer
                        dark={isDark}
                        isActive={isActiveRoute('/saved-videos')}
                      >
                        <SiderBarPlayListIcon
                          dark={isDark}
                          isActive={isActiveRoute('/saved-videos')}
                        />
                        <RouteText dark={isDark}>Saved Videos</RouteText>
                      </SidebarMenuItemContainer>
                    </LinkRoute>
                  </SidebarMenuItemsContainer>
                  <SidebarContactContainer>
                    <SideBarContactUsText dark={isDark}>
                      Contact Us
                    </SideBarContactUsText>
                    <SidebarContactImageContainer>
                      <SidebarContactImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <SidebarContactImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <SidebarContactImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </SidebarContactImageContainer>
                    <SideBarContactUsParaText dark={isDark}>
                      Enjoy! Now to see your channels and recommendations!
                    </SideBarContactUsParaText>
                  </SidebarContactContainer>
                </SiderbarMobileContainer>
              )}
              <SiderbarLargeContainer dark={isDark}>
                <SidebarMenuItemsContainer dark={isDark}>
                  <LinkRoute to="/">
                    <SidebarMenuItemContainer
                      dark={isDark}
                      isActive={isActiveRoute('/')}
                    >
                      <SiderBarHomeIcon
                        dark={isDark}
                        isActive={isActiveRoute('/')}
                      />
                      <RouteText dark={isDark}>Home</RouteText>
                    </SidebarMenuItemContainer>
                  </LinkRoute>
                  <LinkRoute to="/trending">
                    <SidebarMenuItemContainer
                      dark={isDark}
                      isActive={isActiveRoute('/trending')}
                    >
                      <SiderBarTrendingIcon
                        dark={isDark}
                        isActive={isActiveRoute('/trending')}
                      />
                      <RouteText dark={isDark}>Trending</RouteText>
                    </SidebarMenuItemContainer>
                  </LinkRoute>
                  <LinkRoute to="/gaming">
                    <SidebarMenuItemContainer
                      dark={isDark}
                      isActive={isActiveRoute('/gaming')}
                    >
                      <SiderBarGamesIcon
                        dark={isDark}
                        isActive={isActiveRoute('/gaming')}
                      />
                      <RouteText dark={isDark}>Gaming</RouteText>
                    </SidebarMenuItemContainer>
                  </LinkRoute>
                  <LinkRoute to="/saved-videos">
                    <SidebarMenuItemContainer
                      dark={isDark}
                      isActive={isActiveRoute('/saved-videos')}
                    >
                      <SiderBarPlayListIcon
                        dark={isDark}
                        isActive={isActiveRoute('/saved-videos')}
                      />
                      <RouteText dark={isDark}>Saved Videos</RouteText>
                    </SidebarMenuItemContainer>
                  </LinkRoute>
                </SidebarMenuItemsContainer>
                <SidebarContactContainer>
                  <SideBarContactUsText dark={isDark}>
                    Contact Us
                  </SideBarContactUsText>
                  <SidebarContactImageContainer>
                    <SidebarContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <SidebarContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <SidebarContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </SidebarContactImageContainer>
                  <SideBarContactUsParaText dark={isDark}>
                    Enjoy! Now to see your channels and recommendations!
                  </SideBarContactUsParaText>
                </SidebarContactContainer>
              </SiderbarLargeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(SideBar)
