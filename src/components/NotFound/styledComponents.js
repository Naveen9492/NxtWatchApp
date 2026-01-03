import styled from 'styled-components'

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
export const NotFoundImage = styled.img`
  width: 35%;
  height: 45%;
  margin-top: 25px;
  @media screen and (max-width: 767px) {
    width: 60%;
    height: 40%;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  text-align: center;
`
export const NotFoundPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.dark ? '#ebebeb' : '#475569')};
  text-align: center;
`
