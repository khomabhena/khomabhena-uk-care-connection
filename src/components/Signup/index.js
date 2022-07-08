import React from 'react'
import { ForgotPassword, ForgotPasswordDiv, Input, Label, LeftSide, LoginButton, LoginContainer, 
    LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './SignupElements'
import logo from '../../images/logo-transparent.png'
import svg from '../../images/svg-signup.svg'

const Signup = () => {
  return (
    <LoginContainer>
        <LoginWrap>
            
            <LeftSide>
                <Logo src={logo} />
                <Svg src={svg} />
            </LeftSide>

            <RightSide>
                <TextWelcome>Let's Get Started</TextWelcome>
                <TextSignin>Sign Up and get access to all the features.</TextSignin>

                <LoginForm>
                    <Label>Firstname</Label>
                    <Input placeholder='Enter your Firstname' />
                    <Label>Lastname</Label>
                    <Input placeholder='Enter your Lastname' />
                    <Label>Country of Residence</Label>
                    <Input placeholder='Enter your country of residence' />
                    <Label>Country of Citizenship</Label>
                    <Input placeholder='Enter your country of citizenship' />
                    <Label>Phone Number</Label>
                    <Input placeholder='Enter your phone number' />
                    <Label>Email Address</Label>
                    <Input placeholder='Enter your email address' />
                    <Label>Password</Label>
                    <Input placeholder='Enter your password' />
                    <Label>Confirm Password</Label>
                    <Input placeholder='Confirm your password' />
                    
                    <LoginButton>Sign Up</LoginButton>
                    <SignupButton>Already a member? Sign In</SignupButton>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default Signup