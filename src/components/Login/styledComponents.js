import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#212121' : '#f8fafc')};
`
export const LoginFormContainer = styled.form`
  width: 80%;
  height: 60%;
  padding: 30px 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  @media screen and (min-width: 768px) {
    width: 45%;
    height: 60%;
  }
  @media screen and (min-width: 992px) {
    width: 25%;
    height: 60%;
  }
`
export const LoginFormLogoImage = styled.img`
  width: 200px;
  height: 50px;
  margin-bottom: 40px;
`
export const FormLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.dark ? '#ffffff' : '#424242')};
  align-self: flex-start;
  margin-bottom: 5px;
`
export const LoginInputField = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid ${props => (props.dark ? '#cccccc' : '#909090')};
  background-color: transparent;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 15px;
  padding-left: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
`
export const ShowPasswordConatiner = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`
export const ShowPasswordLabel = styled.label`
  font-size: 14px;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
`
export const LoginButton = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #3b82f6;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`
export const ErrorMessage = styled.p`
  font-size: 12px;
  align-self: flex-start;
  margin: 0px;
  color: ${props => (props.dark ? '#ff0000' : '#ff0b37')};
`
