import React from 'react'
import { ButtonWrap, FileChooser, ImageIcon, ImageWrap, Input, InputContainer, InputLabel, Inputwrap, ProfileUpdateContainer, TextArea, Title, UpdateButton, UpdateForm } from './ProfileUpdateElements'
import { BsFillPersonFill } from 'react-icons/bs'

function ProfileUpdate() {
  return (
    <ProfileUpdateContainer>
        <Title>My Account</Title>
        <ImageWrap>
            <BsFillPersonFill />
            <ImageIcon />
        </ImageWrap>

        <UpdateForm>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>First Name</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Last Name</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Job Type</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Email</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            
            <Title>Profile</Title>
            <InputLabel>Introduce Yourself</InputLabel>
            <TextArea />

            <InputContainer>
                <Inputwrap>
                    <InputLabel>Languages</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Location</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            <InputLabel>Attachements CV</InputLabel>
            <FileChooser type='file' />

            <Title>Social Media</Title>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Facebook</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Twitter</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Linkedin</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>WhatsApp</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>

            <Title>Change Password</Title>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Current Password</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>New Password</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Confirm Password</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
        </UpdateForm>

        <ButtonWrap>
            <UpdateButton>Update</UpdateButton>
        </ButtonWrap>
        
    </ProfileUpdateContainer>
  )
}

export default ProfileUpdate