import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from '../index.module.css'

export const Post = () => {

const { id } = useParams(null); //分割代入
console.log(id)

const [isLoading, setIsLoading] = useState();
const [posts, setPosts] = useState() //useState:コンポーネントにてstateを保持・更新させる

// APIでpostsを取得する処理をuseEffectで実行します。
useEffect(() => {
  const fetcher = async () => {
    try {
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`) //外部のjsonの読み込み
      const data = await res.json() //jsonをjsのオブジェクト形式に変換
      setPosts(data.post) //dataの中からpostsの情報だけを抜き取る
      console.log('情報',data) //一旦dataの中身を確認する
      console.log('res情報',res) //一旦dataの中身を確認する
    } finally {
    setIsLoading(false);
  }
}
  fetcher()
}, []);


if(isLoading) {
  return <p>Loading...</p>;
} else if (!posts) return <div>記事が見つかりませんでした</div>


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