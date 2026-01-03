import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeContainer,
  HomeContentContainer,
  VideoPlayerContainer,
  VideoLikesContainer,
  VideoLikesSubContainer,
  DotIcon,
  LikeIcon,
  DisLikeIcon,
  SaveVideoIcon,
  CustomButton,
  ViewYearText,
  LikeText,
  DisLikeText,
  SaveText,
  Border,
  ChannelDetailsContainer,
  ChannelText,
  DescriptionText,
  ChannelImage,
  VideoTitle,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getGetVideos()
  }

  onLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: prevState.isLiked ? prevState.isDisLiked : false,
    }))
  }

  onDisLike = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: prevState.isDisLiked ? prevState.isLiked : false,
    }))
  }

  onSave = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  setSavedState = () => {
    this.setState({isSaved: true})
  }

  getGetVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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

      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }

      const {savedVideos} = this.context
      const isSaved = savedVideos.some(video => video.id === formattedData.id)

      return this.setState({
        videoDetails: formattedData,
        apiStatus: apiConstants.success,
        isSaved,
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
    const {isLiked, isDisLiked, isSaved} = this.state
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark, changeSavedVideos} = value
            const {videoDetails} = this.state
            const onSave = () => {
              changeSavedVideos({...videoDetails, isSaved: true})
            }

            const renderVideosList = () => (
              <>
                <VideoPlayerContainer>
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url={videoDetails.videoUrl}
                  />
                </VideoPlayerContainer>
                <VideoTitle dark={isDark}>{videoDetails.title}</VideoTitle>
                <VideoLikesContainer>
                  <VideoLikesSubContainer>
                    <ViewYearText dark={isDark}>
                      {videoDetails.viewCount} views
                    </ViewYearText>
                    <DotIcon dark={isDark} />
                    <ViewYearText dark={isDark}>
                      {formatDistanceToNow(new Date(videoDetails.publishedAt))}{' '}
                      ago
                    </ViewYearText>
                  </VideoLikesSubContainer>
                  <VideoLikesSubContainer>
                    <CustomButton type="button" onClick={this.onLike}>
                      <LikeIcon liked={isLiked} />
                      <LikeText liked={isLiked}>Like</LikeText>
                    </CustomButton>

                    <CustomButton type="button" onClick={this.onDisLike}>
                      <DisLikeIcon disliked={isDisLiked} />
                      <DisLikeText disliked={isDisLiked}>Dislike</DisLikeText>
                    </CustomButton>

                    <CustomButton
                      type="button"
                      onClick={() => {
                        this.onSave()
                        onSave()
                      }}
                    >
                      <SaveVideoIcon save={isSaved} />
                      <SaveText save={isSaved}>
                        {isSaved ? 'Saved' : 'Save'}
                      </SaveText>
                    </CustomButton>
                  </VideoLikesSubContainer>
                </VideoLikesContainer>
                <Border />
                <ChannelDetailsContainer>
                  <ChannelImage
                    src={videoDetails.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <div>
                    <ChannelText dark={isDark}>
                      {videoDetails.channel.name}
                    </ChannelText>
                    <ViewYearText dark={isDark}>
                      {videoDetails.channel.subscriberCount} Subscribers
                    </ViewYearText>
                  </div>
                </ChannelDetailsContainer>
                <DescriptionText dark={isDark}>
                  {videoDetails.description}
                </DescriptionText>
              </>
            )

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
                <HomeContentContainer
                  dark={isDark}
                  data-testid="videoItemDetails"
                >
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
VideoItemDetails.contextType = ThemeContext

export default VideoItemDetails
