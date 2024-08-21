import React from 'react'
import Header2 from '../Components/Header/Header2'
import ProfilePage from '../Components/Profile/ProfilePage'
import Footer from '../Components/Footer/Footer'
import MyProfileImage from '../Components/Profile/MyProfileImage'

/**
 * Handles my profile page
 */
export default function Profile() {

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Header2></Header2>
      <MyProfileImage ></MyProfileImage>
      <ProfilePage ></ProfilePage>
      <Footer></Footer>
    </div>
  )
}
