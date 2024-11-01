import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import styles from "../index.module.css"

export const Post = () => {

  const { id } = useParams(null);

  console.log(id);

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState() //useState:コンポーネントにてstateを保持・更新させる



  useEffect (() => {
    const fetcher = async () => {
      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`) //外部のjsonの読み込み
        const data = await res.json()//jsonをjsオブジェクトに変換
        setPosts(data.post)//dataの中からpostsの情報だけ抜き取る
        console.log('dataの情報だよ',data)//dataの中身を確認
        console.log('dresの情報だよ',res)//dataの中身を確認
      } finally {
        setIsLoading(false);
      }
    }
    fetcher()
  }, []);

  if (isLoading) {
return <p>Loading...</p>
  } else if(!posts) return <p>記事がないです</p>

return (
<div className={styles.detail_container}>
    <div className={styles.detail_title}>{posts.title}</div>
    <img src={posts.thumbnailUrl} alt={posts.title} />

    <div className={styles.detail_info}>
    {/* <span className={styles.detail_date}>{posts.createdAt.replace(/-/g, '/').slice( 0, 10 )}</span> */}
    <div className={styles.detail_cat_wrap}>

      {posts.categories.map((categorie)=>{
        return (<div key={categorie}>{categorie}</div>);
      })}

    </div>
    </div>
    <p dangerouslySetInnerHTML={{__html: posts.content}} />
    {/* <p className={styles.detail_content} dangerouslySetInnerHTML={{ __html: posts.content }} /> */}
    </div>
);



}