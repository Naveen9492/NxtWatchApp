import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

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
  VideoDetailsContainer,
  ChannelIcon,
  VideoDetailsTextContainer,
  VideoTitle,
  ChannelName,
  ViewYearContainer,
  ViewYearText,
  DotIcon,
  ResultImage,
  HeadingComponent,
  ParaComponent,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark, savedVideos} = value
            const renderVideosList = () => {
              if (savedVideos.length === 0) {
                return (
                  <>
                    <ResultImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <HeadingComponent dark={isDark}>
                      No saved videos found
                    </HeadingComponent>
                    <ParaComponent dark={isDark}>
                      You can save your videos while watching them
                    </ParaComponent>
                  </>
                )
              }
              return (
                <VideosListContainer>
                  {savedVideos.map(eachVideo => (
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

            return (
              <HomeContainer dark={isDark}>
                <SideBar />
                <HomeContentContainer dark={isDark} data-testid="trending">
                  <BannerContainer data-testid="banner" dark={isDark}>
                    <BannerImageLogo />
                    <BannerText dark={isDark}>Saved Videos</BannerText>
                  </BannerContainer>
                  {renderVideosList()}
                </HomeContentContainer>
              </HomeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default SavedVideos
