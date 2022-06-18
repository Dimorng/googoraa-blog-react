import ArticleMeta from "./ArticleMeta"
import ArticleTagList from "./ArticleTagList"
import Reaction from "./Reaction"
import ShareArticle from "./ShareArticle"

export default function BlogContent() {
  return (
    <main className="blog-body__main">
      <article className="article">
        <h1 className="article__title">
          របៀប install Node.js LTS (v16.x) លើ LMDE5
        </h1>
        <ArticleMeta />
        <section className="article__body">
          <p>
            NodeSource មិន​ទាន់​ officially support LMDE 5 (Linux Mint Debian
            Edition version 5 codename "Elsie") នៅ​ឡើយ​ទេ ។
          </p>
          <p>
            សំណាងល្អ NodeSource support Debian 11 "Bullseye" ហើយ LMDE 5 is based
            on Debian 11 ។
          </p>
          <p>
            មាន​ន័យ​ថា យើង​​ក៏​អាច​ add repository ដើម្បី install និង update
            Node.js LTS លើ LMDE 5 បាន​ដែរ ។
          </p>
          <p>
            ខាងក្រោម​នេះ​ ជា​របៀប​ install Node.js LTS (ដែល​ជា version 16.x) លើ
            LMDE 5 តាម official documentation ផ្ដល់ដោយ NodeSource ៖
          </p>
          <h2>1. Uninstall Node.js Version ចាស់​ចោល​សិន</h2>
          <p>
            អ្នក​អាច​រំលង step នេះ​បាន​ បើអ្នក​មិន​​ទាន់បាន install Node.js
            ក្នុង Machine អ្នក​ទេ ។
          </p>
        </section>
        <div className="article__share-container">
          <ShareArticle />
          <div className="article__share-end-line"></div>
        </div>
        <div className="article__tag">
          <ArticleTagList />
        </div>
        <aside className="article__user-reaction">
          <Reaction />
        </aside>
      </article>
    </main>
  )
}
