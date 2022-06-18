import React from "react"
import ReactionIcon from "./ReactionIcon"
import likeIcon from "../../static/icons/like.svg"
import dislikeIcon from "../../static/icons/dislike.svg"

export default function Reaction() {
  const reacitonIcons = [
    { reactionIcon: likeIcon, reactionText: "Like" },
    { reactionIcon: dislikeIcon, reactionText: "Dislike" },
  ]

  const reacitonIconElements = reacitonIcons.map(reacitonIconInfo => (
    <ReactionIcon key={reacitonIconInfo.reactionText} {...reacitonIconInfo} />
  ))
  const opinionNumber = 123
  return (
    <div>
      <h2>What do you things?</h2>
      <div className="">
        <span>{opinionNumber}</span>
        <span> {opinionNumber > 1 ? "opinions" : "opinion"}</span>
      </div>
      <div className="reaction">{reacitonIconElements}</div>
    </div>
  )
}
