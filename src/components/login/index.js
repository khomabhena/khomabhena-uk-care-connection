import React from 'react'
import { ForgotPassword, ForgotPasswordDiv, Input, Label, LeftSide, LoginButton, LoginContainer, LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './LoginElements'
import logo from '../../images/logo-transparent.png'
import svg from '../../images/svg-signin.svg'

const Login = () => {
  return (
    <LoginContainer>
        <LoginWrap>
            
            <LeftSide>
                <Logo src={logo} />
                <Svg src={svg} />
            </LeftSide>

            <RightSide>
                <TextWelcome>Welcome Back!</TextWelcome>
                <TextSignin>Sign in to continue to uk care connection.</TextSignin>

                <LoginForm>
                    <Label>Email</Label>
                    <Input placeholder='Enter your email address' />
                    <Label>Password</Label>
                    <Input placeholder='Enter your password' />
                    <ForgotPasswordDiv>
                        <ForgotPassword>Forgot Password?</ForgotPassword>
                    </ForgotPasswordDiv>
                    <LoginButton>Sign In</LoginButton>
                    <SignupButton>Don't have an account? Sign Up</SignupButton>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default Login