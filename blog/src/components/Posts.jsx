import { useState, useEffect } from "react"
import styles from '../index.module.css'
// import { postItems } from "../data/Post-data";
import { Link } from "react-router-dom";


// /src/data/posts.js
export const Posts = () => {



  const [posts, setPosts] = useState([])

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json()
      setPosts(data.posts)
      console.log(data)
    }

    fetcher()
  }, [])





return (

    <div>
      {posts.map((post)=> {
        return (
          <div className={styles.post_list} key={post.id}>
            <div className={styles.post_item}>
              <Link to={`/${post.id}`}>
              <div className={styles.post_list_info}>
                <div className={styles.post_list_date} key={post.createdAt}>{post.createdAt.replace(/-/g, '/').slice( 0, 10 )}</div>
                {post.categories.map((categorie)=>{
                  return (
                    <div className={styles.post_list_category} key={post.category}>
                      {categorie}
                    </div>
                  );
                })}
              </div>
              <div className={styles.post_list_title}>
                <div>{post.title}</div>
              </div>
              <div className={styles.post_list_content}>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              </Link>
            </div>
          </div>
        )
      })}
    </div>


);

}