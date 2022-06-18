import React from "react"

export default function ReactionIcon(props) {
  const { reactionIcon, reactionText } = props
  return (
    <div className="reaction-icon-container">
      <img className="reaciton-icon" src={reactionIcon}></img>
      <span className="rection-text">{reactionText}</span>
    </div>
  )
}
