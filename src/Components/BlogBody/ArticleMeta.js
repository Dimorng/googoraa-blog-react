import authorAvatar from "../../static/icons/user-profile-avatar.png"
import React from "react"

export default function ArticleMeta() {
  return (
    <div className="article-meta">
      <div className="article-meta__author-info">
        <div className="article-meta__author-avatar-frame">
          <div className="article-meta__author-avatar-container">
            <span className="article-meta__author-avatar-text">
              Dimorng Meung Avatar Picture
            </span>
            <img className="article-meta__author-avatar" src={authorAvatar} />
          </div>
        </div>
        <span className="article-meta__author-name">ម៉ឹង ឌីម៉ង់</span>
      </div>
      <div className="article-meta__publication-info">
        <div className="article-meta__icon-date-of-publication">
          <span className="icon-text">Date of Publication</span>
        </div>
        <div className="article-meta__publication-info-grid">
          <span>ដើម ៖</span>
          <span>៦ មេសា ២០២២</span>
          <span>កែសម្រួល ៖</span>
          <span>៨ មិថុនា ២០២២</span>
        </div>
      </div>
    </div>
  )
}
