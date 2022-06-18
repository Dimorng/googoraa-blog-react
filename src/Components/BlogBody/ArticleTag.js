import React from "react"

export default function ArticleTag({ tagText }) {
  return (
    <a className="link article__tag-link" href="#">
      <span className="article__tag-text">{tagText}</span>
    </a>
  )
}
