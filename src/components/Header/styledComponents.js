import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 15vh;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
`
export const NavbarLogoImage = styled.img`
  height: 20px;
  width: 80px;
  @media screen and (min-width: 576px) {
    height: 30px;
    width: 100px;
  }
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 120px;
  }
`
export const NavBarMenuMobileContainer = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const NavBarMenuLargeContainer = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavbarMenuButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`

export const NavbarThemeMoonIcon = styled(FaMoon)`
  width: 100%;
  height: 100%;
  backgrounf-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const NavbarThemeLightIcon = styled(FiSun)`
  width: 100%;
  height: 100%;
  backgrounf-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const NavbarHamburgerIcon = styled(GiHamburgerMenu)`
  width: 100%;
  height: 100%;
  backgrounf-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const NavbarLogoutIcon = styled(FiLogOut)`
  width: 100%;
  height: 100%;
  backgrounf-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const NavbarCloseIcon = styled(IoMdClose)`
  width: 100%;
  height: 100%;
  backgrounf-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
`
export const LogoutButton = styled.button`
  width: 80px;
  height: 32px;
  margin-left: 20px;
  border: 1px solid ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
`

// LogoutPopup styled components

export const LogoutPopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: 90%; /* fits on small screens */
  padding: 25px;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
`

export const LogoutPopupText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  margin-bottom: 25px;
`

export const LogoutButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CancelButton = styled.button`
  width: 100px;
  height: 35px;
  border: 1px solid #64748b;
  background-color: transparent;
  color: #64748b;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto';
`

export const ConfirmButton = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto';
`
