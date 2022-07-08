import styled from "styled-components";

export const LoginContainer = styled.div`
    background: var(--primaryBG);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginWrap = styled.div`
    background: var(--white);
    height: 80vh;
    width: 70vw;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border-radius: 8px;
    /* box-shadow: 0 1px 1px var(--whitish); */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: space-around;
`

export const Logo = styled.img`
    width: 40%;
    border-radius: 10%;
    height: auto;
`

export const Svg = styled.img`
    width: 60%;
    height: auto;
`


// Right side of login page
export const RightSide = styled.div`
    background: linear-gradient(180deg, var(--primaryDark), var(--primaryDarkDark));
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
`

export const TextWelcome = styled.p`
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
`

export const TextSignin = styled.p`
    font-size: 1.1rem;
    margin-top: 0.5rem;
    padding-bottom: 2rem;
    color: var(--whitish);
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    position: relative;
`

export const Label = styled.label`
    font-size: 0.9rem;
    margin-top: 1rem;
    color: white;
`

export const Input = styled.input`
    border-radius: 4px;
    border: none;
    height: 40px;
    margin-top: 0.2rem;
    padding: 0.6rem 0.6rem;
    background: var(--transparent);
    color: white;

    ::placeholder {
        color: var(--whitish);
    }

    :focus {
        outline: none;
    }

`

export const ForgotPasswordDiv = styled.p`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`
export const ForgotPassword = styled.p`
    color: var(--whitish);
    padding-left: 2rem;
    cursor: pointer;
`

export const LoginButton = styled.button`
    font-size: 1rem;
    margin-top: 3rem;
    height: 40px;
    border-radius: 4px;
    border: none;
    background: var(--white);
    cursor: pointer;
`

export const SignupButton = styled.button`
    font-size: 1rem;
    height: 40px;
    margin-top: 1rem;
    background: transparent;
    border: none;
    color: var(--whitish);
    cursor: pointer;
`