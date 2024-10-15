import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from '../index.module.css'

export const Post = () => {

  const { id } = useParams(); //分割代入
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`); //jsonを読み込む
        const data = await res.json() //jsonをオブジェクトに変換
        setPosts(data.post); //dataの中のpostを取得
        console.log('出力',data);
        console.log(res)
      } finally {
        setIsLoading(false);
      }
    }

    fetcher()
  }, [id])

  if (!posts) return <div>記事が見つかりませんでした</div>


  return (
    <div className={styles.detail_container}>
      <div className={styles.detail_title}>{posts.title}</div>
      <img src={posts.thumbnailUrl} alt="" />
      <div className={styles.detail_info}>
        <span className={styles.detail_date}>{posts.createdAt.replace(/-/g, '/').slice( 0, 10 )}</span>
        <div className={styles.detail_cat_wrap}>
          {posts.categories.map((categorie)=>{
            return(
              <div className={styles.detail_cat} key={categorie}>{categorie}</div>
            )
          })}
        </div>
      </div>
      <p className={styles.detail_content} dangerouslySetInnerHTML={{ __html: posts.content }} />
    </div>
  )

}