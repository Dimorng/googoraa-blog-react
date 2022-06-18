import React from "react"
import ArticleTag from "./ArticleTag"

export default function ArticleTagList() {
  const tags = ["JavaScript", "NodeJS", "Beginner", "ចាវ៉ាស្គ្រ៊ីប"]

  const tagElements = tags.map(tag => <ArticleTag key={tag} tagText={tag} />)
  return <div className="article__tag-container">{tagElements}</div>
}
