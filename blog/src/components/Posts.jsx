import { useState,useEffect } from "react" //コンポーネントの呼び出し
import styles from '../index.module.css' //cssの読み込みの呼び出し
import { Link } from "react-router-dom"; //react-router-domコンポーネントのリンク機能の呼び出し



export const Posts = () => {

  const [isLoading, setIsLoading] = useState();
  const [posts, setPosts] = useState([]) //useState:コンポーネントにてstateを保持・更新させる

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      try {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts") //外部のjsonの読み込み
      const data = await res.json() //jsonをjsのオブジェクト形式に変換
      setPosts(data.posts) //dataの中からpostsの情報だけを抜き取る
      console.log('情報',data) //一旦dataの中身を確認する
    } finally {
      setIsLoading(false);
    }
  }

    fetcher()
  }, [])


  if(isLoading) {
    return <p>Loading...</p>;
  } else if (!posts) return <div>記事が見つかりませんでした</div>



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
                    <div className={styles.post_list_category} key={categorie}>
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