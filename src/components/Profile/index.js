import React from 'react'
import { Availability, ContactContainer, ContactTitle, ContactWrap, DocumentContainer, DocumentWrap, EducationContainer, EducationDetailsWrap, EducationWrap, HorizontalLine, IconWrap, IconWrapOutline, Language, LanguageWrap, LeftSide, Letter, LetterWrap, MenuText, Name, Nav, NavContainer, NavItem, NavWrap, Overview, OverviewWrap, Profession, ProfileContainer, ProfileImg, ProfileImgWrap, RightSide, Skill, SkillsContainer, SkillsWrap, SocialMediaWrap, SubHeading, SubTitle, Title, Update } from './ProfileElements'
import { BsFillPersonFill, BsDownload } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'


const Profile = () => {
  const about = "Developer with over 5 years' experience working in both the public and private sectors. Diplomatic, personable, and adept at managing sensitive situations. Highly organized, self-motivated, and proficient with computers. Looking to boost students’ satisfactions scores for International University. Bachelor's degree in communications" +

  "It describes the candidate's relevant experience, skills, and achievements. The purpose of this career summary is to explain your qualifications for the job in 3-5 sentences and convince the manager to read the whole resume document.";

  const desc = "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.";

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
        <OverviewWrap>
          <Title>About</Title>
          <MenuText>{about}</MenuText>

          
          <EducationContainer>
          <Title>Education</Title>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>B</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>BCA - Bachelor of Nursing</SubTitle>
                <MenuText>International University - (2000 - 2004)</MenuText>
                <MenuText>{desc}</MenuText>
              </EducationDetailsWrap>
            </EducationWrap>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>M</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>MCA - Master of Computer Application</SubTitle>
                <MenuText>International University - (2010 - 2012)</MenuText>
                <MenuText>{desc}</MenuText>
              </EducationDetailsWrap>
            </EducationWrap>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>D</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>Design Communication Visual</SubTitle>
                <MenuText>International University - (2012 - 2015)</MenuText>
                <MenuText>{desc}</MenuText>
              </EducationDetailsWrap>
            </EducationWrap>
          </EducationContainer>

          <Title>Experiences</Title>
          <EducationContainer>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>W</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>Web Design &amp; Development Team</SubTitle>
                <MenuText>Creative Agency - (2013 -2016)</MenuText>
                <MenuText>{desc}</MenuText>
              </EducationDetailsWrap>
            </EducationWrap>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>P</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>Project Manager</SubTitle>
                <MenuText>EU Care Home (2016 - Present)</MenuText>
                <MenuText>{desc}</MenuText>
              </EducationDetailsWrap>
            </EducationWrap>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>D</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>Design Communication Visual</SubTitle>
                <MenuText>International University - (2012 - 2015)</MenuText>
                <MenuText>{desc}</MenuText>
              </EducationDetailsWrap>
            </EducationWrap>
          </EducationContainer>

          <Title>Skills</Title>
          <SkillsContainer>
            <SkillsWrap>
              <Skill>Cloud Management</Skill>
            </SkillsWrap>
            <SkillsWrap>
              <Skill>Responsive Design</Skill>
            </SkillsWrap>
            <SkillsWrap>
              <Skill>Home Care</Skill>
            </SkillsWrap>
          </SkillsContainer>

          <Title>Spoken Languages</Title>
          <SkillsContainer>
            <SkillsWrap>
              <Language>English</Language>
            </SkillsWrap>
            <SkillsWrap>
              <Language>German</Language>
            </SkillsWrap>
            <SkillsWrap>
              <Language>French</Language>
            </SkillsWrap>
          </SkillsContainer>
        </OverviewWrap>

      </RightSide>

    </ProfileContainer>
  )
}

export default Profile