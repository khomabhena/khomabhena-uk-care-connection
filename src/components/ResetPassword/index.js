import React from 'react'
import { Input, Label, LeftSide, LoginButton, LoginContainer, 
    LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './ResetPasswordElements'
import logo from '../../images/logo-transparent.png'
import svg from '../../images/svg-forgot-password.svg'

const ResetPassword = () => {
  return (
    <LoginContainer>
        <LoginWrap>
            
            <LeftSide>
                <Logo src={logo} />
                <Svg src={svg} />
            </LeftSide>

            <RightSide>
                <TextWelcome>Reset Password</TextWelcome>
                <TextSignin>You will be sent an email with reset instructions!</TextSignin>

                <LoginForm>
                    <Label>Email</Label>
                    <Input placeholder='Enter your email address' />
                    <LoginButton>Send Request</LoginButton>
                    <SignupButton>Remembered It? Go to Login</SignupButton>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default ResetPassword