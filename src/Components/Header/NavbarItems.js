import React, { useContext } from "react"
import NavbarList from "./NavbarList"
import NavbarLogo from "./NavbarLogo"
import NavbarIcon from "./NavbarIcon"

import { NavbarContext } from "./Header"

export default function NavbarItems() {
  const {
    searchFieldIcon,
    handleSearchIconChange,
    language,
    setLanguage,
    profileName,
    setProfileName,
  } = useContext(NavbarContext)

  function handleLanguageChange() {
    setLanguage(preLan => (preLan === "Khmer" ? "English" : "Khmer"))
  }

  return (
    <>
      <NavbarLogo />
      <NavbarList />
      <NavbarIcon
        icon={searchFieldIcon}
        handleIconChange={handleSearchIconChange}
        title={searchFieldIcon}
      />
      <NavbarIcon
        icon={`${language}-flag`}
        iconText={language === "English" ? "ភាសាខ្មែរ" : "English"}
        handleIconChange={handleLanguageChange}
        title={language === "Khmer" ? "Read in English" : "អាន​ជា​ភាសាខ្មែរ​"}
      />
      <div className="navbar__profile">
        <NavbarIcon
          icon="profile-picture"
          iconText={profileName}
          title={`${profileName} profile`}
        />
      </div>
    </>
  )
}
