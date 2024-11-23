// import { useState } from "react"
import styles from '../index.module.css'
import { Link } from "react-router-dom";


import { postItems } from "../data/PostData.js"


// /src/data/posts.js
export const Posts = () => {





return (

    <div>
      {postItems.map((post)=> {
        return (
          <div className={styles.post_list} key={post.id}>
            <Link to={`/${post.id}`}>
            <div className={styles.post_item}>
              <div className={styles.post_list_info}>
                <div className={styles.post_list_date} key={post.createdAt}>{post.createdAt.replace(/-/g, '/').slice( 0, 10 )}</div>
                {post.categories.map((categorie)=>{
                  return (
                    <div className={styles.post_list_category} key={post.cate}>
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
            </div>
            </Link>
          </div>
        )
      })}
    </div>


);

}