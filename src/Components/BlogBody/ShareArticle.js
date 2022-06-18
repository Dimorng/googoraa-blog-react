import React from "react"
import SocialMediaLinkIcon from "./SocialMediaLinkIcon"

export default function ShareArticle() {
  const linkIcons = [
    {
      icon: "Twiiter",
      linkText: "Tweet",
    },
    {
      icon: "Facebook",
      linkText: "Post",
    },
    {
      icon: "Telegram",
      linkText: "Share",
    },
  ]
  const linkIconElements = linkIcons.map(linkIconInfo => (
    <SocialMediaLinkIcon key={linkIconInfo.icon} {...linkIconInfo} />
  ))
  return <div className="article__share">{linkIconElements}</div>
}
