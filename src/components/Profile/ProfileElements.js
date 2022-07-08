import styled from "styled-components";

export const Title = styled.h3``

export const MenuText = styled.p``

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
    padding: 10px;
    background: var(--whitish);

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
export const LeftSide = styled.div``

export const ProfileImgWrap = styled.div``

export const Name = styled.h2``

export const Profession = styled.p``

export const SocialMediaWrap = styled.div``

export const IconWrap = styled.div``

export const DocumentsWrap = styled.div``

export const DocumentName = styled.h4``

export const ContactWrap = styled.div``

export const ContactTitle = styled.p``

export const ContactEmail = styled.p``

export const ContactPhone = styled.p``

export const ContactLocation = styled.p``



// Right Side
export const RightSide = styled.div``

export const NavWrap = styled.div``

export const Overview = styled.h3``

export const Update = styled.h3``

export const About = styled.p``


//Also works for experiences
export const EducationContainer = styled.div``

export const EducationWrap = styled.div``

export const LetterWrap = styled.div``

export const Letter = styled.p``

export const EducationDetailsWrap = styled.div``


//Skills also works for spoken languages
export const SkillsWrap = styled.div``

export const Skill = styled.p``



