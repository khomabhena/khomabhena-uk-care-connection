import React from 'react'
import {LeftSide, LoginButton, LoginContainer, LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './LogoutElements'
import logo from '../../images/logo-transparent.png'
import svg from '../../images/svg-signin.svg'

const Logout = () => {
  return (
    <LoginContainer>
        <LoginWrap>
            
            <LeftSide>
                <Logo src={logo} />
                <Svg src={svg} />
            </LeftSide>

            <RightSide>
                <TextWelcome>You are Logged Out</TextWelcome>
                <TextSignin>Thank you for using UK Care Connection.</TextSignin>

                <LoginForm>
                    <LoginButton>Sign In</LoginButton>
                    <SignupButton>Don't have an account? Sign Up</SignupButton>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default Logout