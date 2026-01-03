import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
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
  BannerButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  BannerCloseButton,
  BannerCloseIcon,
  VideosListContainer,
  LinkItem,
  ListItem,
  VideoImage,
  VideoDetailsContainer,
  ChannelIcon,
  VideoDetailsTextContainer,
  VideoTitle,
  ChannelName,
  ViewYearContainer,
  ViewYearText,
  DotIcon,
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

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosList: [],
    showBanner: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getGetVideos()
  }

  getGetVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        publishedAt: eachVideo.published_at,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
      }))
      return this.setState({
        videosList: formattedData,
        apiStatus: apiConstants.success,
      })
    } catch {
      return this.setState({apiStatus: apiConstants.failed})
    }
  }

  hideBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getGetVideos()
  }

  onRetry = () => {
    this.getGetVideos()
  }

  render() {
    const {showBanner, searchInput} = this.state
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
                        <VideoDetailsContainer>
                          <ChannelIcon
                            src={eachVideo.channel.profileImageUrl}
                            alt="channel logo"
                          />
                          <VideoDetailsTextContainer>
                            <VideoTitle dark={isDark}>
                              {eachVideo.title}
                            </VideoTitle>
                            <ChannelName dark={isDark}>
                              {eachVideo.channel.name}
                            </ChannelName>
                            <ViewYearContainer>
                              <ViewYearText dark={isDark}>
                                {eachVideo.viewCount} views
                              </ViewYearText>
                              <DotIcon />
                              <ViewYearText dark={isDark}>
                                {formatDistanceToNow(
                                  new Date(eachVideo.publishedAt),
                                )}{' '}
                                ago
                              </ViewYearText>
                            </ViewYearContainer>
                          </VideoDetailsTextContainer>
                        </VideoDetailsContainer>
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
                <HomeContentContainer dark={isDark} data-testid="home">
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerCloseButton
                        type="button"
                        data-testid="close"
                        onClick={this.hideBanner}
                      >
                        <BannerCloseIcon />
                      </BannerCloseButton>
                      <BannerImageLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      dark={isDark}
                    />
                    <SearchButton
                      dark={isDark}
                      type="button"
                      onClick={this.onClickSearch}
                      data-testid="searchButton"
                    >
                      <SearchIcon />
                    </SearchButton>
                  </SearchContainer>
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
export default Home
