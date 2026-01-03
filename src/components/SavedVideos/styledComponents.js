import styled from 'styled-components'

import {BsDot} from 'react-icons/bs'

import {HiFire} from 'react-icons/hi'

import {Link} from 'react-router-dom'

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
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
export const SearchContainer = styled.div`
  width: 60%;
  margin: 0px 20px;
  height: 35px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #64748b;
  @media screen and (max-width: 767px) {
    height: 30px;
  }
`
export const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    width: 85%;
    flex-shrink: 1;
  }
`

export const SearchButton = styled.button`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: none;
  border-left: 1px solid #64748b;
  outline: none;
  cursor: pointer;
  align-items: center;
  background-color: ${props => (props.dark ? '#313131' : '#f1f1f1')};
  @media screen and (max-width: 767px) {
    width: 15%;
    flex-shrink: 0;
  }
`
export const BannerContainer = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  display: flex;
  padding-left: 50px;
  align-items: center;
  background-color: ${props => (props.dark ? '#231f20' : '#f1f5f9')};
  @media screen and (max-width: 767px) {
    height: 100px;
  }
`

export const BannerImageLogo = styled(HiFire)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  color: #ff0000;
  margin-right: 20px;
`
export const BannerText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
`

export const VideosListContainer = styled.ul`
  width: 100%;
  min-height: 85vh;
  list-style: none;
  padding: 20px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  align-items: flex-start;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    height: 120px;
  }
`
export const VideoImage = styled.img`
  width: 100%;
  height: 120px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    min-width: 30%;
    width: 30%;
    height: 120px;
  }
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`
export const ChannelIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoDetailsTextContainer = styled.div`
  dislplay: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const VideoTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.dark ? '#ebebeb' : '#1e293b')};
  margin: 0px;
  margin-bottom: 5px;
`
export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => (props.dark ? '#64748b' : '#475569')};
  margin: 0px;
  margin-bottom: 5px;
`
export const ViewYearContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
export const ViewYearText = styled.p`
  font-size: 12px;
  color: ${props => (props.dark ? '#64748b' : '#475569')};
  margin: 0px;
  margin-bottom: 5px;
`
export const DotIcon = styled(BsDot)`
  width: 20px;
  height: 20px;
  color: ${props => (props.dark ? '#64748b' : '#475569')};
  margin: 0px 5px;
  align-self: center;
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
