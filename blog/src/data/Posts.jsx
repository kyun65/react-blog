import { useState } from "react"

// /src/data/posts.js
export const Posts = () => {
    const [post,setPost] = useState();
    const [list, setList] = useState(["aaa", "bbbb"]);
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
    <>
    <div>
      {postItem.map((post)=> {
        return (
          <div className={post-list} key={post.id}>
            <div className={post-item}>
              <div className={post-list-info}>
                <div className={post-list-date} key={post.createdAt}>{post.createdAt}</div>
                <div className={post-list-category}  dangerouslySetInnerHTML={{ __html: post.categories }} />
              </div>
              <div class="post-list-title">
                <div dangerouslySetInnerHTML={{ __html: post.title }} />
              </div>
              <div class="post-list-content">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </div>
        )
      })}
    </div>

    </>
);

}