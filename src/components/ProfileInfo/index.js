import React from 'react'
import { ContactContainer, ContactTitle, ContactWrap, DocumentContainer, DocumentWrap, IconWrap, IconWrapOutline, Name, Profession, ProfileImgWrap, SocialMediaWrap } from './ProfileInfoElements'
import { BsFillPersonFill, BsDownload } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'
import { HorizontalLine, MenuText, SubTitle, Title } from '../Profile/ProfileElements'
import { HiDocumentText } from 'react-icons/hi'

const ProfileInfo = () => {
  return (
    <>
        <ProfileImgWrap>
          <BsFillPersonFill />
        </ProfileImgWrap>
        <Name>Jansh Dickens</Name>
        <Profession>Nurse Aid</Profession>
        <SocialMediaWrap>
          <IconWrap><FaFacebook /></IconWrap>
          <IconWrap><FiTwitter /></IconWrap>
          <IconWrap><FaWhatsapp /></IconWrap>
          <IconWrap><FiPhoneCall /></IconWrap>
        </SocialMediaWrap>

        <HorizontalLine />

        <DocumentContainer>
          <Title>Resume</Title>
          <DocumentWrap>
            <IconWrapOutline>
              <HiDocumentText />
            </IconWrapOutline>
            <SubTitle>Resume.pdf</SubTitle>
            <IconWrapOutline>
              <BsDownload />
            </IconWrapOutline>
          </DocumentWrap>
        </DocumentContainer>

        <HorizontalLine />

        <ContactContainer>
          <Title>Contacts</Title>
          <ContactWrap>
            <ContactTitle>Email</ContactTitle>
            <MenuText>jansh@gmail.com</MenuText>
          </ContactWrap>
          <ContactWrap>
            <ContactTitle>Phone Number</ContactTitle>
            <MenuText>+44 345 678 0023</MenuText>
          </ContactWrap>
          <ContactWrap>
            <ContactTitle>Location</ContactTitle>
            <MenuText>New Caledonia</MenuText>
          </ContactWrap>
        </ContactContainer>
    </>
  )
}

export default ProfileInfo