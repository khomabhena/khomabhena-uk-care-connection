import React from 'react'
import { Availability, DocumentsWrap, HorizontalLine, IconWrap, LeftSide, MenuText, Name, Nav, NavContainer, NavItem, Profession, ProfileContainer, ProfileImg, ProfileImgWrap, SocialMediaWrap, SubHeading, Title } from './ProfileElements'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io'

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
          <IconWrap><IoCallOutline /></IconWrap>
        </SocialMediaWrap>

        <HorizontalLine />

        <DocumentsWrap>
          <Title>Your Resume</Title>
        </DocumentsWrap>

      </LeftSide>

    </ProfileContainer>
  )
}

export default Profile