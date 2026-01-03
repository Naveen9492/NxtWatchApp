import styled from 'styled-components'

import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: ${props => (props.dark ? '#212121' : '#f9f9f9')};
`
export const HomeContentContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 450px;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`
export const VideoTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.dark ? '#ebebeb' : '#1e293b')};
  margin-bottom: 5px;
  align-self: flex-start;
`
export const VideoLikesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const VideoLikesSubContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`

export const DotIcon = styled(BsDot)`
  width: 20px;
  height: 20px;
  color: ${props => (props.dark ? '#64748b' : '#475569')};
  margin: 0px 5px;
  align-self: center;
`

export const LikeIcon = styled(BiLike)`
  width: 20px;
  height: 20px;
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
`
export const DisLikeIcon = styled(BiDislike)`
  width: 20px;
  height: 20px;
  color: ${props => (props.disliked ? '#2563eb' : '#64748b')};
`
export const SaveVideoIcon = styled(CgPlayListAdd)`
  width: 20px;
  height: 20px;
  color: ${props => (props.save ? '#2563eb' : '#64748b')};
`
export const ViewYearText = styled.p`
  font-size: 14px;
  color: ${props => (props.dark ? '#64748b' : '#475569')};
  margin: 0px;
`
export const LikeText = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
`
export const DisLikeText = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
  color: ${props => (props.disliked ? '#2563eb' : '#64748b')};
`
export const SaveText = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
  color: ${props => (props.save ? '#2563eb' : '#64748b')};
`
export const CustomButton = styled.button`
  font-family: 'Roboto';
  background-color: transparent;
  margin-left: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Border = styled.hr`
  width: 100%;
  border: 1px solid ${props => (props.dark ? '#64748b' : '#475569')};
`

export const ChannelDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`

export const ChannelText = styled(VideoTitle)`
  font-size: 15px;
  color: ${props => (props.dark ? '#ebebeb' : '#1e293b')};
  margin: 0px;
  margin-bottom: 5px;
`
export const DescriptionText = styled(VideoTitle)`
  font-size: 15px;
  font-weight: 400;
  color: ${props => (props.dark ? '#ebebeb' : '#1e293b')};
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    margin-left: 50px;
  }
`
export const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`

export const LoaderContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResultImage = styled.img`
  width: 30%;
  height: 40%;
  margin-top: 50px;
  @media screen and (max-width: 767px) {
    width: 20%;
    height: 20%;
    margin-top: 40px;
  }
`
export const HeadingComponent = styled.h1`
  font-family: 'roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => (props.dark ? '#ffffff' : '#212121')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const ParaComponent = styled.p`
  font-size: 15px;
  text-align: center;
  color: ${props => (props.dark ? '#f1f5f9' : '#64748b')};
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const RetryButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`
