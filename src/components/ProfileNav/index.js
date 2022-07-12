import React from 'react'
import { HorizontalLine, MenuText, SubHeading } from '../Profile/ProfileElements'
import { Availability, Nav, NavItem } from './ProfileNavElements'

const ProfileNav = () => {
  return (
    <>
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
    </>
  )
}

export default ProfileNav