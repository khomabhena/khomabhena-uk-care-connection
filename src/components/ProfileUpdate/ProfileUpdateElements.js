import styled from "styled-components";

export const ProfileUpdateContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
`

export const Title = styled.h3`
    color: var(--darkgrey);
    margin-top: 3rem;
`

export const SubTitle = styled.h4``

export const ImageWrap = styled.div`
    margin-top: 2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--darkgreylight);
    align-self: center;
`

export const Image = styled.img`

`

export const ImageIcon = styled.img``

export const UpdateForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const Inputwrap = styled.div`
    display: flex;
    flex-direction: column;
    flex: 50%;
`

export const InputLabel = styled.label`
    margin-top: 2rem;
`

export const Input = styled.input`
    padding: 1rem 2rem;
    margin-top: 0.5rem;
    border-radius: 4px;
    border: 1px solid var(--darkgreylight);
    margin-right: 1rem;
`

export const TextArea = styled.textarea`
    padding: 1rem 2rem;
    border-radius: 4px;
    border: 1px solid var(--darkgreylight);
`

export const FileChooser = styled.input`
    border: 1px solid var(--darkgreylight);
    border-radius: 4px;
    padding: 1rem 1rem;

    :first-line {
        font-size: 1rem;
    }

`

export const ButtonWrap = styled.div`
    align-self: flex-end;
    margin: 2rem 1rem;
`

export const UpdateButton = styled.button`
    padding: 0.9rem 3rem;
    border-radius: 4px;
    border: none;
    background: var(--primaryDark);
    color: var(--white);
    font-weight: bold;
` 