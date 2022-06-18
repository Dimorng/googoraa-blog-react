import React from "react"

export default function SocialMediaLinkIcon(props) {
  const { icon, linkText } = props
  return (
    <a href="" className="link social-media-icon-link">
      <span
        className={`social-media-icon ${
          icon && `social-media-icon--${icon.toLowerCase()}`.trim()
        }`}
      ></span>
      <span className="social-media-icon-link__text">{linkText}</span>
    </a>
  )
}
