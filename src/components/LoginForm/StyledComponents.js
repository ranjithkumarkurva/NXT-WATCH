import styled from 'styled-components'

export const LoginMainBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 80vh;
  background-color: #ffffff;
  margin: 10vh;
  @media (max-width: 767px) {
    width: 50vh;
    height: 70vh;
  }
`

export const LoginFormBg = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 0px lightgray;
  width: 33vh;
  background-color: white;
`

export const LoginImage = styled.img`
  width: 35%;
  height: 10%;
  margin: 20px;
`
export const InputContainer = styled.div`
  align-self: flex-start;
  margin: 30px;
`

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  color: #313131;
  @media (max-width: 767px) {
    font-size: 8px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 3.5vh;
  border: 1px solid lightgray;
  font-size: 15px;
  border-radius: 3px;
  outline: none;
  cursor: text;
  margin-bottom: 15px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Checkbox = styled.input`
  width: 17px;
  height: 17px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
`

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`

export const ErrorMessage = styled.p`
  font-size: 15px;
  color: red;
  margin-top: 0px;
`
export default styled
