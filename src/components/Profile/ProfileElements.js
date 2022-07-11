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

export const Availability = styled.div`
    background: var(--green);
    padding: 1rem 2rem;
    border-radius: 8px;
    margin-bottom: 50px;
    color: white;
    font-weight: 500;
`

export const Nav = styled.ul`
`

export const NavItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    background: ${({active}) => (active ? `var(--primaryBG)` : 'transparent')};
    margin-bottom: 8px;
    border-radius: 4px;
    padding: 0 1.5rem;
    color: ${({active}) => (active ? `var(--darkgrey)` : `var(--mediumgrey)`)};
    font-weight: ${({active}) => (active ? `500` : `400`)};
    cursor: pointer;

    :hover {
        background: ${({active}) => (active ? `var(--primaryDark)` : `var(--primaryBG)`)};
        color: ${({active}) => (active ? `var(--white)` : `var(--darkgrey)`)};
        font-weight: ${({active}) => (active ? `500` : `500`)};
    }
`

export const NavIcon = styled.img``



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

export const ProfileImgWrap = styled.div`
    margin-top: 2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--primaryBG);
    
`

export const Name = styled.h2`
    margin-top: 2rem;
    color: var(--darkgrey);
`

export const Profession = styled.p` 
    color: var(--darkgreylight);
    font-size: 1.2rem;
`

export const SocialMediaWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    height: 3rem;
    justify-content: space-around;
    align-items: center;
`

export const IconWrap = styled.div`
    background: var(--primaryBG);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 3rem;
    padding: 0 8px;
    border-radius: 4px;
    margin: 0 0.5rem 1rem;
`

export const DocumentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-top: 1rem;
`

export const DocumentWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`

export const IconWrapOutline = styled.div`
    border: 1px solid var(--primaryBG);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 3rem;
    border-radius: 4px;
`

export const ContactContainer = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ContactWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ContactTitle = styled.p`
    font-weight: 700;
    color: var(--darkgreylight);
`

export const ContactEmail = styled.p`
    color: var(--darkgreylight);
`

export const ContactPhone = styled.p``

export const ContactLocation = styled.p``



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




