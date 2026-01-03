import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeContainer,
  HomeContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value

            const renderFinalView = () => {
              const notFoundImage = isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

              return (
                <>
                  <NotFoundImage src={notFoundImage} alt="not found" />
                  <NotFoundHeading dark={isDark}>
                    Page Not Found
                  </NotFoundHeading>
                  <NotFoundPara dark={isDark}>
                    We are sorry, the page you requested could not be found.
                  </NotFoundPara>
                </>
              )
            }

            return (
              <HomeContainer dark={isDark}>
                <SideBar />
                <HomeContentContainer dark={isDark} data-testid="not-found">
                  {renderFinalView()}
                </HomeContentContainer>
              </HomeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default NotFound
