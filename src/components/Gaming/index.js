import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeContainer,
  HomeContentContainer,
  BannerContainer,
  BannerImageLogo,
  BannerText,
  VideosListContainer,
  LinkItem,
  ListItem,
  VideoImage,
  VideoTitle,
  ChannelName,
  LoaderContainer,
  ResultImage,
  HeadingComponent,
  ParaComponent,
  RetryButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getGetVideos()
  }

  getGetVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(apiUrl, options)
      if (!response.ok) {
        return this.setState({apiStatus: apiConstants.failed})
      }
      const data = await response.json()
      const formattedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      return this.setState({
        videosList: formattedData,
        apiStatus: apiConstants.success,
      })
    } catch {
      return this.setState({apiStatus: apiConstants.failed})
    }
  }

  onClickSearch = () => {
    this.getGetVideos()
  }

  onRetry = () => {
    this.getGetVideos()
  }

  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value
            const renderVideosList = () => {
              const {videosList} = this.state

              if (videosList.length === 0) {
                return (
                  <>
                    <ResultImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                      alt="no videos"
                    />
                    <HeadingComponent dark={isDark}>
                      No Search results found
                    </HeadingComponent>
                    <ParaComponent dark={isDark}>
                      Try different key words or remove search filter
                    </ParaComponent>
                    <RetryButton
                      dark={isDark}
                      type="button"
                      onClick={this.onRetry}
                    >
                      Retry
                    </RetryButton>
                  </>
                )
              }
              return (
                <VideosListContainer>
                  {videosList.map(eachVideo => (
                    <LinkItem to={`/videos/${eachVideo.id}`} key={eachVideo.id}>
                      <ListItem>
                        <VideoImage
                          src={eachVideo.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <VideoTitle dark={isDark}>{eachVideo.title}</VideoTitle>
                        <ChannelName dark={isDark}>
                          {eachVideo.viewCount} Watching Worldwide
                        </ChannelName>
                      </ListItem>
                    </LinkItem>
                  ))}
                </VideosListContainer>
              )
            }

            const renderLoader = () => (
              <LoaderContainer data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color={!isDark ? '#3b82f6' : '#ffffff'}
                  height="50"
                  width="50"
                />
              </LoaderContainer>
            )

            const renderFailedView = () => {
              const failedImageUrl = isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              return (
                <>
                  <ResultImage src={failedImageUrl} alt="failure view" />
                  <HeadingComponent dark={isDark}>
                    Oops! Something Went Wrong
                  </HeadingComponent>
                  <ParaComponent dark={isDark}>
                    We are having some trouble to complete your request. Please
                    try again.
                  </ParaComponent>
                  <RetryButton
                    dark={isDark}
                    type="button"
                    onClick={this.onRetry}
                  >
                    Retry
                  </RetryButton>
                </>
              )
            }

            const renderFinalView = () => {
              const {apiStatus} = this.state
              switch (apiStatus) {
                case apiConstants.success:
                  return renderVideosList()
                case apiConstants.failed:
                  return renderFailedView()
                case apiConstants.inProgress:
                  return renderLoader()
                default:
                  return null
              }
            }

            return (
              <HomeContainer dark={isDark}>
                <SideBar />
                <HomeContentContainer dark={isDark} data-testid="gaming">
                  <BannerContainer data-testid="banner" dark={isDark}>
                    <BannerImageLogo />
                    <BannerText dark={isDark}>Gaming</BannerText>
                  </BannerContainer>
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
export default Gaming
