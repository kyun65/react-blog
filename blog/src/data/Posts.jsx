import { useState } from "react"
import styles from '../index.module.css'


const postItem = [
  {
    id: 1,
    title: '記事タイトル１',
    thumbnailUrl: 'https://placehold.jp/800x400.png',
    createdAt: '2023-09-11T09:00:00.000Z',
    categories: ['React', 'TypeScript'],
    content: `
    本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
  },
  {
    id: 2,
    title: '記事タイトル２',
    thumbnailUrl: 'https://placehold.jp/800x400.png',
    createdAt: '2023-09-10T09:00:00.000Z',
    categories: ['HTML', 'CSS'],
    content: `
    本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
  },
  {
    id: 3,
    title: '記事タイトル３',
    thumbnailUrl: 'https://placehold.jp/800x400.png',
    createdAt: '2023-09-09T09:00:00.000Z',
    categories: ['JavaScript'],
    content: `
    本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
  },
]

// /src/data/posts.js
export const Posts = () => {





return (

    <div>
      {postItem.map((post)=> {
        return (
          <div className={styles.post_list} key={post.id}>
            <div className={styles.post_item}>
              <div className={styles.post_list_info}>
                <div className={styles.post_list_date} key={post.createdAt}>{post.createdAt.replace(/-/g, '/').slice( 0, 10 )}</div>
                {post.categories.map((categorie)=>{
                  return (
                    <div className={styles.post_list_category}>
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
          </div>
        )
      })}
    </div>


);

}