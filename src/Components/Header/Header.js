import React, { useState } from "react"
import NavbarItems from "./NavbarItems"
import NavbarSearchForm from "./NavbarSearchForm"

export const NavbarContext = React.createContext()

export default function Header() {
  const [searchFieldIcon, setSearchFieldIcon] = useState("search")
  const [language, setLanguage] = useState("Khmer")
  const [profileName, setProfileName] = useState("dimorng")

  const [navbarAdditionalClassName, navbarChild] = handleNavbarChange()

  const contextValue = {
    searchFieldIcon,
    handleSearchIconChange,
    language,
    setLanguage,
    profileName,
    setProfileName,
  }

  function handleNavbarChange() {
    return searchFieldIcon === "search"
      ? ["", <NavbarItems />]
      : ["navbar--search", <NavbarSearchForm />]
  }

  function handleSearchIconChange() {
    setSearchFieldIcon(prevIcon =>
      prevIcon === "search" ? "exit-search" : "search"
    )
  }

  return (
    <NavbarContext.Provider value={contextValue}>
      <header className="header">
        <nav className={`navbar ${navbarAdditionalClassName}`.trim()}>
          {navbarChild}
        </nav>
      </header>
    </NavbarContext.Provider>
  )
}
