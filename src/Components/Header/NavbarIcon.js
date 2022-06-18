import React from "react"

export default function NavbarIcon(props) {
  const { icon, iconText, handleIconChange, title } = props
  const specialClassName = icon ? `navbar__icon--${icon.toLowerCase()}` : ""

  return (
    <div
      title={title}
      onClick={handleIconChange}
      className={`navbar__icon ${specialClassName}`.trim()}
    >
      <span className="navbar__icon-text">{iconText}</span>
    </div>
  )
}
