import styled from "styled-components";

export const Title = styled.h3`
    color: var(--darkgrey);
`

export const SubTitle = styled.h4`
    color: var(--darkgrey);
`

export const MenuText = styled.p`
    color: var(--darkgreylight);
`

export const SubHeading = styled.p``

export const HorizontalLine = styled.div`
    height: 1px;
    width: 100%;
    background: var(--primaryBG);
    margin-bottom: 16px;
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: var(--primaryBG);
`


// Navbar
export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-grow: 2;
    background: var(--whitish);
    width: 20vw;
`


// Letf side
export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 20vw;
    align-items: center;
    border-radius: 8px;
    margin: 10px;
    border: 2px solid var(--primaryBG);
    padding: 0 1rem;
`



// Right Side
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    border: 2px solid var(--primaryBG);
    border-radius: 8px;
    margin: 10px;
`

export const NavWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    color: var(--darkgrey);
`

export const Overview = styled.h3`
    color: var(--darkgrey);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--primary);
    padding: 0 2rem 1rem;
    color: var(--primary);
`

export const Update = styled.h3`
    color: var(--darkgrey);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid transparent;
    padding: 0 2rem 1rem;
`




