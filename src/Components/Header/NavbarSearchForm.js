import React, { useContext } from "react"
import NavbarIcon from "./NavbarIcon"

import { NavbarContext } from "./Header"

export default function NavbarSearchForm() {
  const { searchFieldIcon, handleSearchIconChange, language } =
    useContext(NavbarContext)
  return (
    <>
      <form className="navbar__search-form">
        <label className="navbar__search-input-label" htmlFor="search-contain">
          Search Site Content
        </label>
        <input
          placeholder={
            language === "Khmer"
              ? "វាយ​ពាក្យ​ ដែល​អ្នក​ចង់​ស្វែង​រក"
              : "Your search term"
          }
          className="input navbar__search-input"
          type="text"
          name="search-contain"
          id="search-contain"
        />
        <button className="btn navbar__search-submit-btn" type="submit">
          search
        </button>
      </form>
      <NavbarIcon
        icon={searchFieldIcon}
        handleIconChange={handleSearchIconChange}
        title={searchFieldIcon}
      />
    </>
  )
}
