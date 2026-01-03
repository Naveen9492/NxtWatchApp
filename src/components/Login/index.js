import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginMainContainer,
  LoginFormContainer,
  LoginFormLogoImage,
  FormLabel,
  LoginInputField,
  ShowPasswordConatiner,
  CheckBox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    showError: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value, showError: false})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value, showError: false})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    if (response.ok) {
      const data = await response.json()
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const data = await response.json()
      this.setState({showError: true, errorMessage: data.error_msg})
    }
  }

  getPasswordFiledType = () => {
    const {showPassword} = this.state
    return showPassword ? 'text' : 'password'
  }

  onCheckShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  getLogoImageUrl = isDark =>
    isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showError, errorMessage, usernameInput, passwordInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginMainContainer dark={isDark}>
              <LoginFormContainer dark={isDark} onSubmit={this.onClickLogin}>
                <LoginFormLogoImage
                  src={this.getLogoImageUrl(isDark)}
                  alt="website logo"
                />
                <FormLabel htmlFor="username" dark={isDark}>
                  USERNAME
                </FormLabel>
                <LoginInputField
                  type="text"
                  id="username"
                  placeholder="Username"
                  dark={isDark}
                  onChange={this.onChangeUsername}
                  value={usernameInput}
                />
                <FormLabel htmlFor="password" dark={isDark}>
                  PASSWORD
                </FormLabel>
                <LoginInputField
                  type={this.getPasswordFiledType()}
                  id="password"
                  placeholder="Password"
                  dark={isDark}
                  onChange={this.onChangePassword}
                  value={passwordInput}
                />
                <ShowPasswordConatiner>
                  <CheckBox
                    type="checkbox"
                    id="showPassword"
                    onChange={this.onCheckShowPassword}
                  />
                  <ShowPasswordLabel htmlFor="showPassword" dark={isDark}>
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordConatiner>
                <LoginButton type="submit">Login</LoginButton>
                {showError && (
                  <ErrorMessage dark={isDark}>*{errorMessage}</ErrorMessage>
                )}
              </LoginFormContainer>
            </LoginMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Login
