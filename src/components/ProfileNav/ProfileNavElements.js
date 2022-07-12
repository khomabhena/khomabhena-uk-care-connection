import styled from "styled-components"



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
