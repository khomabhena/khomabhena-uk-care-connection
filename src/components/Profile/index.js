import React from 'react'
import { Availability, ContactContainer, ContactTitle, ContactWrap, DocumentContainer, DocumentWrap, HorizontalLine, IconWrap, IconWrapOutline, LeftSide, MenuText, Name, Nav, NavContainer, NavItem, NavWrap, Overview, Profession, ProfileContainer, ProfileImgWrap, RightSide, SocialMediaWrap, SubHeading, SubTitle, Title, Update } from './ProfileElements'
import { BsFillPersonFill, BsDownload } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'
import ProfileOverview from '../ProfileOverview'


const Profile = () => {

  return (
    <ProfileContainer>
      <NavContainer>
        <Availability>
          <SubHeading>Available for jobs</SubHeading>
        </Availability>
        <HorizontalLine />
        <Nav>
          <NavItem active='true'>
            <MenuText>Profile</MenuText>
          </NavItem>
          <NavItem>
            <MenuText>Qualifications</MenuText>
          </NavItem>
          <NavItem>
            <MenuText>Experience</MenuText>
          </NavItem>
          <NavItem>
            <MenuText>Suggested Jobs</MenuText>
          </NavItem>
          <NavItem>
            <MenuText>Trainings</MenuText>
          </NavItem>
        </Nav>
      </NavContainer>

      <LeftSide>
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

      </LeftSide>

      <RightSide>
        <NavWrap>
          <Overview>Overview</Overview>
          <Update>Update</Update>
        </NavWrap>
        <HorizontalLine />
        
        <ProfileOverview />
        

        

      </RightSide>

    </ProfileContainer>
  )
}

export default Profile