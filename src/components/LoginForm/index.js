import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginMainBgContainer,
  LoginBgContainer,
  LoginFormBg,
  LoginImage,
  Label,
  Input,
  InputContainer,
  LoginButton,
  CheckboxContainer,
  Checkbox,
  ErrorMessage,
} from './StyledComponents'

const DarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const LightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    ShowErrorMsg: false,
    errorMsg: '',
    isChecked: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
    console.log(jwtToken)
  }

  onSubmitFailure = errorMsg => {
    this.setState({ShowErrorMsg: true, errorMsg})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  render() {
    const {isDark} = this.props
    const {ShowErrorMsg, errorMsg, isChecked} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginMainBgContainer>
        <LoginBgContainer>
          <LoginFormBg>
            <LoginImage
              src={isDark ? DarkImage : LightImage}
              alt="website logo"
            />
            <InputContainer>
              <Label htmlFor="username">USERNAME</Label>
              <Input
                id="username"
                placeholder="Username"
                type="name"
                autoComplete="off"
                onChange={this.onChangeUserName}
              />
              <Label htmlFor="Password">PASSWORD</Label>
              <Input
                id="Password"
                placeholder="Password"
                type={isChecked ? 'text' : 'password'}
                autoComplete="off"
                onChange={this.onChangePassword}
              />
              <CheckboxContainer>
                <Checkbox
                  type="Checkbox"
                  id="CheckBox"
                  onClick={this.onChecked}
                />
                <Label htmlFor="CheckBox">Show Password</Label>
              </CheckboxContainer>
              <LoginButton type="submit" onClick={this.onSubmit}>
                Login
              </LoginButton>
              {ShowErrorMsg ? <ErrorMessage>*{errorMsg}</ErrorMessage> : null}
            </InputContainer>
          </LoginFormBg>
        </LoginBgContainer>
      </LoginMainBgContainer>
    )
  }
}

export default LoginForm
