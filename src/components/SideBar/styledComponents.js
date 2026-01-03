import styled from 'styled-components'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {Link} from 'react-router-dom'

export const SiderbarMobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 20px 0px;
  font-family: 'Roboto';
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const SiderbarLargeContainer = styled.div`
  width: 30%;
  height: 85vh;
  display: flex;
  padding: 20px 0px;
  font-family: 'Roboto';
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  @media screen and (min-width: 992px) {
    width: 20%;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SidebarMenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: transparent;
`

export const SidebarMenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 45px;
  width: 100%;
  background-color: ${props => {
    if (props.isActive) {
      return props.dark ? '#606060' : '#f1f1f1'
    }
    return 'transparent'
  }};
`
export const SiderBarHomeIcon = styled(IoMdHome)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-color: transparent;
  color: ${props => {
    if (props.isActive) return '#ff0000'
    if (props.dark) return '#cccccc'
    return '#606060'
  }};
`
export const SiderBarTrendingIcon = styled(HiFire)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-color: transparent;
  color: ${props => {
    if (props.isActive) return '#ff0000'
    if (props.dark) return '#cccccc'
    return '#606060'
  }};
`
export const SiderBarGamesIcon = styled(SiYoutubegaming)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-color: transparent;
  color: ${props => {
    if (props.isActive) return '#ff0000'
    if (props.dark) return '#cccccc'
    return '#606060'
  }};
`
export const SiderBarPlayListIcon = styled(CgPlayListAdd)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-color: transparent;
  color: ${props => {
    if (props.isActive) return '#ff0000'
    if (props.dark) return '#cccccc'
    return '#606060'
  }};
`

export const RouteText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  color: ${props => {
    if (props.isActive) return props.dark ? '#ffffff' : '#000000'
    return props.dark ? '#ebebeb' : '#475569'
  }};
`
export const SidebarContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`
export const SidebarContactImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    justify-content: space-evenly;
  }
`

export const SidebarContactImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  background-color: tranparent;
`
export const SideBarContactUsText = styled.p`
  font-size: 18px;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  align-self: flex-start;
  @media screen and (max-width: 767px) {
    align-self: center;
  }
`
export const SideBarContactUsParaText = styled.p`
  font-size: 15px;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`
export const LinkRoute = styled(Link)`
  text-decoration: none;
  width: 100%;
`
