import { useState } from "react"
import styles from '../index.module.css'

// /src/data/posts.js
export const Posts = () => {
    const [post,setPost] = useState();
    const [postItem,setPostItem] = useState([
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
])

return (

    <div>
      {postItem.map((post)=> {
        return (
          <div className={styles.post_list} key={post.id}>
            <div className={styles.post_item}>
              <div className={styles.post_list_info}>
                <div className={styles.post_list_date} key={post.createdAt}>{post.createdAt.replace(/-/g, '/').slice( 0, 10 )}</div>
                <div className={styles.post_list_category}  dangerouslySetInnerHTML={{ __html: post.categories }} />
              </div>
              <div className={styles.post_list_title}>
                <div dangerouslySetInnerHTML={{ __html: post.title }} />
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