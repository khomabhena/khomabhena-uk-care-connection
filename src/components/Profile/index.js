import React from 'react'
import { 
  HorizontalLine, LeftSide, NavContainer, 
  NavWrap, Overview, ProfileContainer, RightSide, Update } from './ProfileElements'
import ProfileUpdate from '../ProfileUpdate'
import ProfileNav from '../ProfileNav'
import ProfileInfo from '../ProfileInfo'


const Profile = () => {

  return (
    <ProfileContainer>
      <NavContainer>
        <ProfileNav />
      </NavContainer>

      <LeftSide>
        <ProfileInfo />
      </LeftSide>

      <RightSide>
        <NavWrap>
          <Overview>Overview</Overview>
          <Update>Update</Update>
        </NavWrap>
        <HorizontalLine />
        
        {/* <ProfileOverview /> */}
        <ProfileUpdate />

      </RightSide>

    </ProfileContainer>
  )
}

export default Profile