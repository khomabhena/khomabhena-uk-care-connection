import styled from "styled-components";

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