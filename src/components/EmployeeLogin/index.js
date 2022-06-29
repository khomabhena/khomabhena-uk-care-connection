import React from 'react'
import { Container, Email, Form, Input, Logo, Password, SignIn, Submit } from './EmployeeLoginElements'
import { FaLock } from 'react-icons/fa'

const EmployeeLogin = () => {
  return (
    <>
        <Container>
            <Logo>Uk Care Connection</Logo>
            <FaLock />
            <SignIn>Sign In</SignIn>
            <Form>
                <Input type='text' />
                <Input type="password" />
                <Submit>Submit</Submit>
            </Form>
        </Container>
    </>
  )
}

export default EmployeeLogin